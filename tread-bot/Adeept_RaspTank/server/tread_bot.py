#!/usr/bin/env/python
# File name   : server.py
# Production  : GWR
# Website     : www.adeept.com
# Author      : William
# Date        : 2020/03/17
import move
import RPIservo
import functions
from tornado import httpserver, websocket, ioloop, web

PORT = 8989

speed_set = 100
rad = 0.5

# Initialize the servos
scGear = RPIservo.ServoCtrl()
scGear.moveInit()
P_sc = RPIservo.ServoCtrl()
P_sc.start()
T_sc = RPIservo.ServoCtrl()
T_sc.start()
H1_sc = RPIservo.ServoCtrl()
H1_sc.start()
H2_sc = RPIservo.ServoCtrl()
H2_sc.start()
G_sc = RPIservo.ServoCtrl()
G_sc.start()

fuc = functions.Functions()
fuc.start()

direction_command = 'no'
turn_command = 'no'

init_pwm0 = scGear.initPos[0]
init_pwm1 = scGear.initPos[1]
init_pwm2 = scGear.initPos[2]
init_pwm3 = scGear.initPos[3]
init_pwm4 = scGear.initPos[4]

def servoPosInit():
    scGear.initConfig(0,init_pwm0,1)
    P_sc.initConfig(1,init_pwm1,1)
    T_sc.initConfig(2,init_pwm2,1)
    H1_sc.initConfig(3,init_pwm3,1)
    G_sc.initConfig(4,init_pwm4,1)
    H2_sc.initConfig(5,init_pwm3,1)

def robotCtrl(command_input, response):
    global direction_command, turn_command
    if 'forward' == command_input:
        direction_command = 'forward'
        move.move(speed_set, 'forward', 'no', rad)
    
    elif 'backward' == command_input:
        direction_command = 'backward'
        move.move(speed_set, 'backward', 'no', rad)

    elif 'DS' in command_input:
        direction_command = 'no'
        if turn_command == 'no':
            move.move(speed_set, 'no', 'no', rad)


    elif 'left' == command_input:
        turn_command = 'left'
        move.move(speed_set, 'no', 'left', rad)

    elif 'right' == command_input:
        turn_command = 'right'
        move.move(speed_set, 'no', 'right', rad)

    elif 'TS' in command_input:
        turn_command = 'no'
        if direction_command == 'no':
            move.move(speed_set, 'no', 'no', rad)
        else:
            move.move(speed_set, direction_command, 'no', rad)


    elif 'lookleft' == command_input:
        P_sc.singleServo(14, -1, 3)

    elif 'lookright' == command_input:
        P_sc.singleServo(14, 1, 3)

    elif 'LRstop' in command_input:
        P_sc.stopWiggle()


    elif 'up' == command_input:
        T_sc.singleServo(11, -1, 3)

    elif 'down' == command_input:
        T_sc.singleServo(11, 1, 3)

    elif 'UDstop' in command_input:
        T_sc.stopWiggle()


    elif 'handup' == command_input:
        # H1_sc.singleServo(12, 1, 7)
        
        H2_sc.singleServo(13, -1, 7)

    elif 'handdown' == command_input:
        # H1_sc.singleServo(12, -1, 7)

        H2_sc.singleServo(13, 1, 7)

    elif 'HAstop' in command_input:
        # H1_sc.stopWiggle()
        H2_sc.stopWiggle()

    elif 'armup' == command_input:
        H1_sc.singleServo(12, 1, 7)
        
        # H2_sc.singleServo(13, 1, 7)

    elif 'armdown' == command_input:
        H1_sc.singleServo(12, -1, 7)

        # H2_sc.singleServo(13, -1, 7)

    elif 'Armstop' in command_input:
        H1_sc.stopWiggle()
        # H2_sc.stopWiggle()

    elif 'grab' == command_input:
        G_sc.singleServo(15, 1, 3)

    elif 'loose' == command_input:
        G_sc.singleServo(15, -1, 3)

    elif 'stop' == command_input:
        G_sc.stopWiggle()

    elif 'home' == command_input:
        P_sc.moveServoInit([11])
        T_sc.moveServoInit([14])
        H1_sc.moveServoInit([12])
        H2_sc.moveServoInit([13])
        G_sc.moveServoInit([15])

class MainHandler(web.RequestHandler):
    def get(self):
        print ("[HTTP](MainHandler) User Connected.")

class WSHandler(websocket.WebSocketHandler):
    def check_origin(self, origin):
        return True
    
    def open(self):
        print('[WS] Connection was opened.')
    
    # Print out the message when received
    def on_message(self, message):
        print('[WS] Incoming message:', message)

    def on_close(self):
        print('[WS] Connection was closed.')

if __name__ == '__main__':
    application = web.Application([(r'/', MainHandler), (r'/ws', WSHandler)])

    # Start the web server
    try:
        http_server = httpserver.HTTPServer(application)
        http_server.listen(PORT)
        main_loop = ioloop.IOLoop.instance()

        print ("Tornado Server started")
        main_loop.start()
    except:
        print ("Exception triggered - Tornado Server stopped.")
    
    # Initialize the starting position of the servo
    servoPosInit()

    # Test backwards movement
    robotCtrl('backward', None)
