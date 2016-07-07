const React = require('react'),
      BoardNav = require('./board_nav'),
      PinAction = require('../../actions/pin_actions'),
      PinText = require('../pins/pin_item.jsx'),
      PinImg = require('../pins/pin_img.jsx'),
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
              board: false,
              pins: [],
              z: 0,
              modalOpen: false,
              browser: '',
              sort_by: false})
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
    if (!this.state.z) {
      this.setState({z: PinStore.getZ()})
    }
  },

  updateZ(){
    this.setState({z: this.state.z+1})
  },

  noSort(){
    this.setState({sort_by: false})
  },

  sortBy(query){
    this.setState({sort_by: query})
  },

  sortPins(){
    let search = this.state.sort_by
    let pins = [];
    if (search) {
      this.state.pins.map(pin => {
        if (pin[search[0]] === search[1]) {
          pins.push(pin);
        }
      })
    } else {
      pins = this.state.pins
    }
    return pins
  },

  render(){
    let pins;
    if (this.state.pins.length > 0) {
      let sortedPins = this.sortPins()
      pins = sortedPins.map((pin)=> {
        if (pin.img_url) {
          return <PinImg key={pin.id} className="pin" pin={pin} updateZ={this.updateZ} currentZ={this.state.z} openModal={this.openModal}></PinImg>
        } else {
          return <PinText key={pin.id} className="pin" pin={pin} updateZ={this.updateZ} currentZ={this.state.z} openModal={this.openModal}></PinText>
        }
      })
    }
    let team;
    if (this.state.board) {
      team = this.state.board.team_members;
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
                  team={team}
                  sortBy={this.sortBy}/>
      </div>


    )
  }
});

module.exports = BoardIndex;
