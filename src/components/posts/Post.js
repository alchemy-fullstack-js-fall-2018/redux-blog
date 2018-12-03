import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes';

function Post({ post }) {
  const { title, body, id } = post;

  return (
    <Fragment>
      <li><Link to={ROUTES.POST_DETAIL.linkTo(id)}>{title} - {body}</Link></li>
    </Fragment>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
