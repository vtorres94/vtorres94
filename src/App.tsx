import { useState } from "react";
import { JobsContext } from "./contexts/JobsContext";
import { Body, Footer, Header } from "./layout";
import { BrowserRouter } from "react-router";
import DATA from "./static/jobs.json";
import "./App.css";

function App() {
	const [jobs, _setJobs] = useState<any>(DATA.jobs);
	return (
		<JobsContext.Provider value={jobs}>
			<BrowserRouter>
				<Header />
				<Body />
				<Footer />
			</BrowserRouter>
		</JobsContext.Provider>
	);
}

export default App;
