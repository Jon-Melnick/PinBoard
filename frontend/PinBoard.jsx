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
      Empty = require('./components/empty'),
      BoardIndex = require('./components/board/board');

window.SessionApi = require('./util/session_api_util');
window.BoardActions = require('./actions/board_actions');
window.UsersActions = require('./actions/users_actions');
window.UsersStore = require('./stores/users_store');
window.SessionsStore = require('./stores/session_store');
window.BoardsStore = require('./stores/board_store');


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
      <IndexRoute component={ Profile } onEnter={ _ensureLoggedIn }/>
      <Route path="/profile" component={ Profile } onEnter={ _ensureLoggedIn }/>
      <Route path="/boards/:boardId" component={ BoardIndex } />
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
