const Store = require('flux/utils').Store,
      BoardConstants = require('../constants/board_constants'),
      dispatcher = require('../dispatcher/dispatcher');


const BoardsStore = new Store(dispatcher);

let _boards = {};

BoardsStore.all = function (){
  let boards = [];
  Object.keys(_boards).forEach(key => {
    boards.push(_boards[key])
  })
  return boards;
};

function resetBoards (boards){
  _boards = {};
  boards.forEach(board =>{
    _boards[board.id] = board;
  });
};

BoardsStore.find = function (id){
  return _boards[id]
}

BoardsStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case BoardConstants.BOARDS_RECEIVED:
      resetBoards(payload.boards);
      break;
    case BoardConstants.BOARD_RECEIVED:
      updateBoard(payload.board)
      break;
  };
  BoardsStore.__emitChange();
}


module.exports = BoardsStore;
