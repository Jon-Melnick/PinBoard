const React = require('react'),
      BoardAction = require('../../actions/board_actions'),
      BoardThumb = require('./board_thumbnails'),
      hashHistory = require('react-router').hashHistory,
      BoardForm = require('./board_form'),
      BoardFormModal = require('./new_board_modal'),
      Modal = require('react-modal'),
      BoardStore = require('../../stores/board_store');

const ProfileBoards = React.createClass({
  getInitialState(){
    return({boards: BoardStore.all(), modalOpen: false, boardDisplay: 'Team Boards', user: this.props.user});
  },

  componentDidMount(){
    this.listener = BoardStore.addListener(this.onChange);
    BoardAction.fetchAllBoards();
  },

  componentWillReceiveProps(props){
    this.setState({user: props.user});
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  onChange(){
    this.setState({boards: BoardStore.all()});
  },

  boardForm(){
    this.setState({modalOpen: true})
  },

  onModalClose(){
    this.setState({modalOpen: false})
  },

  getBoards(display){
    if (this.state.boards.length > 0) {
        if (display === 'Hidden') {
          let board = this.state.boards.map((board) => {
            if (board.hidden) {
              return <BoardThumb key={board.id} board={board} user={this.state.user}/>
            }
          })
          return board;
        } else if (display === 'Private Boards') {
          let board = this.state.boards.map(board =>{
            if (board.team_members.length === 1 && board.hidden === null) {
              return <BoardThumb key={board.id} board={board} user={this.state.user}/>
            }
          })
          return board;
        } else if (display === 'Team Boards'){
          let board = this.state.boards.map((board) => {
            if (board.team_members.length > 1 && board.hidden === null) {
              return <BoardThumb key={board.id} board={board} user={this.state.user}/>
            }
          })
          return board;
        }

    } else {
      let boards = <div style={{'fontSize': '60px'}}> you currently have no boards </div>
      return boards
    }
  },

  switchTab(e){
    this.setState({boardDisplay: e.target.textContent})
  },

  render(){
    let boards = this.getBoards(this.state.boardDisplay);
    let teamTab = this.state.boardDisplay === 'Team Boards' ? {color: `${this.state.user.preference.user_color}`} : {};

    let privateTab = this.state.boardDisplay === 'Private Boards' ? {color: `${this.state.user.preference.user_color}`} : {};

    let hiddenTab = this.state.boardDisplay === 'Hidden' ? {color: `${this.state.user.preference.user_color}`} : {};

    return(
      <div className='profile-boards group'>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={BoardFormModal}
          >
          <BoardForm onModalClose={this.onModalClose} user={this.props.user}/>
        </Modal>
        <div className='tabs-container'>
        <div className='profile-boards-tabs' onClick={this.switchTab} id='teams' style={teamTab}><p>Team Boards</p></div>
        <div className='profile-boards-tabs' onClick={this.switchTab} id='private' style={privateTab}><p>Private Boards</p></div>
        <div className='profile-boards-tabs' onClick={this.boardForm}><p>New Board</p></div>
        <div className='profile-hidden-tab' onClick={this.switchTab} id='hidden' style={hiddenTab}><p>Hidden</p></div>
        </div>

        <div className='profile-boards-holder'><ul>{boards}</ul></div>
      </div>
    )
  }
})

module.exports = ProfileBoards;
