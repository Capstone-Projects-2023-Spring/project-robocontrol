import asyncio
import websockets
import json

async def test_client(index):
    uri = "ws://127.0.0.1:10341"
    async with websockets.connect(uri) as websocket:
        print(f"Client {index} connected to server")
        await websocket.send(json.dumps({'type': 'join_queue'}))
        response = await websocket.recv()
        print(f"Client {index} received message: {response}")

async def main():
    num_clients = 5  
    tasks = [test_client(i) for i in range(num_clients)]
    await asyncio.gather(*tasks)

if __name__ == '__main__':
    asyncio.run(main())
