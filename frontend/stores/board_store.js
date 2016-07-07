const Store = require('flux/utils').Store,
      TeamConstants = require('../constants/team_constants'),
      BoardConstants = require('../constants/board_constants'),
      dispatcher = require('../dispatcher/dispatcher');


const BoardsStore = new Store(dispatcher);

let _boards = {};

BoardsStore.all = function (){
  let boards = [];
  Object.keys(_boards).forEach(key => {
    if (_boards[key]) {
      boards.push(_boards[key])
    }
  })
  return boards;
};

function resetBoards (boards){
  _boards = {};
  boards.forEach(board =>{
    _boards[board.id] = board;
  });
};

 function setBoard (board) {
  _boards[board.id] = board;
};

function removeBoard (team) {
 _boards[team.board_id] = null;
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
      setBoard(payload.board)
      break;
    case TeamConstants.TEAM_DESTROYED:
      removeBoard(payload.team);
      break;
  };
  BoardsStore.__emitChange();
}


module.exports = BoardsStore;
