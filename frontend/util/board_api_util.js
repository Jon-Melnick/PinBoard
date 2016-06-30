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

  createBoard(board, cb){
    $.ajax({
      url: `api/boards`,
      method: "POST",
      data: board,
      success: function(newBoard){
         console.log(newBoard)
      }
    })
  },

  updateBoard(board, cb){
    $.ajax({
      url: `api/boards/${board.id}`,
      method: "PATCH",
      data: board,
      success: function(updatedBoard){
         console.log(updatedBoard)
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
