import Styles from "./AppStyles";
import Banner from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import Control from "./components/Control";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PATHS } from "./tools/Constants";
import Home from "./components/Home";
import About from "./components/About";



function App() {
	return (
		<Styles.AppContainer>
			<Styles.Content>
				<Router>
					<Banner />
					{/* Define routes within the website */}
					<Routes>
						<Route path={'/'} element={<Home />} />
						<Route path={PATHS.HOME} element={<Home />} />
						<Route path={PATHS.CONTROL} element={<Control />} />
						<Route path={PATHS.ABOUT} element={<About />} /> {/* Add this line */}
					</Routes>
				</Router>
			</Styles.Content>
		</Styles.AppContainer>
	);
}

export default App;
