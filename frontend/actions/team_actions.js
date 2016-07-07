const TeamApi = require('../util/team_api_util'),
      TeamConstants = require('../constants/team_constants'),
      dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  createTeam(board_id, member_id){
    TeamApi.createTeam(board_id, member_id, this.receiveTeam)
  },

  deleteTeam(id){
    TeamApi.deleteTeam(id, this.deletedTeam)
  },

  receiveTeam(team){
    dispatcher.dispatch({
      actionType: TeamConstants.TEAM_RECEIVED,
      team: team
    });
  },

  deletedTeam(team){
    dispatcher.dispatch({
      actionType: TeamConstants.TEAM_DESTROYED,
      team: team
    });
  }
}
