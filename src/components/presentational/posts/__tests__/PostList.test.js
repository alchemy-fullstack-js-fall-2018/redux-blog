import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../PostList.jsx';
import posts from '../../../../testing/fixtures/posts.json';

jest.mock('../../../../routes');

describe('<PostList />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <PostList posts={posts} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
