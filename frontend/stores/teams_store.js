const Store = require('flux/utils').Store,
      TeamsConstants = require('../constants/team_constants'),
      dispatcher = require('../dispatcher/dispatcher');


const TeamsStore = new Store(dispatcher);

let _team = {};

TeamsStore.all = function (){
  let teams = [];
  Object.keys(_team).forEach(key => {
    teams.push(_team[key])
  })
  return teams;
};

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
  switch (payload.actionType) {
    case TeamsConstants.TEAM_RECEIVED:
      resetTeams(payload.team);
      TeamsStore.__emitChange;
      break;
  };
}


module.exports = TeamsStore;
