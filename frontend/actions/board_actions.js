const BoardApi = require('../util/board_api_util'),
      BoardConstants = require('../constants/board_constants'),
      dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  fetchAllBoards = function(){
    BoardApi.fetchAllBoards(this.receiveAllBoards)
  },

  fetchBoard = function (id) {
    BoardApi.fetchBoard(id, this.receiveBoard)
  }
  
}
