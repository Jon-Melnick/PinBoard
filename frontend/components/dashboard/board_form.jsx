const React = require('react'),
      BoardActions = require('../../actions/board_actions');

const BoardForm = React.createClass({
  getInitialState(){
    return({title: "", description: ""})
  },

  updateState(e){
    this.setState({title: e.target.value})
  },

  handleSubmit(){
    const formData = {
			title: this.state.title,
			description: this.state.description
		};
    BoardActions.createBoard(formData);
    this.props.onModalClose();
  },

  render(){
    return(
      <form className='board-form'>
        <label>Title for your new board</label>
        <br></br>
        <input type="text" value={this.state.title} onChange={this.updateState}/>
        <br></br>
        <button onClick={this.handleSubmit}>Create Board</button>
      </form>
    )
  }
});

module.exports = BoardForm;
