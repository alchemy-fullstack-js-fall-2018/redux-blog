import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Posts from '../posts/Posts';

export default class Home extends PureComponent {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    longestPosts: PropTypes.array.isRequired,
  };

  render() {
    const { longestPosts, fetchPosts } = this.props;

    if(!fetchPosts || !longestPosts) return null;
    
    return (
      <Fragment>
        <h2>Welcome Home</h2>
        <p>
          Lorem ipsum dolor Bob Ross... Let’s make a happy little mountain now. You have to make almighty decisions when you’re the creator. Let’s make a nice big leafy tree. Remember how free clouds are. They just lay around in the sky all day long.
        </p>
        <Posts posts={longestPosts} fetchPosts={fetchPosts} />
      </Fragment>
    );
  }
}
