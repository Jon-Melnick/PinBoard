let React = require('react'),
    PinItem = require('./pin_item.jsx'),
    PinStore = require('../stores/pin_store.js');


const PinList = React.createClass({

  render (){
    let pins = this.state.pins.map((pin)=>{
      return <PinItem key={pin.id} className="pin" pin={pin} bound='parent'></PinItem>;
      });

    return (
      <div className="container">
        <div style={{height: '850px', width: '850px', margin: '0px', position: 'relative'}}>
          {pins}
        </div>
      </div>
    )
  }


});

module.exports = PinList;
