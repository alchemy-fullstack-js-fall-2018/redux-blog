import { ROUTES } from '../../routes/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <div id={styles.header}>
      <h1>BLOGGY McBLOG BLOG!</h1>
      <nav>
        <Link to={ROUTES.HOME.linkTo()}>Home</Link>
      </nav>
    </div>
  );
}
