#!/usr/bin/env/python
# File name   : server.py
# Production  : GWR
# Website     : www.adeept.com
# Author      : William
# Date        : 2020/03/17
import move
import functions

PORT = 8989

speed_set = 100
rad = 0.5



fuc = functions.Functions()
fuc.start()

direction_command = 'no'
turn_command = 'no'

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


    # elif 'lookleft' == command_input:
    #     P_sc.singleServo(14, -1, 3)

    # elif 'lookright' == command_input:
    #     P_sc.singleServo(14, 1, 3)

    # elif 'LRstop' in command_input:
    #     P_sc.stopWiggle()


    # elif 'up' == command_input:
    #     T_sc.singleServo(11, -1, 3)

    # elif 'down' == command_input:
    #     T_sc.singleServo(11, 1, 3)

    # elif 'UDstop' in command_input:
    #     T_sc.stopWiggle()


    # elif 'handup' == command_input:
    #     # H1_sc.singleServo(12, 1, 7)
        
    #     H2_sc.singleServo(13, -1, 7)

    # elif 'handdown' == command_input:
    #     # H1_sc.singleServo(12, -1, 7)

    #     H2_sc.singleServo(13, 1, 7)

    # elif 'HAstop' in command_input:
    #     # H1_sc.stopWiggle()
    #     H2_sc.stopWiggle()

    # elif 'armup' == command_input:
    #     H1_sc.singleServo(12, 1, 7)
        
    #     # H2_sc.singleServo(13, 1, 7)

    # elif 'armdown' == command_input:
    #     H1_sc.singleServo(12, -1, 7)

    #     # H2_sc.singleServo(13, -1, 7)

    # elif 'Armstop' in command_input:
    #     H1_sc.stopWiggle()
    #     # H2_sc.stopWiggle()

    # elif 'grab' == command_input:
    #     G_sc.singleServo(15, 1, 3)

    # elif 'loose' == command_input:
    #     G_sc.singleServo(15, -1, 3)

    # elif 'stop' == command_input:
    #     G_sc.stopWiggle()

    # elif 'home' == command_input:
    #     P_sc.moveServoInit([11])
    #     T_sc.moveServoInit([14])
    #     H1_sc.moveServoInit([12])
    #     H2_sc.moveServoInit([13])
    #     G_sc.moveServoInit([15])

if __name__ == '__main__':
    # Test backwards movement
    robotCtrl('backward', None)
