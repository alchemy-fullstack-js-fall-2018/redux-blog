import React from 'react';
import { shallow } from 'enzyme';
import PostCard from '../PostCard.jsx';
import mockPosts from '../../../../testing/fixtures/posts.json';

describe('<PostCard />', () => {
  test('renders', () => {
    const post = mockPosts[0];
    const wrapper = shallow(
      <PostCard
        post={post}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
