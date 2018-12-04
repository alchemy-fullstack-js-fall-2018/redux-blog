import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';

describe('Comment snapshot', () => {
  it('matches previous snapshot', () => {
    const comment = {
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body:
        'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    };

    const wrapper = shallow(<Comment comment={comment} />);
    expect(wrapper).toMatchSnapshot();
  });
});
