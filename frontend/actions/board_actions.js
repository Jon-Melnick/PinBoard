const BoardApi = require('../util/board_api_util'),
      BoardConstants = require('../constants/board_constants'),
      dispatcher = require('../dispatcher/dispatcher');

module.exports = {

  fetchAllBoards(){
    BoardApi.fetchAllBoards(this.receiveAllBoards)
  },

  fetchBoard(id) {
    BoardApi.fetchBoard(id, this.receiveBoard)
  },

  receiveAllBoards(boards){
    dispatcher.dispatch({
      actionType: BoardConstants.BOARDS_RECEIVED,
      boards: boards
    });
  },

  receiveBoard(board){
    dispatcher.dispatch({
      actionType: BoardConstants.BOARD_RECEIVED,
      board: board
    });
  }
}
