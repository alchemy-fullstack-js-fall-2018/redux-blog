import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../comments/CommentList';

export default class PostDetail extends PureComponent {

  static propTypes = {
    post: PropTypes.object,
    comments: PropTypes.array.isRequired,
    fetchComments: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func
  };

  componentDidMount() {
    const { fetchComments, fetchPosts } = this.props;
    const { id } = this.props.match.params;
    fetchComments(id);
    fetchPosts();
  }

  render() {
    if(!this.props.post) {
      return null;
    }
    const { id, userId, title, body } = this.props.post;
    const { comments } = this.props;

    return (
      <div>
        <p>id: {id}</p>
        <p>userId: {userId}</p>
        <p>title: {title}</p>
        <p>body: {body}</p>
        <CommentList comments={comments} />
      </div>
    );

  }
}
