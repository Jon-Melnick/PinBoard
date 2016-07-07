const React = require('react'),
      UserActions = require('../../actions/users_actions');

import { SliderPicker } from 'react-color';

const ProfileEdit = React.createClass({
  getInitialState(){
      return({first_name: this.props.user.first_name,
              last_name: this.props.user.last_name,
              full_name: this.props.user.first_name + ' ' + this.props.user.last_name,
              user_color: this.props.user.preference.user_color})
  },

  handleChange(e){
    let str = e.currentTarget.value
    let fname = str.substr(0,str.indexOf(' '));
    let lname = str.substr(str.indexOf(' ')+1);
    this.setState({first_name: fname,
                   last_name: lname,
                   full_name: str});
  },

  handleChangeComplete(newColor){
    this.setState({user_color: newColor.hex})
  },

  clickSubmit(e){
    e.preventDefault();
    e.stopPropagation();
    let user = {
      id: this.props.user.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_color: this.state.user_color
    };

    UserActions.updateUser(user);
    this.props.editDetailsClose();
  },

  clickCancel(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.editDetailsClose();
  },

  render(){
    return(
      <ul className='profile-info' >
          <li>{this.props.user.email_address}</li>

          <li>
            <input type='text' value={this.state.full_name} onChange={this.handleChange}>
            </input>
          </li>
          <br></br>
          <SliderPicker
            color={ this.state.user_color }
            onChangeComplete={ this.handleChangeComplete }/>
          <br></br>
          <button onClick={this.clickSubmit}>Save</button>
          <button onClick={this.clickCancel}>Cancel</button>
      </ul>
    )
  }
})

module.exports = ProfileEdit;
