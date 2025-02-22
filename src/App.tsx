import "./App.css";
import { Body, Footer, Header } from "./layout";
import { BrowserRouter } from "react-router";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Body />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
