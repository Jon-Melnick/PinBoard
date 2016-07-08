const React = require('react'),
      UserStore = require('../../stores/users_store'),
      Styling = require('../styling'),
      UserActions = require('../../actions/users_actions'),
      TeamActions = require('../../actions/team_actions'),
      BoardActions = require('../../actions/board_actions');

const BoardForm = React.createClass({
  getInitialState(){
    return({title: "",
            description: "",
            board_style: 'http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467679359/corkboard_x2gpyn.jpg',
            invitees: `${this.invitee(this.props.user)}`,
            inviting: '',
            team: [this.props.user.id]})
  },

  invitee(user){
    return user.first_name + ' ' + user.last_name;
  },

  updateState(e){
    var state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  },

  handleSubmit(e){
    e.preventDefault();
    const formData = {
			title: this.state.title,
			description: this.state.description,
      board_style: this.state.board_style
		};
    const team = {
      team: this.state.team
    }
    BoardActions.createBoard(formData, team);
    this.props.onModalClose();
  },

  handleInvite(e){
    e.preventDefault();
    let selected = document.getElementById('inviting');
    let id = selected.options[selected.selectedIndex].value;
    if (id === '') {
      return;
    }
    this.state.team.push(id);
    name = selected.options[selected.selectedIndex].text;
    this.setState({invitees: this.state.invitees += `, ${name}`,
                   inviting: ''})
    selected.options[selected.selectedIndex].setAttribute('disabled', 'disabled')
    selected.options[0].selected = true;
  },

  boardSelect(e){
    this.setState({board_style: e.currentTarget.value})
  },

  render(){
    let options;
    options = UserStore.all().map((user) => {
      if (user.id !== this.props.user.id) {
        return <option key={user.id} value={user.id}>{user.full_name}</option>
      } else {
        return <option key={user.id} value={user.id} disabled>{user.full_name}</option>
      }
    })
    return(
      <form className='new-form'>
        <label>Title: </label>
        <input type="text" value={this.state.title} onChange={this.updateState} id='title'/>
        <br></br><br></br>
        <label>Description: </label>
        <textarea value={this.state.description} onChange={this.updateState} rows="3" cols="40" id='description'/>
        <br></br><br></br><br></br><br></br>
        <label>Current team: </label>
        <textarea value={this.state.invitees} rows="3" cols="40" disabled/>
        <br></br><br></br><br></br>
        <label>Invite Someone!</label>
        <select id='inviting'>
          <option value=''> --- </option>
          {options}
        </select>

        <button onClick={this.handleInvite}>Invite!</button>
        <br></br><br></br>
        <label>Board Style:</label>

        <div className=''>
          {Object.keys(Styling.home_boards).map(key => {
            let board = Styling.home_boards[key]
            let sampleStyle = {
              backgroundImage: 'url(' + board.board_sample + ')'}
            if (this.state.board_style === board.board_style) {
              sampleStyle.border = `2px solid black`
            }
            return <div key={key} className='option-selector-pin'
              value={board.board_style}
              style={sampleStyle}
              onClick={this.boardSelect}></div>
          })}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={this.handleSubmit}>Create Board</button>
      </form>
    )
  }
});

module.exports = BoardForm;
