import React from 'react';

import NavLogo from 'components/Nav/NavLogo';
import NavLoginMenus from 'components/Nav/NavLoginMenus';
import NavMenus from 'components/Nav/NavMenus';

import styled from '@emotion/styled';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const Nav = ({ isDarkMode, toggle }) => {
  return (
    <NC>
      <NavLogo />
      <NavMenus />
      <DarkModeBtn onClick={toggle}>
        {isDarkMode ? (
          <IoSunnyOutline style={{ color: '#000', fontSize: '1.5em' }} />
        ) : (
          <IoMoonOutline style={{ color: '#fff', fontSize: '1.5em' }} />
        )}
      </DarkModeBtn>
      <NavLoginMenus />
    </NC>
  );
};

const NC = styled.nav`
  width: 100%;
  height: 7.5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 10;
  // background: ${props => props.theme.background};
  // color: ${props => props.theme.text}
  border-bottom: 1px solid #eee;
`;

const DarkModeBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5em;
  height: 2.5em;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.text};
`;

export default Nav;
