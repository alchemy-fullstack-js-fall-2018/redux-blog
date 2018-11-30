import Home from './Home';
import { shallow } from 'enzyme';
import React from 'react';

describe('Home component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

});
