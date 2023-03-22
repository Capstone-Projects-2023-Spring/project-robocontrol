# Importing the relevant libraries
import websockets
import asyncio

class CommandWS():
	
	PORT = 10334
	HOST = '192.168.2.1'

	def __init__(self) -> None:
		self.clients = set()
		self.robot_ws = None

	async def start_server(self):
		# Start the servers
		async with websockets.serve(self.serve, CommandWS.HOST, CommandWS.PORT, ping_timeout=None):
			await asyncio.Future()
	
	async def serve(self, websocket):
		print("Command client connected")
		self.clients.add(websocket)
		try:
			while True:
				msg = await websocket.recv()
				if (msg == 'robot'):
					self.robot_ws = websocket
					print('Found robot')
				elif(self.robot_ws):
					await self.robot_ws.send(msg)
					print('Command sent')
		except websockets.exceptions.ConnectionClosed as e:
			print("Command client disconnected")
		finally:
			self.clients.remove(websocket)
