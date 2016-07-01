const TeamApi = require('../util/team_api_util'),
      TeamConstants = require('../constants/team_constants'),
      dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  createTeam(team){
    TeamApi.createTeam(team, this.receiveTeam)
  },

  receiveTeam(team){
    dispatcher.dispatch({
      actionType: TeamConstants.TEAM_RECEIVED,
      team: team
    });
  }
}
