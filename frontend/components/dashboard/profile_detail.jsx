const React = require('react'),
      ProfilePic = require('./profile_image');

const ProfileDetail = React.createClass({

  render(){
    var style = {
      background: `green`,
    };
    return (
      <div className='profile-details'>
        <ProfilePic user={this.props.user}/>
        <ul className='profile-info'>
          <li>{this.props.user.email_address}</li>
          <li>{this.props.user.full_name}</li>
        </ul>
      </div>
    )
  }

});

module.exports = ProfileDetail;
