import React from 'react';
import { shallow } from 'enzyme';
import PostDetail from '../PostDetail.jsx';
import posts from '../../../../testing/fixtures/posts.json';

describe('<PostDetail />', () => {
  test('renders', () => {
    const post = posts[0];
    const wrapper = shallow(
      <PostDetail
        post={post}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
