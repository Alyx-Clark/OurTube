import React from 'react';
import { Link } from 'react-router-dom';
import signinlogo from '../../../app/assets/images/signinpic.png'
import searchglass from '../../../app/assets/images/searchglass.png'
import microphone from '../../../app/assets/images/microphone.png'
import uploadicon from '../../../app/assets/images/uploadicon.png'
import linkedin from '../../../app/assets/images/linkedin.png'
import github from '../../../app/assets/images/github.png'
import hamburger from '../../../app/assets/images/sb-hamburger.png'
import testing from '../../../app/assets/images/testing.jpg'
import Modal from '../modals/modal';
import { useState } from "react";

export default ({ currentUser, logout, user}) => {
  const [openModal, setOpenModal] = useState(false)
  let url = window.location.href.split('/')
  let ele = url[4]


  const display = currentUser.id ? (
    <div>
      <button onClick={logout} className="propicbtn"><img className="profilepicc" src={user.profilePic} /></button>
    </div>
  ) : (
    <div>
      <Link to="/login"><img className="signinpic" src={signinlogo}/></Link>
    </div>
  );

  const upload = currentUser.id ? (
      <Link to= "/" className="uploadbtn"><img className="navupload" src={uploadicon}/></Link>
  ) : ("");

  return (
    <header className={`${ele !== "watch" ? "navs" : "navsshow"}`}>
      <div className="ourLogo">  
        <button className="sb-burger"><img src={hamburger} className='sb-burgerimg'/></button>
        <Link to="/"><img className="nav-ourtubepic" src={testing}/></Link>
      </div>
      <div className="navsearchbar">
        <input type="text" className="searchbar" placeholder="Search"/>
        <Link to="/" className='searchglass'><img src={searchglass} className="searchglassbtn"/></Link>
        <button className="micbtn" onClick={() => {setOpenModal(true)}}><img className="micimg" src={microphone}/></button>
      </div>
      <div className="display">
        <div>{upload}</div>
        <a href="https://www.linkedin.com/in/alex-b-clark/" target="_blank">
          <img className="navlinkedin" src={linkedin}/>
        </a>
        <a href="https://github.com/Alyx-Clark" target="_blank">
          <img className="navgithub" src={github}/>
        </a>
        <h1>{display}</h1>
      </div>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </header>
  )
}