# Documentation

## Gstreamer
Compiling GStreamer with OpenCV on Ubuntu: https://linuxize.com/post/how-to-install-opencv-on-ubuntu-20-04/

Simplest command to stream data with
```sh
# Commands found here: https://stackoverflow.com/questions/39492658/working-example-of-rtpvrawpay-in-gstreamer
# Server command to stream from the raspberry pi. No encoding.
gst-launch-1.0 libcamerasrc ! queue ! video/x-raw, width=640, height=480, framerate=30/1  ! rtpvrawpay ! udpsink host=192.168.2.1 port=8888

# Client command to read in the above command
gst-launch-1.0 udpsrc port="8888" caps="application/x-rtp, sampling=(string)YCbCr-4:2:0, depth=(string)8, width=(string)640, height=(string)480" ! rtpvrawdepay ! xvimagesink
```

### Gstreamer Tread Bot Command
```sh
# Send pi camera to udp encoded with h264; 192.168.2.1:8888
libcamera-vid -t 0 -n --inline -o - | gst-launch-1.0 -v fdsrc fd=0 ! udpsink host=192.168.2.1 port=8888
```

### Gstreamer Server Command(s)
```python
# Splits udp video into two outputs: OpenCV and HLS
in = cv2.VideoCapture('udpsrc port=8888 ! tee name=t ! queue ! h264parse ! avdec_h264 ! videoconvert ! appsink drop=1 t. ! queue ! hlssink playlist-root=http://192.168.2.1:9999 location=/home/gstreamer/hlstest/segment_%05d.ts target-duration=5 max-files=5')
# HLS command for testing TODO: Change playlist and segment names
gst-launch-1.0 udpsrc port=8888 ! h264parse ! mpegtsmux ! hlssink playlist-root=https://www.ryanhodge.net/stream location=/var/www/media/segment_%05d.ts playlist-location=/var/www/media/playlist.m3u8 target-duration=5 max-files=5

# Testing with HLSSINK **WORKS with h264 encoding**
gst-launch-1.0 udpsrc port=8888 ! h264parse ! mpegtsmux ! hlssink max-files=5
```

Will need to change the HLS path most likely
```python
# Outputs OpenCV to HLS
out = cv2.VideoWriter('appsrc ! x264enc ! hlssink playlist-root=http://192.168.2.1:9999 location=/home/gstreamer/hlstest/segment_%05d.ts target-duration=5 max-files=5')
```

## H264 Encoding
```sh
# h264 encoding server
libcamera-vid -t 0 -n --inline -o - | gst-launch-1.0 -v fdsrc fd=0 ! udpsink host=192.168.2.1 port=8888

# Client
gst-launch-1.0 udpsrc port=8888 ! queue ! h264parse ! avdec_h264 ! xvimagesink
```