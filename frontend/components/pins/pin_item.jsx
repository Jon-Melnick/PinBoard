var React = require('react'),
		PinAction = require('../../actions/pin_actions');
		import Draggable, {DraggableCore} from 'react-draggable';

		import Edit from 'react-icons/lib/ti/pencil';
		import Zoom from 'react-icons/lib/md/zoom-in';



  var PinItem = React.createClass({
		getInitialState(){
			return({mouseOver: 'none'})
		},

		updatePos: function(e){
			let $parent = $(e.target.parentElement);
			let pos = $parent.position();
			PinAction.updatePos(this.props.pin, pos.left, pos.top);
		},

		changeZ(){
			PinAction.updateZ(this.props.pin, (this.props.currentZ + 1));
			this.props.updateZ();
		},

		mouseEnter(){
			this.setState({mouseOver: 'block'})
		},

		mouseLeave(){
			this.setState({mouseOver: 'none'})
		},

		handleModal(){
			this.props.openModal(this.props.pin);
		},

    render: function () {
      return (
				<Draggable
        handle=".handle"
        defaultPosition={{x: this.props.pin.posX, y: this.props.pin.posY}}
        zIndex={1}
				bounds='parent'
        onStart={this.handleStart}
        onStop={this.handleStop, this.updatePos}>
        <div className="pin" onDoubleClick={this.changeZ} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={{'zIndex': `${this.props.pin.zIndex}`}}>
          <div className="handle tack"></div><br/>
					<div>{this.props.pin.title}</div>
					<div className='pin-body'>{this.props.pin.body}</div>
          <div className='pin-author'>{this.props.pin.author_name}</div>
					<ul className='pin-tool'>
						<li style={{'display': this.state.mouseOver}}><Zoom /></li>
						<li style={{'display': this.state.mouseOver}} value={this.props.pin.id} onClick={this.handleModal}><Edit/></li>
					</ul>
        </div>
      </Draggable>
      );
    }
  });

  module.exports = PinItem;
