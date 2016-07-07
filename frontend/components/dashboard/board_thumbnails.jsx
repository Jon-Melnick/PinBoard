const React = require('react'),
      TeamAction = require('../../actions/team_actions'),
      Modal = require('react-modal'),
      DeleteBoard = require('./delete'),
      BoardDeleteModal = require('./delete_modal'),
      hashHistory = require('react-router').hashHistory;

      import Delete from 'react-icons/lib/ti/delete-outline'




const BoardThumb = React.createClass({
  getInitialState(){
    return({detailPane: false, modalOpen: false});
  },

  goToBoard(){
    hashHistory.push(`/boards/${this.props.board.id}`);
  },

  detailsPaneOpen(){
    this.setState({detailPane: true});
  },

  detailsPaneClose(){
    this.setState({detailPane: false});
  },

  executePrompt(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({modalOpen: true})
  },

  removeBoard(e){
    e.preventDefault();
    e.stopPropagation();
    let team_id = '';
    this.props.board.team.forEach(team => {
      if (team.team_member_id === this.props.user.id) {
        team_id = team.id
      }
    });
    TeamAction.deleteTeam(team_id)
  },

  onModalClose(){
    this.setState({modalOpen: false})
  },

  render(){
    let details = '';
    let remove = <div></div>;
    if (this.state.detailPane) {
      let members = ''
      this.props.board.team_members.map(member => {
        if (members === '') {
          members += member.name
        } else {
          members += `, ${member.name}`
        }
      });
      let color = this.props.user.preference.user_color
      details = <div className='thumb-detail' style={{'backgroundColor': color}}>
                  <p><span>Title:</span> {this.props.board.title}</p>
                  <p><span>Description:</span> {this.props.board.description}</p>
                  <p><span>Members:</span> {members}</p>
                </div>
      remove = <div className='thumb-delete' onClick={this.executePrompt}><Delete size={20} color={color}/></div>
    }
    return (
      <div onClick={this.goToBoard} onMouseOver={this.detailsPaneOpen} onMouseLeave={this.detailsPaneClose} className='board-thumb'>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={BoardDeleteModal}
          >
          <DeleteBoard onModalClose={this.onModalClose} removeBoard={this.removeBoard}/>
        </Modal>
      {details}
      <li>{this.props.board.title}</li>
      {remove}
    </div>
    )
  }
});

module.exports = BoardThumb;
