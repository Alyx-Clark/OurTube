import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div className="session-form">
          <h2>goodle</h2>
          <h2>Sign in</h2>
          <h3>to continue to OurTube</h3>
          <form onSubmit={this.handleSubmit}>
              <label>Username
                <input type="text" value={this.state.user_name} onChange={this.update('user_name')} />
              </label>
              <label>Password
                <input type="password" value={this.state.password} onChange={this.update('password')} />
              </label>
              <p>Forgot password?</p>
              <span>Not your computer? Use Demo mode to sign in privately.</span>
              <button>Demo sign in</button>
              <button type="submit">Next</button>
              <button>Create account</button>
          </form>
      </div>
    );
  }
}

export default Login;