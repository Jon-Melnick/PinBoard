const React = require('react'),
      ProfileDetail = require('./profile_detail'),
      ProfileBoards = require('./profile_boards'),
      UserStore = require('../../stores/users_store'),
      UserActions = require('../../actions/users_actions'),
      SessionStore = require('../../stores/session_store');


const Profile = React.createClass({
  getInitialState(){
    return ({currentUser: SessionStore.currentUser(),
             user: {}})
  },

  componentDidMount(){
    this.listener = UserStore.addListener(this.onChange);
    UserActions.fetchAllUsers();
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  onChange: function() {
    this.setState({user: UserStore.find(this.props.params.userId)});
  },

  componentWillReceiveProps(props){
    this.setState({user: UserStore.find(props.params.userId)})
  },

  render(){
    let Boards;
    if (this.state.user.id === this.state.currentUser.id) {
      Boards = <ProfileBoards user={this.state.user}/>
    }
    return (
      <div className='profile'>
          <ProfileDetail user={this.state.user} />
          {Boards}
      </div>
    )
  }
})

module.exports = Profile;
