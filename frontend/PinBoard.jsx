const React = require('react'),
      ReactDOM = require('react-dom'),
      ReactRouter = require('react-router'),
      Router = ReactRouter.Router,
      Route = ReactRouter.Route,
      IndexRoute = ReactRouter.IndexRoute,
      hashHistory = require('react-router').hashHistory;

const Login = require('./components/login_form'),
      Signup = require('./components/signup_form'),
      SessionStore = require('./stores/session_store'),
      SessionsActions = require('./actions/session_actions'),
      Profile = require('./components/dashboard/profile'),
      NavBar = require('./components/navbar/navbar'),
      Empty = require('./components/empty');
window.SessionApi = require('./util/session_api_util');
window.SessionsStore = require('./stores/session_store');


const App = React.createClass({
  render(){
    return (
      <div className="app">
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
});

const routes = (
  <Router history={ hashHistory }>
    <Route path="login" component={ Login } />
    <Route path="/signup" component={ Signup } />
    <Route path="/" component={ App }>
      <IndexRoute component={ Profile } />
      <Route path="/profile" component={ Profile } />
      <Route path="/empty" component={ Empty } />
    </Route>
  </Router>
)


function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionsActions.receiveCurrentUser(window.currentUser);
  }

  ReactDOM.render(routes, document.getElementById('content'))
});
