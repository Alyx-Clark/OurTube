import React from 'react';
import { Link } from 'react-router-dom';
import errorsimg from '../../../app/assets/images/errors.png'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      user_name: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(()=>this.props.history.push('/'));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errorslist" key={`error-${i}`}>
            <img src={errorsimg}/><span>{error}</span>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signupForm">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="headers">
            <div className="signupLetters">
              <h2>
                <span className="G">G</span>
                <span className="o">o</span>
                <span className="o2">o</span>
                <span className="d">d</span>
                <span className="l">l</span>
                <span className="e">e</span>
              </h2>
            </div>
            <h2>Create your Goodle Account</h2>
            <h3>to continue to OurTube</h3>
          </div>
          <div className="firstlast">
            <div className="inputContainer2">
              <input type="text" className="input" value={this.state.first_name} onChange={this.update('first_name')} placeholder='First name' />
              <label className="label">First name</label>
            </div>
            <div className="inputContainer2">
              <div className="lastName">
                <input type="text" className="input" value={this.state.last_name} onChange={this.update('last_name')} placeholder="Last name" />
                <label className="label">Last name</label>
              </div>
            </div>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" value={this.state.email} onChange={this.update('email')} placeholder="Your email address" />
            <label className="label">Your email address</label>
          </div>
          <div className="confirmEmail">
            <p>You'll need to confirm that this email belongs to you.</p>
          </div>
          <div className="demoInstead">
            <Link to="login" className="demolink">Try a new demo account instead on the Sign in page</Link>
          </div>
          <div className="inputContainer">
            <input type="password" className="input" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
            <label className="label">Password</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" value={this.state.user_name} onChange={this.update('user_name')} placeholder="Username" />
            <label className="label">Username</label>
          </div>
          {this.renderErrors()}
          <div className="passwordtext">
            <span>Use 8 or more characters with a mix of letters, numbers &amp; symbols</span>
          </div>
          <div className="bottomButtons">
            <Link className="btn" to="/login">Sign in instead</Link>
            <button type="submit" className="submitBtn">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;