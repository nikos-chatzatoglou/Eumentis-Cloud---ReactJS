import React from "react";
import { Routes, Route } from "react-router-dom";

import LoadMainPage from "./pages/LoadMainPage/LoadMainPage";
import KitchenSink from "./pages/KitchenSink/KitchenSink";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<LoadMainPage />} />
			<Route path='/kitchenSink' element={<KitchenSink />} />

			<Route path='*' element={<h1>404 Not Found</h1>} />
		</Routes>
	);
};
export default App;
