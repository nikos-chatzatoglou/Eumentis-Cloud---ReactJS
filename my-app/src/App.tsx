import React from "react";

import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import KitchenSink from "./pages/KitchenSink/KitchenSink";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
const App = () => {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/contacts' element={<Contacts />}></Route>
				<Route path='/KitchenSink' element={<KitchenSink />}></Route>
				<Route path='*' element={<h1>404 Not Found</h1>}></Route>
			</Routes>
		</>
	);
};
export default App;
