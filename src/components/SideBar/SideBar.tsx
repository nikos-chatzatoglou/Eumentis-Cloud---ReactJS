import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

type SideBarProps = {
	pageWrapId: string;
	outerContainerId: string;
};

const SideBar: React.FC<SideBarProps> = ({ pageWrapId, outerContainerId }) => {
	return (
		<Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
			<Link className='menu-item' to='/'>
				Home
			</Link>
			<Link className='menu-item' to='/about'>
				About
			</Link>
			<Link className='menu-item' to='/contact'>
				Contact
			</Link>
		</Menu>
	);
};

export default SideBar;
