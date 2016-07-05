const React = require('react'),
      PinActions = require('../../actions/pin_actions');

const PinEdit = React.createClass({
  getInitialState(){
    return({title: this.props.pin.title, body: this.props.pin.body})
  },

  updateState(e){
    var state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  },

  handleSubmit(e){
    e.preventDefault()
    const formData = {
			title: this.state.title,
			body: this.state.body,
      id: this.props.pin.id
		};
    console.log(this.props.pin.id)
    PinActions.updatePin(formData);
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
        <button onClick={this.handleSubmit}>Edit Pin</button>
      </form>
    )
  }
});

module.exports = PinEdit;
