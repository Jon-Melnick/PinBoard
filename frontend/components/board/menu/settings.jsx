const React = require('react');


const Settings = React.createClass({
  render(){
    return(
      <ul className='board-nav-menu' style={{'background-color': this.props.color}}>
        <li><h1>Settings</h1></li>

      </ul>
    )
  }
})

module.exports = Settings;
