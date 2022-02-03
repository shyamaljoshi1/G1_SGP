import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    height:60px;
    background:red;
`;

const Logo = styled(Link)`
    color:#fff;
`;

const Menubars = styled.i``;
const Navmenu = styled.div``;


const Navbar = () => {
<<<<<<< HEAD:src/components/Navbar.jsx
    return (
        <Nav>
            <Logo>LOGO</Logo>
            <Menubars />
            <Navmenu />
            <h1>Navbar</h1>
        </Nav>
    )
=======
return (
    <Nav>
        <Logo>LOGO</Logo>
        <Menubars/>
        <Navmenu/>
        <h1>Navbar1</h1>    
    </Nav>
)
>>>>>>> e9f065a9591933e526faaa8670bd0956c69421a0:src/components/Navbar.js
};

export default Navbar;
