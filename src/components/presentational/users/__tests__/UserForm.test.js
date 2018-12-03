import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../UserForm.jsx';

describe('<UserForm />', () => {
  test('renders', () => {
    const registerUser = jest.fn();
    const wrapper = shallow(
      <UserForm
        registerUser={registerUser}
        name ={'asdf'}
        username = {'fds'}
        email = {'asfasdf'}
        phone = {'asdasdff'}
        website = {'fsdf'}
        street = {'sdfsdf'}
        suite = {'sdfsdfsdfsdf'}
        city = {'asdfff'}
        zipcode = {'aasssdd'}
        lat = {'fffds'}
        lng = {'asdfa'}
        companyName = {'fasdfasdfafds'}
        motto = {'ffda'}
        keywords = {'asdddf'}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
