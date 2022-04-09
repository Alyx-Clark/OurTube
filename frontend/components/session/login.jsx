import React from 'react';
import {Link} from 'react-router-dom';
import errorsimg from '../../../app/assets/images/errors.png'
import Modal from '../modals/modal';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: '',
      openModal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logindemo = this.logindemo.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.setOpenModal = this.setOpenModal.bind(this);
  }

  setOpenModal(boo){
    this.setState((prevState) => {
      return{
        openModal: boo
      }
    })
  }
  
  logindemo(){
    this.props.processForm({ email: "demo@email.com", password: "password", user_name: "docterdemo", first_name: "tree", last_name: "trunks"})
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errorslist" key={`error-${i}`}>
            <img src={errorsimg}/>{error}
          </li>
        ))}
      </ul>
    );
  }

  // comingSoon(){
  //   let background = document.getElementById("login-page")
  //   let background2 = document.getElementById("login-form")
  //   let pass = document.getElementById("pass-modal")
  //   if(pass.style.visibility === "hidden"){
  //     // background.style.visibility = "hidden";
  //     // background2.style.visibility = "hidden";
  //     background.style.backgroundColor = "grey"
  //     background2.style.backgroundColor = "grey"
  //     pass.style.visibility = "visible"
  //   } else{
  //     // background.style.visibility = "visible";
  //     // background2.style.visibility = "visible";
  //     background.style.backgroundColor = "white"
  //     background2.style.backgroundColor = "white"
  //     pass.style.visibility = "hidden"
  //   }
  // }

  render() {
    return (
      <div className="signupForm" id="login-page">
        <form className="form" onSubmit={this.handleSubmit} id="login-form">
          <div className="headersLogin">
            <div className="letters">
              <h2>
                <span className="G">G</span>
                <span className="o">o</span>
                <span className="o2">o</span>
                <span className="d">d</span>
                <span className="l">l</span>
                <span className="e">e</span>
              </h2>
            </div>
            <h2>Sign in</h2>
            <h3>to continue to OurTube</h3>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" value={this.state.user_name} onChange={this.update('user_name')} placeholder="Username"/>
            <label className="label">Username</label>
          </div>
          <div className="inputContainer">
            <input type="password" className="input" value={this.state.password} onChange={this.update('password')} placeholder="Password"/>
            <label className="label">Password</label>
          </div>
          {this.renderErrors()}
          <div className="forgotPass">
            <button type="button" className="passbutton" onClick={() => this.setOpenModal(true)}>Forgot password?</button>
          </div>
          <div className="demoInstead">
            <a onClick={this.logindemo}>Not your computer? Use Demo mode to sign in privately.</a>
          </div>
          <div className="bottomButtons">
            <Link className="btn" to="/signup">Create account</Link>
            <button type="submit" className="submitBtn">Next</button>
          </div>
        </form>
        {this.state.openModal && <Modal closeModal={this.setOpenModal} />}
      </div>
    );
  }
}

export default Login;