import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import VideoIndexContainer from '../videos/video_index_container';
import Categories from '../categories/categories';

export default () => {
  return( 
  <div className="home">
    <NavBarContainer />
    <Categories />
    <VideoIndexContainer /> 
  </div>
)}