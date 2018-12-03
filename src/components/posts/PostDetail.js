import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Comments from '../../containers/comments/Comments';

export default class PostDetail extends PureComponent {

  static propTypes = {
    post: PropTypes.object.isRequired,
    fetchPost: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const id = parseInt(this.props.match.params.id);
    const { title, body } = this.props.post;

    return (
      <Fragment>
        <h2>Post Detail</h2>
        <h2>Title: {title}</h2>
        <p>Body: {body}</p>
        <Comments postId={id} />
      </Fragment>
    );
  }
}
