from collections import deque

class WaitingQueue:

    def __init__(self):
        self.queue = deque()

    def add_user(self, user):
        self.queue.append(user)

    def remove_user(self, user):
        self.queue.remove(user)

    def get_current_user(self):
        return self.queue[0] if len(self.queue) > 0 else None
