import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomeView from './views/HomeView';
import LogInView from './views/LogInView';
import ProfileView from './views/ProfileView';
import SignUpView from './views/SignUpView';
import { logout } from './services/auth';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {}

  handleAuth = (user) => {
    this.setState({ user });
  };

  handleLogout = () => {
    logout()
      .then((msg) => {
        console.log(msg);
        this.setState({ user: null });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {this.state.user && <Redirect path="/signup" to="/profile" />}
            {this.state.user && <Redirect path="/login" to="/profile" />}
            {!this.state.user && <Redirect path="/profile" to="/" />}
            <Route exact path="/" component={HomeView} />
            <Route
              path="/login"
              render={(props) => (
                <LogInView {...props} onLogin={this.handleAuth} />
              )}
            />
            <Route
              path="/signup"
              render={(props) => (
                <SignUpView {...props} onSignUp={this.handleAuth} />
              )}
            />
            <Route
              path="/profile"
              render={(props) => (
                <ProfileView {...props} onLogout={this.handleLogout} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
