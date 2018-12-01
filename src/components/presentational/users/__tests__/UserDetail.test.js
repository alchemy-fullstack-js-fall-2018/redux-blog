import React from 'react';
import { shallow } from 'enzyme';
import UserDetail from '../UserDetail.jsx';
import mockUsers from '../../../../testing/fixtures/users.json';
import mockPosts from '../../../../testing/fixtures/posts.json';

// import PostList from '../../../presentational/posts/PostList.jsx';


describe('<UserDetail />', () => {
  test('renders', () => {
    const user = mockUsers[0];
    const posts = mockPosts.filter(post => post.userId === 1);
    // const PostList = jest.fn();
    const wrapper = shallow(
      <UserDetail
        user={user}
        posts={posts}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
