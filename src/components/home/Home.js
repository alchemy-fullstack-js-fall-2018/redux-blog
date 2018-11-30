import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

export default function Home() {
  return (
    <div>
      <h1>Links below</h1>
      <ul>
        <li>
          {/* <Link to={ROUTES.ALL_CARS.linkTo()}>All Registered cars</Link> */}
        </li>
      </ul>
    </div>
  );
};
