import asyncio
import websockets


async def connect_and_send_message(uri, message):
    async with websockets.connect(uri) as websocket:
        await websocket.send(message)
        response = await websocket.recv()
        print(f"Received: {response}")


async def main():
    uri = "ws://localhost:10334"
    message = "This is a Test Message"

    tasks = [connect_and_send_message(uri, message) for _ in range(3)]
    await asyncio.gather(*tasks)


if __name__ == "__main__":
    asyncio.run(main())