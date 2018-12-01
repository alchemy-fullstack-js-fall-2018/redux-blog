import React from 'react';
import { shallow } from 'enzyme';
import PostCard from '../PostCard.jsx';
import posts from '../../../../testing/fixtures/posts.json';

describe('<PostCard />', () => {
  test('renders', () => {
    const post = posts[0];
    const wrapper = shallow(
      <PostCard
        key={post.id}
        post={post}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
