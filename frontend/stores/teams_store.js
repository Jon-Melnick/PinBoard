const Store = require('flux/utils').Store,
      TeamsConstants = require('../constants/team_constants'),
      dispatcher = require('../dispatcher/dispatcher');


const TeamsStore = new Store(dispatcher);

let _team = {};

TeamsStore.all = function (){
  let teams = [];
  Object.keys(_team).forEach(key => {
    if (_team[key]){
      teams.push(_team[key])
    }
  })
  return teams;
};

function deleteTeam(team){
  _team[team.id] = null;
}

function resetTeams(teams){
  _team = {};
  teams.forEach(member =>{
    _team[member.id] = member;
  });
};

TeamsStore.find = function(id) {
  return _team[id]
};

TeamsStore.__onDispatch = function(payload){
  debugger
  switch (payload.actionType) {
    case TeamsConstants.TEAM_RECEIVED:
      resetTeams(payload.team);
      TeamsStore.__emitChange;
      break;
    case TeamConstants.TEAM_DESTROYED:
      deleteTeam(payload.team);
      TeamsStore.__emitChange;
      break;
  };
}


module.exports = TeamsStore;
