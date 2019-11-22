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

  it('should call the setSelectedNews prop with the button name when clicked',
    () => {
      const mockSetSelectedNews = jest.fn();
      const mockEvent = { target: { name: 'science'} };
      const wrapper = shallow(<Menu
          setSelectedNews={mockSetSelectedNews}
        />);
      wrapper.find('nav').simulate('click', mockEvent);
      expect(mockSetSelectedNews).toHaveBeenCalledWith('science')
  })
})
