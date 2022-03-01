import React from 'react';
import { Link } from 'react-router-dom';
// import ourtubelogo from '../../../app/assets/images/Ourtube.png'

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="navBtn" to="/login">SIGN IN</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <div className="ourLogo">
        <h1>{display}</h1>
        {/* <img src={ourtubelogo}/> */}
      </div>
    </header>
  )
}