const Store = require('flux/utils').Store,
      SessionConstants = require('../constants/session_constants'),
      dispatcher = require('../dispatcher/dispatcher');


const SessionsStore = new Store(dispatcher);

let _currentUser = {};
let _errors = [];

const _login = function(currentUser){
  _currentUser = currentUser;
  SessionsStore.__emitChange();
};

SessionsStore.errors = function() {
  let errors = _errors;
  _errors = [];
  return errors;
};


const _updateErrors = function(errors) {
  _errors = errors;
  SessionsStore.__emitChange();
};

const _logout = function(){
  _currentUser = {};
  SessionsStore.__emitChange();
};

SessionsStore.isUserLoggedIn = function(){
    return _currentUser === undefined ? false : !!_currentUser.id;
};

SessionsStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionsStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      break;
    case SessionConstants.ERRORS:
      _updateErrors(payload.errors);
      break;
    case SessionConstants.LOGOUT:
      _logout();
      break;
  };
}


module.exports = SessionsStore;
