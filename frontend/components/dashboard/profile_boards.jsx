const React = require('react'),
      BoardAction = require('../../actions/board_actions'),
      BoardThumb = require('./board_thumbnails'),
      hashHistory = require('react-router').hashHistory,
      BoardForm = require('./board_form'),
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
    let board = <li className='board-thumb' onClick={this.boardForm}>creat new board</li>
    if (this.state.boards.length > 0) {
      boards = this.state.boards.map((board) => {
        return <BoardThumb key={board.id} board={board}/>
      })
    }
    return(
      <div className='profile-boards'>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          >
          <BoardForm onModalClose={this.onModalClose}/>
        </Modal>
        <h1>These are your boards: </h1>
        <div className='profile-boards-team'><ul>{boards}{board}</ul></div>
        <div className='profile-boards-private'><h1>Private Boards</h1></div>
      </div>
    )
  }
})

module.exports = ProfileBoards;
