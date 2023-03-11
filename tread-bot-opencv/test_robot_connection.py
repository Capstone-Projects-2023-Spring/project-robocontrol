import unittest
import asyncio
import websockets
from unittest.mock import MagicMock, patch
from websocket import base64_to_cv2, listen

class TestWebSocket(unittest.TestCase):
	
	# patch decorator from unittest.mock library
	# temporarily replace the "connect" function from the "websockets" module with a mock object.
    # allows us to simulate the behavior of the "connect" function without actually connecting to the server.
	@patch('websockets.connect')

	# use asynchronous function with await
	async def test_listen(self, mock_ws_connect):
		# set mock msg
		mock_packet = 'mock packet'
		mock_image = MagicMock()
		mock_base64_to_cv2 = MagicMock(return_value=mock_image)
		listen.cv2.imshow = MagicMock()
		listen.cv2.waitKey = MagicMock(return_value=29)
		
		# set websocket connection's and returned msg
		mock_ws = MagicMock()
		mock_ws.recv = MagicMock(return_value=mock_packet)
		mock_ws_connect.return_value = mock_ws
		
		# run listen() method and then test result
		await listen() # wait for new msg to arrive over the websocket connection before continuing to execute
		mock_ws_connect.assert_called_once_with(listen.WEBSOCKET)
		mock_ws.recv.assert_called_once()
		mock_base64_to_cv2.assert_called_once_with(mock_packet)
		listen.cv2.imshow.assert_called_once_with('Socket data', mock_image)
		listen.cv2.waitKey.assert_called_once_with(1)
		
if __name__ == '__main__':
	unittest.main()
	