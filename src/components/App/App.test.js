import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update selectedNews state and filteredSelection state when setSelectedNews is called',
    () => {
    const wrapper = shallow(<App />)
    const mockNewsType = 'testingNewsType'
    const mockFilteredSelection = [ { id: 3, headline: 'testheadline',
      img: 'testimg', description: 'testdesc', url: 'http://google.com' } ]

    wrapper.setState( {filteredSelection: mockFilteredSelection} );

    expect(wrapper.state('selectedNews')).toEqual('local');
    expect(wrapper.state('filteredSelection')).toEqual(mockFilteredSelection);

    wrapper.instance().setSelectedNews(mockNewsType);
    expect(wrapper.state('selectedNews')).toEqual(mockNewsType);
    expect(wrapper.state('filteredSelection')).toEqual([]);
  })

  it('should update filteredSelection state when filterBySearch is called',
    () => {
    const wrapper = shallow(<App />);
    const mockEvent = { preventDefault: jest.fn() };
    const mockSearchQuery = 'test';
    const mockSelectedNews = 'pants'
    const mockStartState = [
      { id: 1, headline: 'headline', img: 'testimg1',
        description: 'desc1', url: 'http://google.com' },
      { id: 2, headline: 'test headline2', img: 'testimg2',
        description: 'desc2', url: 'http://google.com' },
      { id: 3, headline: 'headline3', img: 'testimg3',
        description: 'desc3', url: 'http://google.com' } ]
    const mockSearchedArticles = [
      { id: 2, headline: 'test headline2', img: 'testimg2',
        description: 'desc2', url: 'http://google.com' } ]
    const expectedState = [
      { id: 2, headline: 'test headline2', img: 'testimg2',
        description: 'desc2', url: 'http://google.com' }]

    wrapper.setState({selectedNews: mockSelectedNews, pants: mockStartState});
    wrapper.instance().filterBySearch(mockEvent, mockSearchQuery);
    expect(wrapper.state('filteredSelection')).toEqual(expectedState);
  })

})
