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
        <div className="another">
          <div class="headers">
            <h2>goodle</h2>
            <h2>Create your goodle Account</h2>
            <h3>to continue to OurTube</h3>
          </div>
          <form class="form" onSubmit={this.handleSubmit}>
            <div class="input">
              <label class="label">First name
                <input type="text" value={this.state.first_name} onChange={this.update('first_name')} />
              </label>
            </div>
            <div class="input">
              <label class="label">Last name
                <input type="text" value={this.state.last_name} onChange={this.update('last_name')} />
              </label>
            </div>
            <div class="input">
              <label class="label">Your email address
                <input type="text" value={this.state.email} onChange={this.update('email')} />
              </label>
            </div>
            <p>You'll need to confirm that this email belongs to you.</p>
            <p>Create a new Gmail address instead</p>
            <div class="input">
              <label class="label">Password
                <input type="password" value={this.state.password} onChange={this.update('password')} />
              </label>
            </div>
            <div class="input">
              <label class="label">Username
                <input type="text" value={this.state.user_name} onChange={this.update('user_name')} />
              </label>
            </div>
            <span>Use 8 or more characters with a mix of letters, numbers &amp; symbols</span>
            <button type="submit" class="submitBtn">Next</button>
            <Link className="btn" to="/login">Sign in instead</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;