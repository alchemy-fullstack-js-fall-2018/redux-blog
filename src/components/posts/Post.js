import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import PropTypes from 'prop-types';




const Post = ({ post }) => {
  const { id, userId, title, body } = post;
  return (
    <Fragment>
      <p>id: {id}</p>
      <p>userId: {userId}</p>
      <p>title: {title}</p>
      <p>body: {body.slice(0, 40)} ...</p>
      <Link to={ROUTES.POST_DETAIL.linkTo(id)}>More Details</Link>
    </Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
