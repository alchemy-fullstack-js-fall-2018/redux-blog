import React from 'react';
import { shallow } from 'enzyme';
import CommentList from '../CommentList.jsx';
import mockComments from '../../../../testing/fixtures/comments.json';

describe('<CommentList />', () => {
  test('renders', () => {
    const comments = mockComments.filter(comment => comment.postId === 1);
    const wrapper = shallow(
      <CommentList
        comments={comments}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
