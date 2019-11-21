import React from 'react';
import NewsContainer from './NewsContainer';
import { shallow } from 'enzyme';

describe('NewsContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsContainer
      newsType={[
        {
          id: 1,
          headline: 'The Who postpones Denver Concert at the Pepsi Center',
          img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
          description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
          url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
        },
        {
          id: 2,
          headline: 'Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner',
          img: 'https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376',
          description: 'The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library. Skeletal wings extend to the side, and it looks downright prehistoric.',
          url: 'https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/'
        },
        {
          id: 3,
          headline: 'Car2Go leaving Denver amid company shake-up',
          img: 'https://www.denverpost.com/wp-content/uploads/2017/06/cd20carsharingdsc_8786.jpg?w=859',
          description: 'Car2Go, the popular car-sharing and rental company, will be leaving Denver at the end of the October, the company announced Friday.',
          url: 'https://www.denverpost.com/2019/09/27/car2go-leaving-denver/'
        }
      ]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
})
