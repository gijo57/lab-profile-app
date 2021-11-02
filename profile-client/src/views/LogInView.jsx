import React, { Component } from 'react';

class LogInView extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor=""></label>
            <input
              type="text"
              value={this.state.value}
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LogInView;
