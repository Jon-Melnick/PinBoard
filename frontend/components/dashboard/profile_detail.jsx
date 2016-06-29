const React = require('react');


const ProfileDetail = React.createClass({

  render(){
    return (
      <div className='profile-details'>
        <div className='profile-pic'><p>Profile Photo</p></div>
        <ul className='profile-info'>
          <li>{this.props.user.email_address}</li>
          <li>{this.props.user.first_name}</li>
          <li>{this.props.user.last_name}</li>
        </ul>
      </div>
    )
  }

});

module.exports = ProfileDetail;
