const React = require('react'),
      ProfileEdit = require('./profile_edit'),
  		SessionStore = require('../../stores/session_store'),
      ProfilePic = require('./profile_image');
import { SliderPicker } from 'react-color';
import Edit from 'react-icons/lib/ti/pencil';

const ProfileDetail = React.createClass({
  getInitialState(){
    return({mouseOver: 'none',
            currentUser: SessionStore.currentUser(),
            edit: false,
            form: {first_name: this.props.user.first_name,
                   last_name: this.props.user.last_name}})
  },

  mouseEnter(){
    this.setState({mouseOver: 'block'})
  },

  mouseLeave(){
    this.setState({mouseOver: 'none'})
  },

  editDetails(){
    this.setState({edit: true})
  },

  editDetailsClose(){
    this.setState({edit: false})
  },

  details(){
    let preferences = <li></li>
    if (this.props.user.id && this.props.user.id === this.state.currentUser.id) {
      if (this.props.user.preference) {
        let colorStyle = {
          background: `${this.props.user.preference.user_color}`
        };
        let homeStyle ={
          backgroundImage: `url(${this.props.user.preference.home_board})`
        }
        preferences =
        <div>
          <li>Preferences</li>
          <li>Color: <div className='color-box' style={colorStyle}></div></li>
          <li>Background: <div className='color-box' style={homeStyle}></div></li>
          <span className='edit-tool'>
            <li style={{'display': this.state.mouseOver}} onClick={this.editDetails}><Edit/></li>
          </span>
        </div>
      };
    }
    return <ul className='profile-info' onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
      <li>{this.props.user.email_address}</li>
      <li>{this.props.user.full_name}</li>
      <br></br>
      {preferences}
    </ul>
  },

  render(){

    return (
      <div className='profile-details'>
        <ProfilePic user={this.props.user}/>
          {this.state.edit ? <ProfileEdit user={this.props.user} editDetailsClose={this.editDetailsClose}/> : this.details()}
      </div>
    )
  }

});

module.exports = ProfileDetail;
