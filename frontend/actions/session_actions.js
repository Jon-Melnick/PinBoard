const SessionApi = require('../util/session_api_util'),
      SessionConstants = require('../constants/session_constants'),
      dispatcher = require('../dispatcher/dispatcher');

module.exports = {
  signup(formData){
    SessionApi.signup(formData, this.receiveCurrentUser)
  },

  login(formData){
    SessionApi.login(formData, this.receiveCurrentUser)
  },

  logout(cb){
    SessionApi.signout(this.receiveCurrentUser, cb)
  },

  receiveCurrentUser(user){
    dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: user
    });
  }
}
