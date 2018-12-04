import React from 'react';
import { navLinks } from '../../routes';

export default function Header() {
  return (
    <header>
      <nav>
        {navLinks}
      </nav>
      <h1>Redux Blog</h1>
    </header>
  );
}
