import { Button } from "antd";
import styled from "styled-components";
import {FaInfoCircle} from "react-icons/fa";
import {AiOutlineInfo} from "react-icons/ai"

export const Container = styled.div`
background: linear-gradient(180deg, #fff 0%, #B5B2AF 250%);
min-height: 100vh;
@media only screen and (max-width: 768px) {
		background: none;
	}
`
export const StyledButton = styled(Button)`
    border-radius: 10px;
    width: 100px !important;
    height: auto !important;
      @media only screen and (max-width: 480px) {
       font-size: 5px !important;
       margin: auto;
    
  }


`;

export const Wrapper = styled.div`
    display:flex;
    //justify-content:space-evenly;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 50px;
    gap:30px;
    
    @media only screen and (max-width: 480px) {
        font-size: 0.5rem;
        margin-left: auto;
    
  }
    `;

export const Info = styled(FaInfoCircle)`
   font-size: 1.2rem;
    color: #1890FF;
    margin-left: 15px;
    cursor: pointer;
    `;

export const Text = styled.p`
    font-size: 20px;
    `;

    export const SocialMsg = styled.p`
    font-size: 20px;
    color: red;
    text-decoration: underline;
    `;
