import { Routes, Route } from "react-router";
import { Landing } from "../landing/Landing";
import { Job } from "../jobs/Job";
import { CV } from "../cv/CV";

export const Router = ({}) => {
	return (
		<Routes>
			<Route path="" element={<Landing />} />
			<Route path="job/:id" element={<Job />} />
			<Route path="cv" element={<CV />} />
		</Routes>
	);
};
