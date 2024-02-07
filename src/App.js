// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/react-practices/" element={<Home />} />
				<Route path="/react-practices/about" element={<About />} />
				<Route path="/react-practices/blogs" element={<Blogs />} />
				<Route
					path="/react-practices/sign-up"
					element={<SignUp />}
				/>
			</Routes>
		</Router>
	);
}

export default App;