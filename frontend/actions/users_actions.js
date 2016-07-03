const UsersApi = require('../util/users_api_util'),
      UsersConstants = require('../constants/users_constants'),
      dispatcher = require('../dispatcher/dispatcher');

module.exports = {

  fetchAllUsers(){
    UsersApi.fetchAllUsers(this.receiveAllUsers)
  },

  fetchUser(id) {
    UsersApi.fetchUser(id, this.receiveUser)
  },

  updateUser(user) {
    UsersApi.updateUser(user, this.receiveUser)
  },

  receiveAllUsers(users){
    dispatcher.dispatch({
      actionType: UsersConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveUser(user){
    dispatcher.dispatch({
      actionType: UsersConstants.USER_RECEIVED,
      user: user
    });
  }
}
