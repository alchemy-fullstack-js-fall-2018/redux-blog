import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../UserForm.jsx';

describe.skip('<UserForm />', () => {
  test('renders', () => {
    const registerUserFn = jest.fn();
    const wrapper = shallow(<UserForm registerUser={registerUserFn} />);
    expect(wrapper).toMatchSnapshot();
  });
});
