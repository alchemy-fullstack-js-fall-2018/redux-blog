import React from 'react';
import { shallow } from 'enzyme';
import CommentCard from '../CommentCard.jsx';
import mockComments from '../../../../testing/fixtures/comments.json';

describe('<CommentCard />', () => {
  test('renders', () => {
    const comment = mockComments.filter(comment => comment.postId === 1)[0];
    const wrapper = shallow(
      <CommentCard
        comment={comment}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
