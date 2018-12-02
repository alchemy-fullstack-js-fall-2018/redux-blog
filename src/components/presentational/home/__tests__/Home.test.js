import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home.jsx';

jest.mock('../../../../routes');

describe('<Home />', () => {
  test('renders', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
