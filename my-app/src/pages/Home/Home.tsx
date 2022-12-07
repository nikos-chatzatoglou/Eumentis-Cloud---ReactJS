import {
	Container,
	StyledButton,
	StyledImage,
	StyledText,
	StyledTitle,
	TextWrapper,
} from "./Home.styles";

const Home = () => {
	return (
		<Container>
			<TextWrapper>
				<StyledTitle>Greetings!</StyledTitle>
				<StyledText>Have fun adding contacts</StyledText>
				<StyledText>
					and generating random avatars using avatars.dicebear.com
				</StyledText>
				<StyledButton>Go to contacts</StyledButton>
			</TextWrapper>
			<div>
				<StyledImage
					src={
						"https://avatars.dicebear.com/api/avataaars/your-custofffsm-seed.svg"
					}
				/>
			</div>
		</Container>
	);
};

export default Home;
