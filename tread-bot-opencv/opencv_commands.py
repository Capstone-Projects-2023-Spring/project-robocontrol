# Importing the relevant libraries
import json
from typing import List
import websockets
import asyncio
from queue import Queue

class CommandWS():
	
	PORT = 10334
	HOST = '192.168.2.1'

	def __init__(self) -> None:
		self.clients = set()
		self.robot_ws = None
		self.command_q = Queue()
		self.autonomous = [False]
		self.ultrasonic_data_q = None

	async def start_server(self, command_q: Queue, autonomous: List[bool], ultrasonic_data_q: Queue):
		self.command_q = command_q
		self.autonomous = autonomous
		self.ultrasonic_data_q = ultrasonic_data_q
		# Start the servers
		async with websockets.serve(self.serve, CommandWS.HOST, CommandWS.PORT, ping_timeout=None):
			await asyncio.Future()

	async def serve(self, websocket):
		await asyncio.gather(
			self.send(websocket),
			self.receive(websocket),
		)

	async def send(self, websocket):
		print('connected')
		try:
			while True:
				if self.autonomous[0]:
					try:
						msg = self.command_q.get(timeout=0.001)
					except Exception:
						msg = None
						await asyncio.sleep(0)
					if msg:
						await websocket.send(json.dumps(msg))
				await asyncio.sleep(0.01)
		except websockets.exceptions.ConnectionClosed as e:
			print("Command client disconnected")
	
	async def receive(self, websocket):
		print("Command client connected")
		self.clients.add(websocket)
		try:
			while True:
				msg = await websocket.recv()
				print(msg)
				if (msg == 'robot'):
					self.robot_ws = websocket
				elif (msg == 'autonomous'):
					self.autonomous[0] = not self.autonomous[0]
					print('Auto:' + str(self.autonomous))
					await self.robot_ws.send(json.dumps({'direction': 'no', 'turn': 'no', 'autonomous': self.autonomous[0]}))
				elif msg.startswith('{"ultrasonic_data":'):
					ultrasonic_data = json.loads(msg)
					print(ultrasonic_data)
					self.ultrasonic_data_q.put(ultrasonic_data)

					if ultrasonic_data >= 0.1:
						await self.robot_ws.send(json.dumps({'direction': 'no', 'turn': 'no', 'autonomous': self.autonomous[0]}))
					else:
					# print("ultrasonic")
				elif(not self.autonomous[0] and self.robot_ws):
					await self.robot_ws.send(msg)
				await asyncio.sleep(0)
		except websockets.exceptions.ConnectionClosed as e:
			print("Command client disconnected")
		finally:
			self.clients.remove(websocket)
