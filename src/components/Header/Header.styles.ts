import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import {Link } from 'react-router-dom'

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background: #E1EEDD;
  //justify-content: space-between;
  //padding: 0.18rem calc((100vw - 1000px) / 2);
`
export const MenuLink = styled(Link)`
  color: #000;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: #1890FF;
  @media screen and (max-width: 480px) {
    display: block;
    font-size: 1.5rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: -25px;
  font-size: 1rem;
  @media screen and (max-width: 480px) {
    display: none;
  }
`