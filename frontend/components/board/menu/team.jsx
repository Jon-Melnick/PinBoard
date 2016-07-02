const React = require('react');


const TeamMenu = React.createClass({

  render(){
    return(

        <ul className='board-nav-menu'>
          <li><h1>Team Members</h1></li>
          {this.props.team.map((member => {
            return <li key={member.id}>{member.name}</li>
          }))}
        </ul>

    )
  }
})

module.exports = TeamMenu;
