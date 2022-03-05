import React from 'react';
import { Link } from 'react-router-dom';
import ourtubelogo from '../../../app/assets/images/ourtube.png'
import ourtubelogopic from '../../../app/assets/images/ourtubelogopic.png'
import signinlogo from '../../../app/assets/images/signinpic.png'
import profilepic from '../../../app/assets/images/profilepicture.png'
import searchglass from '../../../app/assets/images/searchglass.png'
import microphone from '../../../app/assets/images/microphone.png'
import uploadicon from '../../../app/assets/images/uploadicon.png'
import linkedin from '../../../app/assets/images/linkedin.png'
import github from '../../../app/assets/images/github.png'

export default ({ currentUser, logout }) => {

  const display = currentUser.id ? (
    <div>
      <button onClick={logout}className="propicbtn"><img className="profilepicc" src={profilepic}/></button>
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
    <header className="navs">
      <div className="ourLogo">
        <Link to="/"><img className="nav-ourtubepic" src={ourtubelogo}/></Link>
        {/* <Link to="/" className='nav-ourtubetext'>
          <img className="nav-ourtubepic" src={ourtubelogopic}/>OurTube
          </Link> */}
      </div>
      <div className="navsearchbar">
        <input type="text" className="searchbar" placeholder="Search"/>
        <Link to="/" className='searchglass'><img src={searchglass} className="searchglassbtn"/></Link>
        <button className="micbtn"><img className="micimg" src={microphone}/></button>
      </div>
      <div className="display">
        <div>{upload}</div>
        <a href="https://www.linkedin.com/in/alex-b-clark-wrightstate" target="_blank">
          <img className="navlinkedin" src={linkedin}/>
        </a>
        <a href="https://github.com/Alyx-Clark" target="_blank">
          <img className="navgithub" src={github}/>
        </a>
        <h1>{display}</h1>
      </div>
    </header>
  )
}