const React = require('react'),
      Profile = require('../dashboard/profile'),
      hashHistory = require('react-router').hashHistory,
      BoardTitle = require('../board/board_title'),
      NavProfile = require('./nav_profile'),
      SessionActions = require('../../actions/session_actions'),
      UserAction = require('../../actions/users_actions'),
      UserStore = require('../../stores/users_store'),
      SessionStore = require('../../stores/session_store');

const NavBar = React.createClass({
  getInitialState(){
    return({user: null})
  },

  componentDidMount(){
    this.listener = UserStore.addListener(this._onChange);
    UserAction.fetchAllUsers();
  },

  componentWillUnmount(){
    this.listener.remove()
  },

  _onChange(){
    this.setState({user: UserStore.find(SessionStore.currentUser().id)})
  },

  render(){
    let style = {};
    if (this.state.user) {
      style = {color: `${this.state.user.preference.user_color}`,
               background: `${this.state.user.preference.nav_color}`}
    }
    return (
      <div className='navbar-container' style={style}>
        <div className="navbar group" style={style}>
          <h1>My PinBoard</h1>
          <NavProfile style={style}/>
        </div>
      </div>
    )
  }
})

module.exports = NavBar;
