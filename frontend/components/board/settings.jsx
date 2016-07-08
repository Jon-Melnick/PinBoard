const React = require('react'),
      Styling = require('../styling'),
      BoardActions = require('../../actions/board_actions');

const Settings = React.createClass({
  getInitialState(){
    return({title: this.props.board.title,
            description: this.props.board.description,
            board_style: this.props.board.board_style,
            ownerName: '',
            ownerId: this.props.board.creator_id,
            invitees: '',
            inviting: '',
            team: [],
            teamExtend: []})
  },

  componentDidMount(){
    let team = [];
    let invitees = [];
    let ownerName ='';
    {Object.keys(this.props.team).map(key => {
      let member = this.props.team[key];
      team.push(member.id);
      invitees.push(member.name);
      if (this.props.board.creator_id === member.id) {
        ownerName = member.name;
      };
    })};
    this.setState({invitees: invitees.join(', '), team: team, ownerName: ownerName})
  },

  updateState(e){
    var state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  },

  handleInvite(e){
    e.preventDefault();
    let selected = document.getElementById('inviting');
    let id = selected.options[selected.selectedIndex].value;
    if (id === '') {
      return;
    }
    this.state.teamExtend.push(id);
    name = selected.options[selected.selectedIndex].text;
    this.setState({invitees: this.state.invitees += `, ${name}`,
                   inviting: ''})
    selected.options[selected.selectedIndex].setAttribute('disabled', 'disabled')
    selected.options[0].selected = true;
  },

  boardSelect(e){
    this.setState({board_style: e.currentTarget.value})
  },

  handleSubmit(e){
    e.preventDefault();
    const formData = {
      id: this.props.board.id,
			title: this.state.title,
			description: this.state.description,
      board_style: this.state.board_style
		};
    if (this.state.teamExtend.length > 0) {
      const team = {
        team: this.state.teamExtend
      }
      BoardActions.updateBoard(formData, team);
    } else {
      BoardActions.updateBoard(formData);
    }
    this.props.onModalClose();
  },

  render(){
    return (
      <div>
        <form className='new-form'>
          <label>Title: </label>
          <input type="text" value={this.state.title} onChange={this.updateState} id='title'/>
          <br></br><br></br>
          <label>Description: </label>
          <textarea value={this.state.description} onChange={this.updateState} rows="3" cols="40" id='description'/>
          <br></br><br></br><br></br><br></br>
          <label>Current team: </label>
          <div className='member-invite-container group'>
            {Object.keys(this.props.team).map(key => {
              let member = this.props.team[key]
              return <div key={member.id} className='member-invite'>{member.name}</div>
            })}
          </div>
          <br></br><br></br><br></br>
          <label>Invite Someone!</label>
          <select id='inviting'>
            <option value=''> --- </option>

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
          <button onClick={this.handleSubmit}>Edit Board</button>
        </form>




        memebers:
        {Object.keys(this.props.team).map(key => {
          let member = this.props.team[key]
          return <div key={member.id}>{member.name}</div>
        })}

        users:
        {Object.keys(this.props.users).map(key => {
          let user = this.props.users[key]
          return <div key={user.id}>{user.full_name}</div>
        })}

        board style:
        <div>{this.props.board.board_style}</div>

        board title:
        <div>{this.props.board.title}</div>

        board description:
        <div>{this.props.board.description}</div>

      </div>
    )
  }
});

module.exports = Settings;
