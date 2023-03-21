import cv2

def testVideo():
    for i in range(3):
        video_cap = cv2.VideoCapture(i)
        if video_cap.isOpened():
            print(f' {i}  Available')
        else: 
            print(f' {i} Unavailable')

def get_rgb():
    video_cap = cv2.VideoCapture(0)

    while True:
        read, frame = video_cap.read()
        if read:
            cv2.imshow('Webcam 0', frame)
            for j in range(frame.shape[0]):
                for k in range(frame.shape[1]):
                    r, g, b = frame[j, k]
                    print(f'Pixels: {j} {k} | R: {r} G: {g} B: {b}')

            if cv2.waitKey(1) and 0xFF == ord('q'):
                break
            else:
                break
            
    
    video_cap.release()
    cv2.destroyAllWindows()

def object_detect():
    hog = cv2.HOGDescriptor()
    hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

    video_cap = cv2.VideoCapture(0)

    while True:
        read, frame = video_cap.read()

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        objects, weights = hog.detectMultiScale(gray, winStride=(8, 8))
        
       

        # Display video stream
        cv2.imshow('Webcam 1', frame)

        # Exit on 'q' key press
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
        
    
    video_cap.release()
    cv2.destroyAllWindows()


#testVideo()
get_rgb()
#object_detect()