const React = require('react'),
      Profile = require('../dashboard/profile'),
      hashHistory = require('react-router').hashHistory,
      BoardTitle = require('../board/board_title'),
      NavProfile = require('./nav_profile');

const NavBar = React.createClass({

  render(){
    return (
      <div className="navbar group">
        <h1>My PinBoard</h1>
        <NavProfile />
      </div>
    )
  }
})

module.exports = NavBar;
