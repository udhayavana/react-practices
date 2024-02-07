// components/Navbar/index.js

import React from "react";

import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav style={{'display':'none'}}>
				<Bars />

				<NavMenu>
					<NavLink to="/react-practices/" >
						Home
					</NavLink>
					<NavLink to="/react-practices/about" >
						About
					</NavLink>
					<NavLink to="/react-practices/blogs" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/react-practices/sign-up" activeStyle>
						Sign Up
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/react-practices/signin">
						Sign In
					</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
