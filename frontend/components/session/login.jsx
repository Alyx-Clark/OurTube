import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.processForm(user);
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
          <div className="forgotPass">
            <p>Forgot password?</p>
          </div>
          <div className="demoInstead">
            <a onClick={this.logindemo}>Not your computer? Use Demo mode to sign in privately.</a>
          </div>
          <div className="bottomButtons">
            <Link className="btn" to="/signup">Create account</Link>
            <button type="submit" className="submitBtn">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;