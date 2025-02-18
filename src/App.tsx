import "./App.css";
import { Body, Footer, Header } from "./layout";
import { BrowserRouter } from "react-router";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Body />
			<Footer />
			<div className="app">
				<div className="stars"></div>
			</div>
		</BrowserRouter>
	);
}

export default App;
