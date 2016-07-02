const React = require('react'),
      BoardNav = require('./board_nav'),
      PinAction = require('../../actions/pin_actions'),
      PinItem = require('../pins/pin_item.jsx'),
      PinStore = require('../../stores/pin_store'),
      BoardAction = require('../../actions/board_actions'),
      BoardsStore = require('../../stores/board_store');

const BoardIndex = React.createClass({
  getInitialState(){
    return ({ boardId: this.props.routeParams.boardId,
              board: {},
              pins: []
              })
  },

  componentDidMount(){
    this.listenerBoard = BoardsStore.addListener(this.getBoard);
    this.listenerPin = PinStore.addListener(this.getPins);
    BoardAction.fetchAllBoards();
    PinAction.fetchAllPins(this.state.boardId);
  },

  componentWillUnmount(){
    this.listenerBoard.remove();
    this.listenerPin.remove();
  },

  getBoard(){
    this.setState({board: BoardsStore.find(this.state.boardId)})
  },

  getPins(){
    this.setState({pins: PinStore.all()});
  },

  render(){
    let pins;
    if (this.state.pins.length > 0) {
      pins = this.state.pins.map((pin)=> {
        return <PinItem key={pin.id} className="pin" pin={pin} bound='parent'></PinItem>})
    }
    return (
      <div className='board-home'>
        {pins}
        <BoardNav boardId={this.state.boardId} board={this.state.board} team={this.state.board.team_members}/>
      </div>

    )
  }
});

module.exports = BoardIndex;
