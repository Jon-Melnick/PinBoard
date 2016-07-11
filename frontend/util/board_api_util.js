module.exports = {
  fetchAllBoards(callback){
    $.ajax({
      url: 'api/boards',
      method: "GET",
      success: (boards) => {
         callback(boards)
      }
    })
  },

  fetchBoard(id, cb){
    $.ajax({
      url: `api/boards/${id}`,
      method: "GET",
      success: function(board){
         console.log(board)
      }
    })
  },

  createBoard(board, team, cb){
    $.ajax({
      url: `api/boards`,
      method: "POST",
      data: {board: board, team},
      success: function(newBoard){
         cb(newBoard)
      }
    })
  },

  updateBoard(board, cb, team){
    $.ajax({
      url: `api/boards/${board.id}`,
      method: "PATCH",
      data: {board: board,
             team},
      success: function(updatedBoard){
         cb(updatedBoard)
      }
    })
  },

  deleteBoard(board, cb){
    $.ajax({
      url: `api/boards/${board.id}`,
      method: "DELETE",
      success: function(){
         console.log()
      }
    })
  }

}
