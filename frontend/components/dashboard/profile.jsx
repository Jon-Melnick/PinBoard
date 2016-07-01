const React = require('react'),
      ProfileDetail = require('./profile_detail'),
      ProfileBoards = require('./profile_boards'),
      UserStore = require('../../stores/users_store'),
      UserActions = require('../../actions/users_actions'),
      SessionStore = require('../../stores/session_store');


const Profile = React.createClass({
  getInitialState(){
    return ({user: SessionStore.currentUser()})
  },

  componentDidMount(){
    this.listener = SessionStore.addListener(this.onChange);
    this.listener2 = UserStore.addListener(this.onChange);
    UserActions.fetchAllUsers();
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  onChange: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  render(){
    return (
      <div className='profile'>
          <ProfileDetail user={this.state.user}/>
          <ProfileBoards user={this.state.user}/>
      </div>
    )
  }
})

module.exports = Profile;
