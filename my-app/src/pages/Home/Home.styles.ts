import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 background: linear-gradient(180deg, #fff 0%, #B5B2AF 250%);
 
 min-height: 100vh;
`;
    
export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;

export const StyledTitle = styled.h1`
    font-size: 48px;
    
    margin-bottom: 24px;
    text-align: center;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
`;
export const StyledText = styled.p`
    font-size: 24px;
    margin-bottom: 24px;
    text-align: center;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
`;

export const StyledButton = styled(Button)`
    background: #0056b3;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    &:hover {
        color: #0056b3;
         background: #94e8b4;
            }
`;

export const StyledImage= styled.img`
    width: 400px;
    height: 200px;
    `;
