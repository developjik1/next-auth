import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MENUS } from 'common/const';
import styled from '@emotion/styled';

const NavMenus = () => {
  const router = useRouter();

  return (
    <Menus>
      {MENUS.map(menu => (
        <Link
          key={menu}
          href={menu === 'HOME' ? '/' : '/' + menu.toLowerCase()}
        >
          <a
            style={
              router.pathname.substring(1, router.pathname.length) ===
                menu.toLowerCase() ||
              (router.pathname === '/' && menu === 'HOME')
                ? { borderBottom: '1px solid #4aa8d8', color: '#4aa8d8' }
                : {}
            }
          >
            {menu}
          </a>
        </Link>
      ))}
    </Menus>
  );
};

const Menus = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    margin: 0 48px;
  }
`;

export default NavMenus;
