module.exports = {

  createTeam(team, cb){
    $.ajax({
      url: `api/teams`,
      method: "POST",
      data: {team: team},
      success: function(newTeam){
         cb(newTeam)
      }
    })
  },

  deleteTeam(id, cb){
    $.ajax({
      url: `api/teams/` + id,
      method: "DELETE",
      data: {id: id},
      success: function(newTeam){
         cb(newTeam)
      }
    })
  },
}
