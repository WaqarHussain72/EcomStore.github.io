import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from'./Nav';

function Header() {
  return (
    <MainHeader>
        <NavLink to='/'>
      <img src='./images/wu-logo.png' alt='My logo ' className='logo'></img>
        </NavLink>
    <Nav/>
    </MainHeader>

  )
}
const MainHeader=styled.header`
padding:0.48rem;
height:10rem;
background-color:${({theme}) => theme.colors.bg};
display:flex;
justify-content:space-between;
position:relative;

.logo{
    height:5rem;
    margin-left:20px;
    margin-top:30px;
    background-color:transparent;
}
`;
export default Header