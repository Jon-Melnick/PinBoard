var React = require('react'),
		PinAction = require('../../actions/pin_actions');
		import Draggable, {DraggableCore} from 'react-draggable';


  var PinItem = React.createClass({

		wtf: function(e){
			let $parent = $(e.target.parentElement);
			let pos = $parent.position();
			PinAction.updatePos(this.props.pin, pos.left, pos.top);
		},

		changeZ(){
			console.log(this.props.pin.id);
		},


    render: function () {
			console.log(this.props.pin)
			console.log(this.props.users)
      return (
				<Draggable
        handle=".handle"
        defaultPosition={{x: this.props.pin.posX, y: this.props.pin.posY}}
        zIndex={1}
        onStart={this.handleStart}
        onStop={this.handleStop, this.wtf}>
        <div className="pin" onDoubleClick={this.changeZ}>
          <div className="handle tack"></div><br/>
					<div>{this.props.pin.title}</div>
          <div>{this.props.pin.body}</div>

        </div>
      </Draggable>
      );
    }
  });

  module.exports = PinItem;
