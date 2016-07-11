const React = require('react');

const ZoomImg = React.createClass({
  getInitialState(){
    return({pin: this.props.pin})
  },

  render(){
    let klass = 'pin-zoom-hor';
    let style = {};
    let img_url = this.state.pin.img_url;
    if (this.state.pin.img_url.indexOf('h_166') > 0) {
      let index = img_url.indexOf('w_')
      let begin = img_url.slice(0, index);
      let size = 'c_scale,h_400';
      let end = img_url.slice(index+25);
      img_url = begin + size + end;
      style = {backgroundImage: `url(${img_url})`,
      backgroundSize: 'cover', position: 'absolute', bottom: -1, right: -1}
    } else {
      klass = 'pin-zoom-vert'
      let index = img_url.indexOf('w_')
      let begin = img_url.slice(0, index);
      let size = 'c_scale,h_600';
      let end = img_url.slice(index+25);
      img_url = begin + size + end;
      style = {backgroundImage: `url(${img_url})`,
      backgroundSize: 'cover', position: 'absolute', bottom: -100, right: -1}
    }
    return (
      <div className={klass} style={style}>
        <div className='pin-zoom-date'>{this.state.pin.date}</div>
      </div>
    )
  }
});

module.exports = ZoomImg;
