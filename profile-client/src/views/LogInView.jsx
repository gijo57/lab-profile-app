import React, { Component } from 'react';
import { login } from '../services/auth';
import { Link } from 'react-router-dom';

class LogInView extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    login(this.state)
      .then((user) => this.props.onLogin(user))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="input-username-login">Username</label>
            <input
              id="input-username-login"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <label htmlFor="input-password-login">Password</label>
            <input
              id="input-password-login"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <p>
              If you don't have an account yet, you can sign up{' '}
              <Link to="/signup">here</Link>
            </p>
          </div>
          <div>
            <h2>Hello!!</h2>
            <h3>Awesome to have you at IronProfile again!</h3>
            <button>Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogInView;
