import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostCard from './PostCard.jsx';
import Loader from '../../lib/Loader.jsx';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default class PostList extends PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func,
    postUpdateQuery: PropTypes.func,
    isLoading: PropTypes.bool
  };

  componentDidMount() {
    const { fetchPosts } = this.props;
    if(fetchPosts) this.props.fetchPosts();
  }

  render() {
    const { posts, isLoading } = this.props;
    const postList = posts.map(post => {
      return (
        <PostCard
          key={post.id}
          post={post}
        />
      );
    });

    const gif = 'https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif'

    return (
      <div>
        {isLoading ?
          <Loader src={gif} />
          :
          <StyledDiv>
            {postList}
          </StyledDiv>
        }
      </div>
    );

  }
}
