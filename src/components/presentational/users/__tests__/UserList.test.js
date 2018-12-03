import React from 'react';
import { shallow } from 'enzyme';
import UserList from '../UserList.jsx';
import mockUsers from '../../../../testing/fixtures/users.json';

jest.mock('../../../../routes');

describe('<UserList />', () => {
  test('renders', () => {
    const users = mockUsers;
    const fetchUsers = jest.fn();

    const wrapper = shallow(
      <UserList
        users={users}
        fetchUsers={fetchUsers}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
