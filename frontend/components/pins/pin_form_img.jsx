const React = require('react');
const PinActions = require('../../actions/pin_actions');

const PinText = React.createClass({
  getInitialState(){
    return({title: "", body: "", pinColor: "", imgUrl: ""})
  },

  uploadPhoto (event){
    event.preventDefault();
    let settings = Object.assign({}, window.cloudinary_options);
      settings["theme"] = "white";
      settings["thumbnails"] = ".upload-field";
      settings["thumbnail_transformation"] = "w_250,h_166,c_fill,g_face";
    cloudinary.openUploadWidget(
      settings,
      function(error, images){
        if (error == null) {
          let url = images[0].thumbnail_url;
          this.setState({imgUrl: url})
          console.log(this.state)
        }
    }.bind(this));
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
      img_url: this.state.imgUrl,
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

      <label>Image: </label>
      {this.state.imgUrl === "" ? <button onClick={this.uploadPhoto}>Upload Photo</button> : <img className='img-pin-uploading' src={this.state.imgUrl}></img>}

        <br></br><br></br>
        <br></br><br></br>
      <button onClick={this.handleSubmit}>Create Pin</button>
    </form>
    )
  }
});

module.exports = PinText;
