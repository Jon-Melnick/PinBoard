module.exports = {
  fetchAllUsers(callback){
    $.ajax({
      url: 'api/users',
      method: "GET",
      success: (users) => {
         callback(users)
      }
    })
  },

  fetchUser(id, cb){
    $.ajax({
      url: `api/users/${id}`,
      method: "GET",
      success: function(user){
         cb(user)
      }
    })
  },

  updateUser(user, cb){
    $.ajax({
      method: 'PATCH',
      url: 'api/users/'+ user.id,
      data: { user: user},
      success: (newUser) => {
        cb(newUser);
      }
    });
  }
}
