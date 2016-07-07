const React = require('react');
const PinActions = require('../../actions/pin_actions');

const PinText = React.createClass({
  getInitialState(){
    return({title: "", body: "", pinColor: "", noteColor: ""})
  },

  updateState(e){
    var state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  },

  handleSubmit(e){
    e.preventDefault();
    const formData = {
      title: this.state.title,
      body: this.state.body,
      pin_color: this.state.pinColor,
      note_color: this.state.noteColor,
      board_id: this.props.boardId
    };
    PinActions.createPin(formData);
    this.props.onModalClose();
  },

  pinSelect(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({pinColor: e.currentTarget.value})
  },

  noteSelect(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({noteColor: e.currentTarget.value})
  },

  render(){
    return(<form className='new-form'>
      <label>Title: </label>
      <input type="text" value={this.state.title} onChange={this.updateState} id='title'/>
        <br></br><br></br>
      <label>Body: </label>
      <input type="text" value={this.state.body} onChange={this.updateState} id='body'/>
        <br></br><br></br>
      <label>Pin Color: </label>
        <div className='option-selector-container group'>
          <div className='option-selector-pin'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png'
            style={{'backgroundColor': 'teal'}}
            onClick={this.pinSelect}></div>
          <div className='option-selector-pin'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-gold_x1xesf.png'
            style={{'backgroundColor': 'gold'}}
            onClick={this.pinSelect}></div>
          <div className='option-selector-pin'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-green_vkb5ve.png'
            style={{'backgroundColor': 'green'}}
            onClick={this.pinSelect}></div>
          <div className='option-selector-pin'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-red_jjgvcx.png'
            style={{'backgroundColor': 'red'}}
            onClick={this.pinSelect}></div>
          <div className='option-selector-pin'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-purple_wndk5t.png'
            style={{'backgroundColor': 'purple'}}
            onClick={this.pinSelect}></div>
          <div className='option-selector-pin'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png'
            style={{'backgroundColor': 'blue'}}
            onClick={this.pinSelect}></div>
          <div className='option-selector-pin'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-black_l5ztxz.png'
            style={{'backgroundColor': 'black'}}
            onClick={this.pinSelect}></div>
        </div>
        <br></br><br></br><br></br>

      <label>Note Background: </label>
        <div className='option-selector-container group'>
          <div className='option-selector-pin note-green-striped'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825758/st-green-stripe_iwaoyx.png'
            onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-white'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825754/st-white_kxwyau.png'
            onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-flowers'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825753/st-flowers_k1hjcq.png'
            onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-faded-stripe'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825753/st-faded-stripe_iikpya.png'
            onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-purple-checkered'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple-checkered_etg2ah.png'
            onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-purple-striped'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple-stripe_qho3fo.png'
            onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-purple'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple_ixwtyk.png'
            onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-pink-stripe'
               value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-pink-stripe_bqkv86.png'
               onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-pink-purple-stripe'
           value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-pink-purple-stripe_zgwzca.png'
           onClick={this.noteSelect}></div>
         <div className='option-selector-pin note-green'
           value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-green_cle3ps.png'
           onClick={this.noteSelect}></div>
         <div className='option-selector-pin note-burnt-orange'
           value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-burnt-orange_uuj2zx.png'
           onClick={this.noteSelect}></div>
         <div className='option-selector-pin note-brown-decorated'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-brown-decorated_zlcljd.png'
            onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-blue'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-blue_gv4cjs.png'
            onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-fancy'
            value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-fancy_zeu6ii.png'
            onClick={this.noteSelect}></div>
          <div className='option-selector-pin note-gold'
           value='http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-gold_nc2k3g.png'
           onClick={this.noteSelect}></div>
        </div>
        <br></br><br></br>
        <br></br><br></br>
      <button onClick={this.handleSubmit}>Create Pin</button>
    </form>
    )
  }
});

module.exports = PinText;
