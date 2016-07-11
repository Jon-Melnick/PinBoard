const React = require('react');


const Settings = React.createClass({

  closeM(){
    this.props.closeM();
  },

  render(){
    return(
      <ul className='board-nav-menu' style={{'backgroundColor': this.props.color}} >
        <h1>Settings</h1>

      </ul>
    )
  }
})

module.exports = Settings;
