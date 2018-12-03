import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default class Posts extends PureComponent {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    fetchComments: PropTypes.func.isRequired,
    postId: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  render() {
    const { comments } = this.props.comments;

    const commentItems = comments.map(comment => <Comment key={comment.id} comment={comment} />);

    return (
      <Fragment>
        <h2>Comments</h2>
        <div>
          {commentItems}
        </div>
      </Fragment>
    );
  }
}
