import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/client';
import styled from '@emotion/styled';
import { MENUS } from '../../common/const';

const Navigation = () => {
  const router = useRouter();
  const [session] = useSession();

  return (
    <NC>
      <Link href="/">LOGO</Link>
      <Menus>
        {MENUS.map(menu => (
          <Link key={menu} href={menu === 'HOME' ? '/' : menu.toLowerCase()}>
            {menu}
          </Link>
        ))}
      </Menus>
      <LoginMenus>
        {session ? (
          <>
            Signed in as {session.user.name} <br />
            <LoginBtn onClick={() => signOut()}>로그아웃</LoginBtn>
          </>
        ) : (
          <>
            <LoginBtn onClick={() => signIn()}>로그인</LoginBtn>
            <LoginBtn>회원 가입</LoginBtn>
          </>
        )}
      </LoginMenus>
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
  background-color: white;
  border-bottom: 1px solid #eee;
`;

const Menus = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    margin: 0 48px;
  }
`;

const LoginMenus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.button`
  padding: 12px 6px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: transparent;
  margin: 0 24px;
`;

export default Navigation;
