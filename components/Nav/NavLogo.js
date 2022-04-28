import React from 'react';
import Link from 'next/link';
import { LOGO } from 'common/const';

const NavLogo = () => {
  return (
    <Link href="/">
      <a>{LOGO}</a>
    </Link>
  );
};

export default NavLogo;
