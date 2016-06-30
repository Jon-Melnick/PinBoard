const React = require('react'),
      BoardAction = require('../../actions/board_actions'),
      BoardThumb = require('./board_thumbnails'),
      BoardStore = require('../../stores/board_store');

const ProfileBoards = React.createClass({
  getInitialState(){
    return({boards: BoardStore.all()})
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

  render(){
    let board = <li className='board-thumb'>you currently have no boards</li>
    if (this.state.boards.length > 0) {
      board = this.state.boards.map((board) => {
        return <BoardThumb key={board.id} board={board}/>
      })
    }
    return(
      <div className='profile-boards'>
        <h1>These are your boards: </h1>
        <div className='profile-boards-team'><ul>{board}</ul></div>
        <div className='profile-boards-private'><h1>Private Boards</h1></div>
      </div>
    )
  }
})

module.exports = ProfileBoards;
