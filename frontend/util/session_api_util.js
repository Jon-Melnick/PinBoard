module.exports = {

  signup(user, callback){
    $.ajax({
      url: 'api/users',
      method: "POST",
      data: {user},
      success: function(newUser){
         callback(newUser)
      }
    });
  },

  login(user, callback){
    $.ajax({
      url: 'api/session',
      method: "POST",
      data: {email_address: user.email_address, password: user.password},
      success: function(user){
         callback(user)
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
      }
    });
  }
}
