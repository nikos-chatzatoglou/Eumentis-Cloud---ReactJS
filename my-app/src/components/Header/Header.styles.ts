import styled from "styled-components";
import { Link } from "react-router-dom";
interface IContainerProps {
	isMenuOpen: boolean;
}

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
  
  /* @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
    width: 100%;
    height: 100vh;
    z-index: 1;
    transition: all 0.3s ease-in-out;
  }
`;
 */
export const Hamburger = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: block;
		cursor: pointer;
	}
`;

export const Menu = styled.div`
	display: flex;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const MenuItem = styled(Link)`
	margin-left: 20px;
	color: white;
	text-decoration: none;
`;