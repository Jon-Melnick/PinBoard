const React = require('react'),
      Styling = require('../styling'),
      UserActions = require('../../actions/users_actions');

import { SliderPicker } from 'react-color';


const ProfileEdit = React.createClass({
  getInitialState(){
      return({first_name: this.props.user.first_name,
              last_name: this.props.user.last_name,
              full_name: this.props.user.first_name + ' ' + this.props.user.last_name,
              user_color: this.props.user.preference.user_color,
              home_board: this.props.user.preference.home_board})
  },

  handleChange(e){
    let str = e.currentTarget.value
    let fname = str.substr(0,str.indexOf(' '));
    let lname = str.substr(str.indexOf(' ')+1);
    this.setState({first_name: fname,
                   last_name: lname,
                   full_name: str});
  },

  handleColorChange(e){
    let color = e.currentTarget.value;
    this.setState({user_color: color})
    this.handleChangeComplete(color);
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
      user_color: this.state.user_color,
      home_board: this.state.home_board
    };

    UserActions.updateUser(user);
    this.props.editDetailsClose();
  },

  clickCancel(e){
    e.preventDefault();
    e.stopPropagation();
    this.props.editDetailsClose();
  },

  boardSelect(e){
    this.setState({home_board: e.currentTarget.value})
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
          <li>Color   {this.state.user_color}></li>
          <SliderPicker
            color={ this.state.user_color }
            onChangeComplete={ this.handleChangeComplete }/>
          <br></br>
          <li>Home Board</li>
            <div className=''>
              {Object.keys(Styling.home_boards).map(key => {
                let board = Styling.home_boards[key]
                let sampleStyle = {
                  backgroundImage: 'url(' + board.board_sample + ')'}
                if (this.state.home_board === board.board_style) {
                  sampleStyle.border = `2px solid ${this.props.user.preference.user_color}`
                }
                return <div key={key} className='option-selector-pin'
                  value={board.board_style}
                  style={sampleStyle}
                  onClick={this.boardSelect}></div>
              })}
            </div>
            <br></br>
              <br></br>
            <br></br>
          <button onClick={this.clickSubmit}>Save</button>
          <button onClick={this.clickCancel}>Cancel</button>
      </ul>
    )
  }
})

module.exports = ProfileEdit;
