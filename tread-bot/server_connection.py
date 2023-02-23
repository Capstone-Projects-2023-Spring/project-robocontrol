"""Web Socket"""
#!/usr/bin/env python

import asyncio
import websockets

async def handler(websocket):
    """Websocket Handler"""
    async for message in websocket:
        print("Message: " + message)

async def main():
    """Main method"""
    async with websockets.serve(handler, "172.26.5.67", 8888):
        await asyncio.Future()  # run forever

asyncio.run(main())