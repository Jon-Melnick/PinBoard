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
    return({boards: BoardStore.all(), modalOpen: false, boardDisplay: 'Team Boards'})
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

  getBoards(){
    if (this.state.boards.length > 0) {
      this.boards = this.state.boards.map((board) => {
        if (board.team_members.length === 1) {
          return <BoardThumb key={board.id} board={board}/>
        }
      })
      this.team_boards = this.state.boards.map((board) => {
        if (board.team_members.length > 1) {
          return <BoardThumb key={board.id} board={board}/>
        }
      })
    }
  },

  switchTab(e){
    let tab = e.target.textContent;
    this.setState({boardDisplay: tab})
  },

  render(){
    let board = <li className='board-thumb' onClick={this.boardForm}>create new board</li>
    this.getBoards();
    return(
      <div className='profile-boards group'>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={BoardFormModal}
          >
          <BoardForm onModalClose={this.onModalClose} user={this.props.user}/>
        </Modal>

        <div className='profile-boards-tabs tab-selected' onClick={this.switchTab} id='teams'><p>Team Boards</p></div>
        <div className='profile-boards-tabs' onClick={this.switchTab} id='private'><p>Private Boards</p></div>

        <div className='profile-boards-holder'><ul>{board}{this.state.boardDisplay === 'Team Boards' ? this.team_boards : this.boards}</ul></div>
      </div>
    )
  }
})

module.exports = ProfileBoards;
