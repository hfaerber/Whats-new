import React from 'react';
import SearchForm from './SearchForm.js';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<SearchForm
      filterBySearch={jest.fn()}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockFilterBySearch = jest.fn();
    const mockEvent = { target: { value: 'pants' } };
    const wrapper = shallow(<SearchForm
      filterBySearch={mockFilterBySearch}
      />);
    const expected = 'pants';

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('searchQuery')).toEqual(expected);
  })

  it('should invoke handleChange when changes occur', () => {
    const mockEvent = { target: { value: 'pants' }}
    const wrapper = shallow(<SearchForm
      filterBySearch={jest.fn()}
    />);
    wrapper.instance().handleChange = jest.fn();

    wrapper.find('input').simulate('change', mockEvent)
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  })

  it('should call the filterBySearch prop with searchQuery state when clicked',
    () => {
      const mockFilterBySearch = jest.fn();
      const mockEvent = {};
      const wrapper = shallow(<SearchForm
          filterBySearch={mockFilterBySearch}
        />);
      const mockSearchQuery = 'test';

      wrapper.setState({searchQuery: mockSearchQuery});
      wrapper.find('button').simulate('click', mockEvent)
      expect(mockFilterBySearch).toHaveBeenCalledWith(mockEvent, mockSearchQuery)
  })

})
