const React = require('react'),
      BoardAction = require('../../actions/board_actions'),
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
    let board = <p>you currently have no boards</p>
    if (this.state.boards.length > 0) {
      console.log(this.state.board)
      board = this.state.boards.map((board) => {
        return <div key={board.id}>{board.title}</div>;
      })
    }
    return(
      <div className='profile-boards'>
        <h1>These are your boards: </h1>
        <div className='profile-boards-team'><h1>{board}</h1></div>
        <div className='profile-boards-private'><h1>Private Boards</h1></div>
      </div>
    )
  }
})

module.exports = ProfileBoards;
