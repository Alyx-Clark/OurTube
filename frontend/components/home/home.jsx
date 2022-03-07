import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import VideoIndexContainer from '../videos/video_index_container';
import Categories from '../categories/categories';
import SideBar from '../side_bar/side_bar';

export default () => {
  return( 
  <div className="home">
    <SideBar />
    <NavBarContainer />
    <Categories />
    <VideoIndexContainer /> 
  </div>
)}