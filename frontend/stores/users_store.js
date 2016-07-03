const Store = require('flux/utils').Store,
      UsersConstants = require('../constants/users_constants'),
      dispatcher = require('../dispatcher/dispatcher');


const UsersStore = new Store(dispatcher);

let _users = {};

UsersStore.all = function (){
  let users = [];
  Object.keys(_users).forEach(key => {
    users.push(_users[key])
  })
  return users;
};

function resetUsers(users){
  _users = {};
  users.forEach(user =>{
    _users[user.id] = user;
  });
};

function updateUser(user){
  _users[user.id] = user
};

UsersStore.find = function(id) {
  return _users[id]
};

UsersStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case UsersConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      UsersStore.__emitChange();
      break;
    case UsersConstants.USER_RECEIVED:
      updateUser(payload.user);
      UsersStore.__emitChange();
      break;
  };
}


module.exports = UsersStore;
