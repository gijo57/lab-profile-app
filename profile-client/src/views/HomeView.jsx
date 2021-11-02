import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>IronProfile</h1>
        <button>
          <Link to="/login">Log In</Link>
        </button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    );
  }
}

export default HomeView;
