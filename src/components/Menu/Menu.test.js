import React from 'react';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Menu
      setSelectedNews={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });
})
