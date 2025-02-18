import { Routes, Route } from "react-router";
import { Landing } from "../landing/Landing";

export const Router = ({}) => {
	return (
		<Routes>
			<Route path="" element={<Landing />} />
		</Routes>
	);
};
