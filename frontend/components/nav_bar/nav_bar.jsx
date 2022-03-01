import React from 'react';
import { Link } from 'react-router-dom';
import ourtubelogo from '../../../app/assets/images/Ourtube.png'
import signinlogo from '../../../app/assets/images/SignIn.png'
import profilepic from '../../../app/assets/images/profilepic.png'

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <button onClick={logout}><img className="profilepicc" src={profilepic}/></button>
    </div>
  ) : (
    <div>
      {/* <Link to="/login"><img className="signinpic" scr={signinlogo}/></Link> */}
      <Link to="/login"><img className="signinpic" src={signinlogo}/></Link>
    </div>
  );
  return (
    <header className="navs">
      <div className="display">
        <h1>{display}</h1>
      </div>
      <div className="ourLogo">
        <Link to="/"><img className="pic" src={ourtubelogo}/></Link>
      </div>
      <div className="navsearchbar">
        <input className="searchbar" type="text" placeholder="Search"/>
      </div>
    </header>
  )
}