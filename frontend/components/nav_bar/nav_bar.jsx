import React from 'react';
import { Link } from 'react-router-dom';
import signinlogo from '../../../app/assets/images/signinpic.png'
import searchglass from '../../../app/assets/images/searchglass.png'
import microphone from '../../../app/assets/images/microphone.png'
import uploadicon from '../../../app/assets/images/uploadicon.png'
import linkedin from '../../../app/assets/images/linkedinReal.png'
import github from '../../../app/assets/images/githubReal.png'
import hamburger from '../../../app/assets/images/sb-hamburger.png'
import testing from '../../../app/assets/images/testing.jpg'
import Modal from '../modals/modal';
import Modal_sign_out from '../modals/modal_sign_out'
//import { useState } from "react";

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      openModal: false,
      openModal2: false,
      searchQuery: '',
    }

    this.setOpenModal = this.setOpenModal.bind(this);
    this.setOpenModal2 = this.setOpenModal2.bind(this);
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  update(e) {
    // console.log(this.state, 'this state')
      this.setState({ searchQuery: e.currentTarget.value });
  }

  handleToggle() {
    const button = document.querySelector('.sb-container')
    button.classList.toggle('active')
  }

  handleSearch(e) {
      e.preventDefault();
      if(this.state.searchQuery.length > 0) {
          this.props.history.push({
              pathname: `/search/${this.state.searchQuery}`
          })
      }
  }  

  setOpenModal(boo){
    this.setState((prevState) => {
      return{
        openModal: boo
      }
    })
  }

  setOpenModal2(boo){
    this.setState((prevState) => {
      return{
        openModal2: boo
      }
    })
  }


  render(){
    const {user, currentUser, logout} = this.props;
    let url = window.location.href.split('/')
    let ele = url[4]

    const display = this.props.currentUser.id ? (
      <div>
        {/* <button onClick={logout} className="propicbtn"><img className="profilepicc" src={user.profilePic} /></button> */}
        <button className="propicbtn" onClick={() => {this.setOpenModal2(this.state.openModal2 ? false : true)}}><img className="profilepicc" src={user.profilePic} alt="" /></button>
      </div>
    ) : (
      <div>
        <Link to="/login"><img className="signinpic" src={signinlogo}/></Link>
      </div>
    );

    const upload = this.props.currentUser.id ? (
      <Link to= "/" className="uploadbtn" onClick={() => {this.setOpenModal(true)}}><img className="navupload" src={uploadicon}/></Link>
  ) : ("");


    return (
      <header className={`${ele !== "watch" ? "navs" : "navsshow"}`}>
        <div className="ourLogo">  
          <button className="sb-burger" onClick={this.handleToggle}><img src={hamburger} className='sb-burgerimg'/></button>
          <Link to="/"><img className="nav-ourtubepic" src={testing}/></Link>
        </div>
        <div className="navsearchbar">
          <form onSubmit={this.handleSearch} className='navsearchbar'>
            <input type="text" className="searchbar" placeholder="Search" value={this.state.searchQuery} onChange={this.update}/>
            <button className='searchglass' type='submit'><img src={searchglass} className="searchglassbtn"/></button>
            <button className="micbtn" onClick={() => {this.setOpenModal(true)}}><img className="micimg" src={microphone}/></button>
          </form>
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
        {this.state.openModal && <Modal closeModal={this.setOpenModal}/>}
        {this.state.openModal2 && <Modal_sign_out closeModal2={this.setOpenModal2} logout={logout} user={user}/>}
      </header>
    )
  }
}

export default NavBar;


////////////////////////////////////////////////////////////////////////////////////
// export default ({ currentUser, logout, user}) => {
//   const [openModal, setOpenModal] = useState(false)
//   const [openModal2, setOpenModal2] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
  //let url = window.location.href.split('/')
  //let ele = url[4]
  //console.log(user)
  // debugger


  // const display = currentUser.id ? (
  //   <div>
  //     {/* <button onClick={logout} className="propicbtn"><img className="profilepicc" src={user.profilePic} /></button> */}
  //     <button className="propicbtn" onClick={() => {setOpenModal2(openModal2 ? false : true)}}><img className="profilepicc" src={user.profilePic} alt="" /></button>
  //   </div>
  // ) : (
  //   <div>
  //     <Link to="/login"><img className="signinpic" src={signinlogo}/></Link>
  //   </div>
  // );

  // const upload = currentUser.id ? (
  //     <Link to= "/" className="uploadbtn"><img className="navupload" src={uploadicon}/></Link>
  // ) : ("");

  // return (
  //   <header className={`${ele !== "watch" ? "navs" : "navsshow"}`}>
  //     <div className="ourLogo">  
  //       <button className="sb-burger"><img src={hamburger} className='sb-burgerimg'/></button>
  //       <Link to="/"><img className="nav-ourtubepic" src={testing}/></Link>
  //     </div>
  //     <div className="navsearchbar">
  //       <input type="text" className="searchbar" placeholder="Search"/>
  //       <Link to="/" className='searchglass'><img src={searchglass} className="searchglassbtn"/></Link>
  //       <button className="micbtn" onClick={() => {setOpenModal(true)}}><img className="micimg" src={microphone}/></button>
  //     </div>
  //     <div className="display">
  //       <div>{upload}</div>
  //       <a href="https://www.linkedin.com/in/alex-b-clark/" target="_blank">
  //         <img className="navlinkedin" src={linkedin}/>
  //       </a>
  //       <a href="https://github.com/Alyx-Clark" target="_blank">
  //         <img className="navgithub" src={github}/>
  //       </a>
  //       <h1>{display}</h1>
  //     </div>
  //     {openModal && <Modal closeModal={setOpenModal}/>}
  //     {openModal2 && <Modal_sign_out closeModal2={setOpenModal2} logout={logout} user={user}/>}
  //   </header>
  // )
// }