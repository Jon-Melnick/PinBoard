const React = require('react'),
      ReactDOM = require('react-dom'),
      ReactRouter = require('react-router'),
      Router = ReactRouter.Router,
      Route = ReactRouter.Route,
      IndexRoute = ReactRouter.IndexRoute,
      Modal = require('react-modal'),
      hashHistory = require('react-router').hashHistory;

const Login = require('./components/login_form'),
      Signup = require('./components/signup_form'),
      SessionStore = require('./stores/session_store'),
      SessionsActions = require('./actions/session_actions'),
      Profile = require('./components/dashboard/profile'),
      NavBar = require('./components/navbar/navbar'),
      NewBoard = require('./components/dashboard/board_form'),
      BoardIndex = require('./components/board/board');



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
    <Route path="/" component={ App }>
      <Route path="login" component={ Login } />
      <Route path="/signup" component={ Signup } />
      <IndexRoute component={ Profile } onEnter={ _ensureLoggedIn }/>
      <Route path="/profile/:userId" component={ Profile } onEnter={ _ensureLoggedIn }>
      </Route>
      <Route path="/boards/:boardId" component={ BoardIndex } onEnter={ _ensureLoggedIn }/>

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
  Modal.setAppElement(document.body);
  ReactDOM.render(routes, document.getElementById('content'))
});
