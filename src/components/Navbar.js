import React from "react";
import styled,{css} from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import Bars from "../images/bars.svg"


const Nav = styled.nav`
  height: 6rem;
  /* background: red; */
  /* background: #17ada8; */
  background:#0000003b;
  display:flex;
  justify-content:space-between;
  padding:1rem 2rem;
  z-index:100;
  position:fixed;
  width:100%;
`;
const NavLinks=css`
  color:#fff;
  display: flex;
  align-items:center;
  padding: 0 2rem;
  height: 100%;
  cursor:pointer;
  text-decoration:none;
  font-size: 1.5rem;
`;

const Logo = styled(Link)`
  ${NavLinks};
  color:#fff;
  font-style:italic;
  font-weight:bold;
`;

const Menubars = styled.i`
  display: none;

  @media screen and (max-width:768px){
    display: block;
    background-image:url(${Bars});
    background-size:contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-50%,25%);
  }
`;

const Navmenu = styled.div`
  display:flex;
  align-items:center;
  margin-right: -48px;

  @media screen and (max-width:768px){
    display: none;
  }
`;

const NavMenuLinks=styled(Link)`
  ${NavLinks};
`;

const NavButton=styled.div`
  display: flex;
  align-items:center;
  margin-right: 2.4rem;

  @media screen and (max-width:768px){
    display: none;
  }
`;

const Navbar = ({toggle}) => {
  
  return (
    <Nav >
      <Logo>LOGO</Logo>
      <Menubars onClick={toggle} />
      <Navmenu>
      {menuData.map((item,index)=>(
        <NavMenuLinks to={item.link} key={index}>
          {item.title}
        </NavMenuLinks>
      ))}
      </Navmenu>
      <NavButton>
        <Button to='/contact' primary='true'>
          Contact Us
        </Button>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
