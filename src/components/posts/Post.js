import React, { Fragment } from 'react';
import ROUTES from '../../routes/routes';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
    <Fragment>
      <Link to={ROUTES.POST_DETAIL.linkTo(post.id)}>
        {post.title}
      </Link><br />
    </Fragment>
  );
}
