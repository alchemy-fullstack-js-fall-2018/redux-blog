import Users from './Users';
import { shallow } from 'enzyme';
import React from 'react';
import { fakeUsers } from '../../fixtures/fakeUsers';

describe('Users component', () => {

  it('matches snapshot', () => {
    const users = fakeUsers;
    const fetchUsersPromise = jest.fn();
    const wrapper = shallow(<Users users={users} fetchUsersPromise={fetchUsersPromise} />);
    expect(wrapper).toMatchSnapshot();
  });

});
