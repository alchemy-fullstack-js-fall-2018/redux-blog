import Home from './Home';
import { shallow } from 'enzyme';
import React from 'react';
import { fakePosts } from '../../fixtures/fakePosts';

describe('Home component', () => {

  it('matches snapshot', () => {
    const posts = fakePosts;
    const fetchPostsPromise = jest.fn();
    const wrapper = shallow(<Home posts={posts} fetchPostsPromise={fetchPostsPromise} />);
    expect(wrapper).toMatchSnapshot();
  });

});
