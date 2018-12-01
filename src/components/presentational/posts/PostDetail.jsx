import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../comments/CommentList.jsx';

export default class PostDetail extends PureComponent {

  static propTypes = {
    post: PropTypes.object.isRequired,
    fetchComments: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchComments } = this.props;
    const { id } = this.props.match.params;
    fetchComments(id);
  }

  render() {
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
