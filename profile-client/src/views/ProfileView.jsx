import React, { Component } from 'react';

class ProfileView extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  handleLogout = () => {
    this.props.onLogout();
  };

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <div>
          <form>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
            <label htmlFor="campus">Campus</label>
            <input
              id="campus"
              type="text"
              name="campus"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
            <label htmlFor="course">Course</label>
            <input
              id="course"
              type="text"
              name="course"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </form>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
        <div>
          <img src="/images/profile-pic.png" alt="profile pic" width="100px" />
          <button>Edit photo</button>
        </div>
      </div>
    );
  }
}

export default ProfileView;
