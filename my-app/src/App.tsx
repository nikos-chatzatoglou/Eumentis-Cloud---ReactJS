import React from "react";
import { Routes, Route } from "react-router-dom";

import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import KitchenSink from "./pages/KitchenSink/KitchenSink";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Contacts />} />
			<Route path='/kitchenSink' element={<KitchenSink />} />
			<Route path='/home' element= {<Home/>}/>

			<Route path='*' element={<h1>404 Not Found</h1>} />
		</Routes>
	);
};
export default App;
