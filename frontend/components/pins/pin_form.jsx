const React = require('react'),
      PinActions = require('../../actions/pin_actions');

const PinForm = React.createClass({
  getInitialState(){
    return({title: "", body: ""})
  },

  updateState(e){
    var state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  },

  handleSubmit(){
    const formData = {
			title: this.state.title,
			body: this.state.body,
      board_id: this.props.boardId
		};
    PinActions.createPin(formData);
    this.props.onModalClose();
  },

  render(){
    return(
      <form className='new-form'>
        <label>Title: </label>
        <input type="text" value={this.state.title} onChange={this.updateState} id='title'/>
          <br></br><br></br>
        <label>Body: </label>
        <input type="text" value={this.state.body} onChange={this.updateState} id='body'/>
          <br></br><br></br>
        <button onClick={this.handleSubmit}>Create Pin</button>
      </form>
    )
  }
});

module.exports = PinForm;
