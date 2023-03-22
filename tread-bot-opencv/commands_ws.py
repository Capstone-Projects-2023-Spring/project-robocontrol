# Importing the relevant libraries
import websockets

class CommandWS():
	
	PORT = 10334
	HOST = '192.168.2.1'

	def __init__(self) -> None:
		self.clients = set()
		self.robot_ws = None
	
	async def serve(self, websocket):
		print("Command client connected")
		self.clients.add(websocket)
		try:
			while True:
				msg = await websocket.recv()
				# TODO: Find out how to get robot websocket set
				# if (self.robot_ws):
				# 	self.robot_ws.send(msg)
				websockets.broadcast(self.clients, msg)
		except websockets.exceptions.ConnectionClosed as e:
			print("Command client disconnected")
		finally:
			self.clients.remove(websocket)
