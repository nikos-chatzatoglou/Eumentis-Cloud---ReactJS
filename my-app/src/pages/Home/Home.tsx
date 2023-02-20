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

// import {
// 	Container,
// 	StyledButton,
// 	StyledText,
// 	StyledTitle,
// 	TextWrapper,
// } from "./Home.styles";
// import { Link } from "react-router-dom";

// const Home = () => {
// 	return (
// 		<Container>
// 			<TextWrapper>
// 				<StyledTitle>Greetings!</StyledTitle>
// 				<StyledText>Have fun adding contacts</StyledText>
// 				<StyledText>
// 					and generating random avatars using avatars.dicebear.com
// 				</StyledText>

// 				<Link to='/Contacts'>
// 					<StyledButton>Go to contacts</StyledButton>
// 				</Link>
// 			</TextWrapper>
// 			{/* <ImageWrapper>
// 				<StyledImage
// 					src={
// 						"https://avatars.dicebear.com/api/avataaars/your-custofffsm-seed.svg"
// 					}
// 				/>
// 			</ImageWrapper> */}
// 		</Container>
// 	);
// };

// export default Home;
