const React = require('react'),
      ProfileDetail = require('./profile_detail'),
      ProfileBoards = require('./profile_boards'),
      ProfileTabs = require('./profile_tabs'),
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
    let boardStyle = {}
    if (this.state.user.id) {
      boardStyle.backgroundImage = 'url(' + this.state.user.preference.home_board + ')'
    }
    if (this.state.user.id === this.state.currentUser.id) {
      Boards = <ProfileBoards user={this.state.user}/>
    }
    return (
      this.state.user.id ? <div className='profile profile-bg' style={boardStyle}>
          <ProfileDetail user={this.state.user} />
          {Boards}
      </div> : <div></div>
    )
  }
})

module.exports = Profile;
