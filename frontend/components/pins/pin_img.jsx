var React = require('react'),
		SessionStore = require('../../stores/session_store'),
		Modal = require('react-modal'),
		ZoomImg = require('./zoom_img'),
		ZoomImgStyle = require('./zoom_img_style'),
		PinAction = require('../../actions/pin_actions');
		import Draggable, {DraggableCore} from 'react-draggable';

		import Edit from 'react-icons/lib/ti/pencil';
		import Zoom from 'react-icons/lib/md/zoom-in';



  var PinImg = React.createClass({
		getInitialState(){
			return({mouseOver: 'none', currentUser: SessionStore.currentUser(), modalOpen: false})
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

		cropBody(){
			if (this.props.pin.body.length > 50) {
				this.body = this.props.pin.body.slice(0,50) + "..."
			} else {
				this.body = this.props.pin.body
			}
			return this.body
		},

		rgba(hex) {
	    var c;
	    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
	        c= hex.substring(1).split('');
	        if(c.length== 3){
	            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
	        }
	        c= '0x'+c.join('');
	        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.5)';
	    }
	    throw new Error('Bad Hex');
	  },


		onModalClose(){
	    this.setState({modalOpen: false})
	  },

		openModal(){
			this.setState({modalOpen: true})
		},

    render: function () {

			let img = {
				zIndex: `${this.props.pin.zIndex}`,
				backgroundImage: 'url(' + this.props.pin.img_url + ')',
				boxShadow: `5px 5px 5px rgba(0, 0, 0, 0.5)`
			};
			let pinStyle = {}
			if (this.props.pin.pin_color.length > 0) {
				pinStyle ={
					backgroundImage: 'url(' + this.props.pin.pin_color + ')'
				}
			};
			let edit = <li></li>
			if (this.props.pin.user_id && this.props.pin.user_id === this.state.currentUser.id) {
				edit = <li style={{'display': this.state.mouseOver}} value={this.props.pin.id} onClick={this.handleModal}><Edit/></li>
			}
			let klass = 'pin-img-horz'
			if (this.props.pin.img_url.indexOf('w_166') >= 0) {
				klass = 'pin-img-vert'
			}
      return (
				<Draggable
        handle=".handle"
        defaultPosition={{x: this.props.pin.posX, y: this.props.pin.posY}}
        zIndex={1}
				bounds='parent'
        onStart={this.handleStart, this.changeZ}
        onStop={this.handleStop, this.updatePos}>
        <div className={klass} onDoubleClick={this.changeZ} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={img}>
          <div className="handle tack-img" style={pinStyle}></div><br/>
					<ul className='pin-tool'>
						<li style={{'display': this.state.mouseOver}} onClick={this.openModal}><Zoom /></li>
						{edit}
					</ul>
					<Modal
						isOpen={this.state.modalOpen}
						onRequestClose={this.onModalClose}
						style={ZoomImgStyle}
						>
						<ZoomImg onModalClose={this.onModalClose} pin={this.props.pin} />
					</Modal>
        </div>
      </Draggable>
      );
    }
  });

  module.exports = PinImg;
