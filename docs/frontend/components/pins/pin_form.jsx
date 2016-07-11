const React = require('react'),
      PinFormImg = require('./pin_form_img'),
      PinFormText = require('./pin_form_text'),
      PinActions = require('../../actions/pin_actions');

const PinForm = React.createClass({
  getInitialState(){
    return({form: 'text', z: this.props.z})
  },

  generateForm(){
    if (this.state.form === 'text') {
      return <PinFormText boardId={this.props.boardId} onModalClose={this.props.onModalClose} z={this.state.z}/>
    } else {
      return <PinFormImg boardId={this.props.boardId} onModalClose={this.props.onModalClose} z={this.state.z}/>
    }
  },

  switchTabText(){
    this.setState({form: 'text'})
  },

  switchTabImg(){
    this.setState({form: 'img'})
  },

  render(){
    let color = {color: `${this.props.color}`}
    let tabs = <div className='form-tabs-container'>
      <div className='form-tabs' onClick={this.switchTabText}>Text</div>
      <div className='form-tabs' style={color} onClick={this.switchTabImg}>Picture</div>
    </div>
    if (this.state.form === 'text') {
      tabs = <div className='form-tabs-container'>
        <div className='form-tabs' style={color} onClick={this.switchTabText}>Text</div>
        <div className='form-tabs' onClick={this.switchTabImg}>Picture</div>
      </div>
    }
    return(
      <div>
        {tabs}
        {this.generateForm()}
      </div>

    )
  }
});

module.exports = PinForm;
