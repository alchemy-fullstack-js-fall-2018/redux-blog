import React from 'react';
import { shallow, mount } from 'enzyme';
import UserDetail from '../UserDetail.jsx';
import mockUsers from '../../../../testing/fixtures/users.json';
import mockPosts from '../../../../testing/fixtures/posts.json';

describe('<UserDetail />', () => {
  test('renders', () => {
    const user = mockUsers[0];
    const posts = mockPosts.filter(post => post.userId === 1);
    const wrapper = shallow(
      <UserDetail
        user={user}
        posts={posts}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
