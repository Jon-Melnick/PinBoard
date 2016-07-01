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
  }
}
