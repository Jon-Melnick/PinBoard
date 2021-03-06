const React = require('react'),
      hashHistory = require('react-router').hashHistory,
      BoardAction = require('../../../actions/board_actions');



const TeamMenu = React.createClass({
  getInitialState(){
    return({inviting: false})
  },

  addMember(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({inviting: true})
  },

  memberOptions(){
    let options = [];
    let memberIds = [];
    this.props.team.map(member => memberIds.push(member.id));
    options = this.props.users.map((user) => {
      if (memberIds.indexOf(user.id) < 0) {
        return <option key={user.id} value={user.id}>{user.full_name}</option>
      } else {
        return <option key={user.id} value={user.id} disabled>{user.full_name}</option>
      }
    })
    return options;
  },

  stopProp(e){
    e.stopPropagation();
  },

  handleInvite(e){
    e.preventDefault();
    let selected = document.getElementById('inviting')
    let id = selected.options[selected.selectedIndex].value;
    const formData = {
      id: this.props.board.id,
			title: this.props.board.title,
			description: this.props.board.description
		};
    const team = {
      team: [id]
    }
    BoardAction.updateBoard(formData, team)
    e.stopPropagation();
    this.setState({inviting: false});
  },

  closeM(){
    this.props.closeM();
  },

  sortBy(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.sortBy(['user_id', parseInt(e.target.id)])
  },

  goToProfile(e){
    let id = e.target.id
    hashHistory.push('/profile/' + id)
  },

  render(){
    let invite = <li onClick={this.addMember}>Add Member</li>
    if (this.state.inviting) {
      invite =   <li>
                    <select id='inviting' onClick={this.stopProp}>
                    <option value=''> --- </option>
                    {this.memberOptions()}
                    </select>
                    <button onClick={this.handleInvite}>Invite!</button>
                  </li>
    }
    return(

        <ul className='board-nav-menu' style={{'backgroundColor': this.props.color}}>
          <h1>Team Members</h1>
          {this.props.team.map((member => {
            return <li key={member.id} id={member.id} onClick={this.goToProfile}>{member.name}</li>
          }))}

          {invite}
        </ul>

    )
  }
})

module.exports = TeamMenu;
