import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Comments from '../comments/Comments';

export default class PostDetail extends Component {
  static propTypes = {
    post: PropTypes.object,
    fetchPost: PropTypes.func,
    match: PropTypes.object,
    fetchComments: PropTypes.func,
    comments: PropTypes.array
  };

  componentDidMount() {
    const { fetchPost, match } = this.props;
    fetchPost(match.params.id);
  }

  render() {
    const { post, comments, fetchComments, match } = this.props;
    console.log(comments, 'comments')
    if(!post || !comments) return null;
    return (
      <Fragment>
        <h2>Post Detail</h2>
        <h3>Title: {post.title}</h3>
        <h3>{post.body}</h3>
        <Comments comments={comments} fetchComments={fetchComments} postId={match.params.id} />
      </Fragment>
    );
  }
}
