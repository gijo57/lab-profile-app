import React, { Component } from 'react';
import { signup } from '../services/auth';

class SignUpView extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      course: '',
      campus: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    signup(this.state)
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
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Sign Up</h1>
            <label htmlFor="input-username">Username</label>
            <input
              id="input-username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <label htmlFor="input-password">Password</label>
            <input
              id="input-password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <label htmlFor="input-campus">Campus</label>
            <input
              id="input-campus"
              name="campus"
              type="text"
              value={this.state.campus}
              onChange={this.handleInputChange}
            />
            <label htmlFor="input-course">Course</label>
            <input
              id="input-course"
              name="course"
              type="text"
              value={this.state.course}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <h2>Hello!!</h2>
            <h3>Welcome to IronProfile</h3>
            <p>
              If you signup, you agree with all our terms and conditions where
              we can do whatever we want with the data!
            </p>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpView;
