import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger } from "./Header.styles";
const Navbar = () => {
	return (
		<>
			<PrimaryNav>
				<Hamburger />
				<Menu>
					<MenuLink to='/'>Home</MenuLink>
					<MenuLink to='/contacts'>About</MenuLink>
				</Menu>
			</PrimaryNav>
		</>
	);
};
export default Navbar;
