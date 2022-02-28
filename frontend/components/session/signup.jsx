import React from 'react';
import { Link } from 'react-router-dom';

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
    this.logindemo = this.logindemo.bind(this);
  }

  logindemo(){
    this.props.processForm({ email: "alex@ourtube", first_name: "Alex", last_name: "Clark", user_name: "demo", password: "password"})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(()=>this.props.history.push('/'));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signupForm">
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="headers">
            <h2>Goodle</h2>
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
            <a onClick={this.logindemo}>Try a new demo account instead</a>
          </div>
          <div className="inputContainer">
            <input type="password" className="input" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
            <label className="label">Password</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="input" value={this.state.user_name} onChange={this.update('user_name')} placeholder="Username" />
            <label className="label">Username</label>
          </div>
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