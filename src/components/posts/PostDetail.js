import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class PostDetail extends Component {
  static propTypes = {
    post: PropTypes.object
  };

  render() {
    const { post } = this.props;

    return (
      <Fragment>
        <h2>Post Detail</h2>
        <h3>Title: {post.title}</h3>
        <h3>{post.body}</h3>
      </Fragment>
    );
  }
}
