import React from 'react';
import ROUTES from '../../routes';
import styles from './Header';
import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <header id={styles.header}>
      <h1>Redux Blog</h1>
      {/* <nav>
        <Link to={ROUTES.CAR_SEARCH.linkTo(plate)}>Search Cars</Link>
        <Link to={ROUTES.LOT_SEARCH.linkTo()}>Search Lot</Link>
        <Link to={ROUTES.REGISTER.linkTo()}>Regiser Car</Link>
      </nav> */}
    </header>
  );
}
