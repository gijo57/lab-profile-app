import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import LogInView from './views/LogInView';
import ProfileView from './views/ProfileView';
import SignUpView from './views/SignUpView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/login" component={LogInView} />
            <Route path="/signup" component={SignUpView} />
            <Route path="/profile" component={ProfileView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
