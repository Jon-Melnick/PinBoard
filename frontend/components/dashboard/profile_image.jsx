const React = require('react'),
      SessionStore = require('../../stores/session_store'),
      UserStore = require('../../stores/users_store'),
      UploadButton = require('../upload_button');


const ProfilePic = React.createClass({
  getInitialState(){
    return({image: '', url: ''})
  },

  uploadPhoto (event){
    event.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error == null) {
          var url = images[0].thumbnail_url;
          this.setState({url: url});
        }
    }.bind(this));
  },

  render(){
    console.log(SessionStore.currentUser());
    return(
      <div className='profile-pic' onClick={this.uploadPhoto}><p>Profile Photo</p></div>
    )
  }
})

module.exports = ProfilePic;
