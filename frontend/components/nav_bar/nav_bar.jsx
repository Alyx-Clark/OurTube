import React from 'react';
import { Link } from 'react-router-dom';
import ourtubelogo from '../../../app/assets/images/Ourtube.png'
import signinlogo from '../../../app/assets/images/signinpic.png'
import profilepic from '../../../app/assets/images/profilepic.png'
import searchglass from '../../../app/assets/images/searchglass.png'
import microphone from '../../../app/assets/images/microphone.png'
import uploadicon from '../../../app/assets/images/uploadicon.png'
import linkedin from '../../../app/assets/images/linkedin.png'
import github from '../../../app/assets/images/github.png'

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <button onClick={logout}><img className="profilepicc" src={profilepic}/></button>
    </div>
  ) : (
    <div>
      <Link to="/login"><img className="signinpic" src={signinlogo}/></Link>
    </div>
  );
  return (
    <header className="navs">
      <div className="ourLogo">
        <Link to="/"><img className="pic" src={ourtubelogo}/></Link>
      </div>
      <div className="navsearchbar">
        <input type="text" className="searchbar" placeholder="Search"/>
        <button><img src={searchglass}/></button>
        <button className="micbtn"><img src={microphone}/></button>
      </div>
      <div className="display">
        <button className="uploadbtn"><img src={uploadicon}/></button>
        <button className="linkedinbtn"><img src={linkedin}/></button>
        <button className="githubbtn"><img src={github}/></button>
        <h1>{display}</h1>
      </div>
    </header>
  )
}