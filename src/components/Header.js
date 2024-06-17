import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #1a1a1a, #333333); /* Dark gradient background */
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
  animation: ${fadeIn} 1.5s ease-out;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Sabtech</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;