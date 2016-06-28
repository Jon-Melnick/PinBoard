module.exports = {

  signup(user, callback){
    $.ajax({
      url: 'api/users',
      method: "POST",
      data: {user: user},
      success: function(newUser){
         console.log(newUser)
      }
    });
  },

  login(user, callback){
    $.ajax({
      url: 'api/session',
      method: "POST",
      data: {email_address: user.email_address, password: user.password},
      success: function(user){
         console.log(user)
      }
    });
  },

  signout(user, callback){
    $.ajax({
      url: 'api/session',
      method: "DELETE",
      date: {email_address: user.email_address, password: user.password},
      success: function(user){
         console.log(user)
      }
    });
  }
}
