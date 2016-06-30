const React = require('react'),
      ProfileDetail = require('./profile_detail'),
      ProfileBoards = require('./profile_boards'),
      SessionStore = require('../../stores/session_store');


const Profile = React.createClass({
  getInitialState(){
    return ({user: SessionStore.currentUser()})
  },

  componentDidMount(){
    this.listener = SessionStore.addListener(this.onChange)
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
          <ProfileDetail user={this.state.user} />
          <ProfileBoards />
      </div>
    )
  }
})

module.exports = Profile;
