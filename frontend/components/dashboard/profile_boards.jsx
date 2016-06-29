const React = require('react');

const ProfileBoards = React.createClass({
  render(){
    return(
      <div className='profile-boards'>
        <h1>These are your boards: </h1>
        <div className='profile-boards-team'><h1>Team Boards</h1></div>
        <div className='profile-boards-private'><h1>Private Boards</h1></div>
      </div>

    )
  }
})

module.exports = ProfileBoards;
