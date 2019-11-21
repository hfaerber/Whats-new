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
})
