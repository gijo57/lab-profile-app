import React, { Component } from 'react';

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

  handleSubmit = () => {};

  handleInputChange = (event) => {
    const name = event.target.name;
  };

  render() {
    return (
      <div>
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="">Username</label>
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <label htmlFor="">Password</label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <label htmlFor="">Campus</label>
            <input
              name="campus"
              type="text"
              value={this.state.campus}
              onChange={this.handleInputChange}
            />
            <label htmlFor="">Course</label>
            <input
              name="course"
              type="text"
              value={this.state.course}
              onChange={this.handleInputChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpView;
