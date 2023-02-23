import Styles from "./AppStyles";

const PORT = 8888;
const WS_URL = `wss://172.26.5.67:${PORT}/ws`
const ws = new WebSocket(WS_URL)

function App() {
	return (
		<Styles.AppContainer>
			<button onClick={() => ws.send('Test Message')}>Test Communication</button>
		</Styles.AppContainer>
	);
}

export default App;
