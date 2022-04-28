import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/client';

import { LOGIN, LOGOUT, SIGNUP } from 'common/const';
import styled from '@emotion/styled';

const NavLoginMenus = () => {
  const router = useRouter();
  const [session] = useSession();

  return (
    <LoginMenus>
      {session ? (
        <>
          {session.user.name} 님 <br />
          <LoginBtn onClick={() => signOut()}>{LOGOUT}</LoginBtn>
        </>
      ) : (
        <>
          <LoginBtn onClick={() => signIn()}>{LOGIN}</LoginBtn>
          <Link href="/signUp">
            <a
              style={
                router.pathname === '/signUp'
                  ? { borderBottom: '1px solid #4aa8d8', color: '#4aa8d8' }
                  : {}
              }
            >
              {SIGNUP}
            </a>
          </Link>
        </>
      )}
    </LoginMenus>
  );
};

const LoginMenus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.button`
  padding: 0 6px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: transparent;
  margin: 0 24px;
  font-size: 16px;
`;

export default NavLoginMenus;
