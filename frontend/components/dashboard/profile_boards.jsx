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
    return({boards: BoardStore.all(), modalOpen: false})
  },

  componentDidMount(){
    this.listener = BoardStore.addListener(this.onChange);
    BoardAction.fetchAllBoards();
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


  render(){
    let boards;
    let team_boards;
    let board = <li className='board-thumb' onClick={this.boardForm}>create new board</li>
    if (this.state.boards.length > 0) {
      boards = this.state.boards.map((board) => {
        if (board.team_members.length === 1) {
          return <BoardThumb key={board.id} board={board}/>
        }
      })
      team_boards = this.state.boards.map((board) => {
        if (board.team_members.length > 1) {
          return <BoardThumb key={board.id} board={board}/>
        }
      })
    }
    return(
      <div className='profile-boards'>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={BoardFormModal}
          >
          <BoardForm onModalClose={this.onModalClose} user={this.props.user}/>
        </Modal>
        <h1>These are your boards: </h1>
        <div className='profile-boards-team'><ul><h1>Team Boards</h1>{team_boards}{board}</ul></div>
        <div className='profile-boards-private'><h1>Private Boards</h1><ul>{boards}</ul></div>
      </div>
    )
  }
})

module.exports = ProfileBoards;
