import React from 'react';
import { shallow } from 'enzyme';
import PostDetail from '../PostDetail.jsx';
import mockPosts from '../../../../testing/fixtures/posts.json';
import mockComments from '../../../../testing/fixtures/comments.json';

describe('<PostDetail />', () => {
  test('renders', () => {
    const post = mockPosts[0];
    const id = post.userId;
    const comments = mockComments.filter(comment => comment.postId === id);
    const fetchComments = jest.fn();
    const match = { params: { id: id } };
    const wrapper = shallow(
      <PostDetail
        post={post}
        comments={comments}
        fetchComments={fetchComments}
        match={match}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
