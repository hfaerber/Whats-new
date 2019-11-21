import React from 'react';
import NewsArticle from './NewsArticle';
import { shallow } from 'enzyme';

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsArticle
      key = {1}
      articleImg = 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg'
      articleHeadline = 'The Who postpones Denver Concert at the Pepsi Center'
      articleDescription = 'Classic-rock band The Who has postponed'
      articleUrl = 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
    />);
    expect(wrapper).toMatchSnapshot();
  });
})
