import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Posts extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
  };

  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }
  render() {
    const { posts } = this.props;
    return (
      <Fragment>
        <ul>
          {posts.map(({ id, title, body }) => <li key={id}>{title} - {body}</li>)}
        </ul>
      </Fragment>
    );
  }
}
