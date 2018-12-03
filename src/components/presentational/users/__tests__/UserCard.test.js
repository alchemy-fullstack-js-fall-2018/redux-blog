import React from 'react';
import { shallow } from 'enzyme';
import UserCard from '../UserCard.jsx';
import mockUsers from '../../../../testing/fixtures/users.json';

describe('<UserCard />', () => {
  test('renders', () => {
    const user = mockUsers[0];
    const wrapper = shallow(
      <UserCard
        user={user}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
