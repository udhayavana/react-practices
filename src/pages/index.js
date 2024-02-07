// pages/index.js

import React from 'react';
import ToggleSidebar from "../components/SideBar";

const Home = () => {
return (
	
	<div
	style={{
		display: 'flex',
		justifyContent: 'centre',
		alignItems: 'centre',
		height: '100vh'
	}}
	>
		<ToggleSidebar />
	<h1>Welcome to GeeksforGeeks</h1>
	</div>
);
};

export default Home;
