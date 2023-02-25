import { Box, HomepageMessage, Divider } from "./Home.styles";

const Homepage = () => {
	return (
		<Box>
			<HomepageMessage>
				<h2>Greetings!</h2>
				<Divider />
				<br />
				Have fun adding contacts <br />
				and generating random avatars using{" "}
				<a href='https://avatars.dicebear.com/'>avatars.dicebear.com</a>
			</HomepageMessage>
		</Box>
	);
};

export default Homepage;
