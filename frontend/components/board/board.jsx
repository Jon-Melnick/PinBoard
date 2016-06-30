const React = require('react'),
      BoardNav = require('./board_nav'),
      BoardAction = require('../../actions/board_actions'),
      BoardsStore = require('../../stores/board_store');

const BoardIndex = React.createClass({
  getInitialState(){
    return ({ boardId: this.props.routeParams.boardId,
              board: BoardsStore.all()
              })
  },

  componentDidMount(){
    this.listener = BoardsStore.addListener(this.onChange);
    BoardAction.fetchAllBoards();
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  onChange(){
    this.setState({board: BoardsStore.find(this.state.boardId)})
  },


  render(){
    console.log(this.state.board);
    return (
      <div className='board-home'>
        <BoardNav />
      </div>

    )
  }
});

module.exports = BoardIndex;
