import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class Comments extends Component {
  static propTypes = {
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string
  };

  componentDidMount() {
    const { fetchComments, postId } = this.props;
    fetchComments(postId);
  }

  render() {
    const { comments } = this.props;
    if(!comments) return null;
    const commentComponents = comments.map(comment => {
      return <Comment key={comment.id} comment={comment} />;
    });

    return (
      <Fragment>
        <h2>Comments</h2>
        {commentComponents}
      </Fragment>
    );
  }
}
