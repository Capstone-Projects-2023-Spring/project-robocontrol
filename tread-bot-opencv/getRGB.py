import cv2

def get_rgb(frames):
    video_cap = cv2.VideoCapture(0)

    for i in range(frames):
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


get_rgb(1)