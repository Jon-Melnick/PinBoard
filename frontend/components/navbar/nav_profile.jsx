const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      SessionActions = require('../../actions/session_actions'),
      SessionStore = require('../../stores/session_store');


const NavProfile = React.createClass({
  getInitialState(){
    return ({menu: false, user: SessionStore.currentUser()})
  },

  _goToProfile(){
    hashHistory.push(`/profile/${this.state.user.id}`);
    this._toggleMenu();
  },

  _signOut(){
    SessionActions.logout(this.signOut);
    this.props.resetUser();
  },

  _toggleMenu(){
    this.setState({menu: this.state.menu ? false : true})
  },

  signOut(){
    hashHistory.push('/login')
  },

  render (){
    let menu;
    if (this.state.menu) {
      menu = <div className='menu' onMouseLeave={this._toggleMenu}>
                <ul>
                  <li onClick={this._goToProfile} style={this.props.style}>Profile</li>
                  <li onClick={this._signOut} style={this.props.style}>Logout</li>
                </ul>
              </div>;
      }
    return (
      <div>
        <div className='nav-profile' onClick={this._toggleMenu} style={this.props.style}>{SessionStore.currentUser().first_name}{menu}</div>

      </div>
    )
  }
})

module.exports = NavProfile;
