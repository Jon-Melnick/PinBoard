const React = require('react');

const PinZoom = React.createClass({
  getInitialState(){
    return({pin: this.props.pin})
  },

  render(){
    return (
      <div className='pin-zoom' style={{backgroundImage: 'url(' + this.props.pin.note_color + ')',
      backgroundSize: 'cover', position: 'absolute', bottom: -1, right: -1}}>
        <div className='pin-zoom-title'>{this.state.pin.title}</div>
        <div className='pin-zoom-date'>{this.state.pin.date}</div>
        <div className='pin-zoom-body'>{this.state.pin.body}</div>
        <div className='pin-zoom-author'>{this.state.pin.author_name}</div>
      </div>
    )
  }
});

module.exports = PinZoom;
