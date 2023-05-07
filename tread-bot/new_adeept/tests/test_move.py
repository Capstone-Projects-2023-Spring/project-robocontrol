import move

def test_arm_claw_control1():
    claw_command = 'up'
    shoulder_command = 'up'
    elbow_command = 'open'
    camera_command = 'up'
    move.arm_claw_control(claw_command, shoulder_command, elbow_command, camera_command)

def test_arm_claw_control2():
    claw_command = 'down'
    shoulder_command = 'down'
    elbow_command = 'close'
    camera_command = 'down'
    move.arm_claw_control(claw_command, shoulder_command, elbow_command, camera_command)

def test_arm_claw_control3():
    claw_command = 'no'
    shoulder_command = 'no'
    elbow_command = 'no'
    camera_command = 'no'
    move.arm_claw_control(claw_command, shoulder_command, elbow_command, camera_command)