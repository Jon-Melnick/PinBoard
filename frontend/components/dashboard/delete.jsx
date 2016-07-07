const React = require('react');

const DeleteBoard = React.createClass({
  render(){
    return(
      <div className="new-form">
        <label>Are you sure you want to delete your interaction with this board? If this is a private board there is no chance of getting it back, but if its a team board, one of those members can always invite you back. That is only if they like you.</label>
          <br></br>
        <button style={{'width': '75px'}} onClick={this.props.removeBoard}>Delete</button>
          <br></br>
            <br></br>
          <br></br>
        <label>... Or you can just hide me and find me later. This allows you to only show the boards you are currently interested in. To find me again just look really hard.</label>
          <br></br>
        <button style={{'width': '75px'}}>Hide</button>
          <br></br>
            <br></br>
          <br></br>
        <label>Or you can just cancel and we can just pretend you never came here, this time...</label>
          <br></br>
        <button style={{'width': '75px'}} onClick={this.props.onModalClose}>Cancel</button>
          <br></br>
            <br></br>
          <br></br>
      </div>
    )
  }

});

module.exports = DeleteBoard;
