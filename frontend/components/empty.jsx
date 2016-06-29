const React = require('react');

const SessionActions = require('../actions/session_actions'),
      hashHistory = require('react-router').hashHistory;

const Empty = React.createClass({

  handleClick(){
    SessionActions.logout(this.redirect)
  },

  redirect(){
    hashHistory.push('/login')
  },

  render(){
    return (
      <div>
        empty for testing login/signup
        <button onClick={this.handleClick}>logout</button>
      </div>
    )
  }
})

module.exports = Empty;
