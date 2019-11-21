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
    const wrapper = shallow(<SearchForm
      filterBySearch={mockFilterBySearch}
      />);
    const mockEvent = { target: { value: 'pants' } };
    const expected = 'pants';

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('searchQuery')).toEqual(expected);
  })

// Maybe??? not sure if needed based on today's lesson examples
  // it('should invoke handleChange when clicked')

  it('should call the filterBySearch prop with searchQuery state when clicked', () => {
    
  }
  )

})
