const React = require('react'),
      BoardNav = require('./board_nav'),
      PinAction = require('../../actions/pin_actions'),
      PinItem = require('../pins/pin_item.jsx'),
      PinStore = require('../../stores/pin_store'),
      SessionStore = require('../../stores/session_store'),
      BoardAction = require('../../actions/board_actions'),
      BoardsStore = require('../../stores/board_store');
      import Draggable, {DraggableCore} from 'react-draggable';

const Modal = require('react-modal'),
  		PinEdit = require('../pins/edit_form'),
  		BoardFormModal = require('../dashboard/new_board_modal');

const BoardIndex = React.createClass({
  getInitialState(){
    return ({ boardId: this.props.routeParams.boardId,
              board: {},
              pins: [],
              z: 0,
              modalOpen: false,
              browser: ''})
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

  onModalClose(){
    this.setState({modalOpen: false})
  },

  openModal(pin){
    this.editPin = pin
    this.setState({modalOpen: true})
  },

  getBoard(){
    let board = BoardsStore.find(this.state.boardId)
    this.setState({board: board})
  },

  getPins(){
    this.setState({pins: PinStore.all()});
    this.setState({z: PinStore.getZ()})
  },

  updateZ(){
    this.setState({z: this.state.z+1})
  },

  render(){

    let pins;
    if (this.state.pins.length > 0) {
      pins = this.state.pins.map((pin)=> {
        return <PinItem key={pin.id} className="pin" pin={pin} updateZ={this.updateZ} currentZ={this.state.z} openModal={this.openModal}></PinItem>})
    }
    return (
      <div className="board-home">
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={BoardFormModal}
          >
          <PinEdit onModalClose={this.onModalClose} pin={this.editPin} />
        </Modal>
        {pins}
        <BoardNav boardId={this.state.boardId}
                  board={this.state.board}
                  team={this.state.board.team_members}/>
      </div>


    )
  }
});

module.exports = BoardIndex;
