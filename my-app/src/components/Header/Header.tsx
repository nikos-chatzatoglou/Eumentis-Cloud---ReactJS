import { Container } from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<Container>
				<Link to='/'>
					<h2>Home</h2>
				</Link>
				<Link to='/contacts'>
					<h2>Contacts</h2>
				</Link>
				<Link to='/'>
					<h2>Log In</h2>
				</Link>
			</Container>
		</>
	);
};

export default Header;
