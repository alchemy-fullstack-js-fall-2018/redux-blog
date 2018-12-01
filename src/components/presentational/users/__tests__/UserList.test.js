import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../PostList.jsx';
import mockPosts from '../../../../testing/fixtures/posts.json';

jest.mock('../../../../routes');

describe('<PostList />', () => {
  test('renders', () => {
    const posts = mockPosts;
    const fetchPosts = jest.fn();
    const postUpdateQuery = jest.fn();

    const wrapper = shallow(
      <PostList
        posts={posts}
        fetchPosts={fetchPosts}
        postUpdateQuery={postUpdateQuery}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
