import styled from "styled-components";

export const Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const HomepageMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 10px;
	font-size: 32px;
	animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	font-family: 'Times New Roman', Times, serif;

	@media only screen and (max-width: 768px) {
		font-size: 18px;
	}

	@keyframes scale-up-center {
		0% {
			transform: scale(0.5);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
`;

export const Divider = styled.hr`
	border: none;
	height: 3px;
	background: linear-gradient(to right, #1f6feb, #67d0ff, #1f6feb);
	margin: 20px 0;
	width: 50%;
`;

export const Container = styled.div`
  display: flex;
  background-color: cornflowerblue;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;