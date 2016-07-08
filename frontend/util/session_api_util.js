const SessionActions = require('../actions/session_actions');

module.exports = {

  signup(user, callback, error_cb){
    $.ajax({
      url: 'api/users',
      method: "POST",
      data: {user},
      success: function(newUser){
         callback(newUser)
      },
      error: function(error) {
        error_cb(error);
      }
    });
  },

  login(user, callback, error_cb){
    $.ajax({
      url: 'api/session',
      method: "POST",
      data: {email_address: user.email_address, password: user.password},
      success: function(user){
        console.log('success')
         callback(user)
      },
      error: function(error) {
        error_cb(error);
      }
    });
  },

  signout(callback, cb){
    $.ajax({
      url: 'api/session',
      method: "DELETE",
      success: function(){
         callback();
         cb();
      },
      error: function(error) {
        error_cb(error);
      }
    });
  }
}
