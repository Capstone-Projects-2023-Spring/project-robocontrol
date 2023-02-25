import Styles from "./AppStyles";

const WS_URL = `wss://ryanhodge.net/ws/`
const ws = new WebSocket(WS_URL)

function App() {
	return (
		<Styles.AppContainer>
			<button onClick={() => ws.send('Test Message')}>Test Communication</button>
		</Styles.AppContainer>
	);
}

export default App;
