const React = require('react'),
      SessionStore = require('../../stores/session_store'),
      UserStore = require('../../stores/users_store'),
      UserActions = require('../../actions/users_actions'),
      UploadButton = require('../upload_button');


const ProfilePic = React.createClass({
  uploadPhoto (event){
    event.preventDefault();
    let settings = Object.assign({}, window.cloudinary_options);
      settings["theme"] = "white";
      settings["thumbnails"] = ".upload-field";
      settings["thumbnail_transformation"] = "w_250,h_250,c_fill,g_face";
    cloudinary.openUploadWidget(
      settings,
      function(error, images){
        if (error == null) {
          let url = images[0].thumbnail_url;
          UserActions.updateUser({id: this.props.user.id, user_pic_url: url})
        }
    }.bind(this));
  },

  render(){
    let profilePhoto;
    let emptyImageUrl = "http://res.cloudinary.com/dfqqsmub8/image/upload/w_200,h_200,c_thumb,g_face/empty_image.jpg";
    let url = this.props.user.user_pic_url || emptyImageUrl;
    let color = this.props.user.preference ? this.props.user.preference.user_color : 'white'
    let klass = 'profile-image'
    if (this.props.user.id === SessionStore.currentUser().id){
      klass += ' hover'
    }
    return(
      <img className={klass}
           onClick={this.props.user.id === SessionStore.currentUser().id ? this.uploadPhoto : ''}
           src={url}
           style={{'border': `5px ${color} solid`}}>
      </img>

    )
  }
})

module.exports = ProfilePic;
