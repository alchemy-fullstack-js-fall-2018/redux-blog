import React from 'react';
import styles from './Header';
// import { navLinks } from '../../routes';

export default function Header() {
  return(
    <header id={styles.header}>
      <h1>Redux Blog</h1>
      <nav>
      {/* {navLinks} */}
      </nav>
    </header>
  );
}
