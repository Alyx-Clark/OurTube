import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import VideoIndexContainer from '../videos/video_index_container';
import Categories from '../categories/categories';
import SideBar from '../side_bar/side_bar';
import Modal from '../modals/modal';
import SearchBarContainer from '../nav_bar/search_bar_container';

export default () => {
  return( 
  <div className="home">
    <SideBar />
    <NavBarContainer />
    <SearchBarContainer /> 
  </div>
)}