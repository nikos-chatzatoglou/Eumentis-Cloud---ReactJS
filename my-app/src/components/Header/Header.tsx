import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Hamburger, Menu, MenuItem } from "./Header.styles";

interface HeaderProps {
	isOpen: boolean;
	toggle: () => void;
}
const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Container>
				{/* {!isOpen && (
					<Link to='/'>
						<h2>Home</h2>
					</Link>
				)} */}
				<Hamburger onClick={toggleMenu}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
					</svg>
				</Hamburger>
				<Menu style={{ display: isOpen ? "flex" : "none" }}>
					<MenuItem to='/'>Home</MenuItem>
					<MenuItem to='/contacts'>Contacts</MenuItem>
					<MenuItem to='/'>Log In</MenuItem>
				</Menu>
			</Container>
		</>
	);
};

export default Header;
