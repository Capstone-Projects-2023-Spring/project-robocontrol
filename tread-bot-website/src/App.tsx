import Styles from "./AppStyles";

const WS_URL = `wss://ryanhodge.net/ws/robot`
const ws = new WebSocket(WS_URL) // A websocket for the robot

function App() {
	return (
		<Styles.AppContainer>
			<Styles.Content>
				<Router>
					<Banner/>
					{/* Define routes within the website */}
					<Routes>
						<Route path={'/'} element={<Home/>}/>
						<Route path={PATHS.HOME} element={<Home/>}/>
						<Route path={PATHS.CONTROL} element={<Control/>}/>
					</Routes>
				</Router>
			</Styles.Content>
		</Styles.AppContainer>
	);
}

export default App;
