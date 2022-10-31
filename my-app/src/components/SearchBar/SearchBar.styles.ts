import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import { SearchOutlined } from "@ant-design/icons";

export const SearchBarContainer = styled.div`
    margin-top: 25px;
    margin-left: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

export const SearchBarInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border: none;
    outline: none;
    font-size: 1.2rem;
    background-color: transparent;
`;

export const SearchBarIcon = styled(SearchOutlined)`
    font-size: 1.2rem;
    color: #000;
    margin-left: 15px;
`;

