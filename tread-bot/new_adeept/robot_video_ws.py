# Importing the relevant libraries
import os

class RobotVideoWS():
	def run(self):
		# Run the gstream command
		gstr = 'libcamera-vid -t 0 -n --inline -o - | gst-launch-1.0 -v fdsrc fd=0 ! udpsink host=192.168.2.1 port=8888'
		os.system(gstr)
