const React = require('react');
const Styles = require('../styling');

const PinActions = require('../../actions/pin_actions');

const PinText = React.createClass({
  getInitialState(){
    return({title: "",
            body: "",
            pinColor: 'http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png',
            imgUrl: "",
            vertical: false,
            tags: []})
  },

  uploadPhoto (event){
    event.preventDefault();
    let layout = "w_250,h_166,c_fill,g_face";
    if (this.state.vertical) {
      layout = "w_166,h_250,c_fill,g_face"
    }
    let settings = Object.assign({}, window.cloudinary_options);
      settings["theme"] = "white";
      settings["thumbnails"] = ".upload-field";
      settings["thumbnail_transformation"] = layout;
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
    const tags = {
      tags: this.state.tags
    }
    PinActions.createPin(formData, tags);
    this.props.onModalClose();
  },

  pinSelect(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({pinColor: e.currentTarget.value})
  },

  horizontal(){
    this.setState({vertical: false})
  },

  vertical(){
    this.setState({vertical: true})
  },
  
  updateTags(e){
    this.setState({tags: e.target.value})
  },

  noteSelect(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({noteColor: e.currentTarget.value})
  },

  render(){
    console.log(this.state.vertical)
    let vert = <div className='option-selector-container group'>
                  <div className='image-vertical'
                    onClick={this.vertical}></div>
                  <div className='image-horizontal img-selected'
                    onClick={this.horizontal}></div>
                </div>
    if (this.state.vertical) {
      vert = <div className='option-selector-container group'>
              <div className='image-vertical img-selected'
                   onClick={this.vertical}></div>
              <div className='image-horizontal'
                   onClick={this.horizontal}></div>
              </div>
    }
    return(<form className='new-form'>
      <label>Title: </label>
      <input type="text" value={this.state.title} onChange={this.updateState} id='title'/>
        <br></br><br></br>
      <label>Body: </label>
      <input type="text" value={this.state.body} onChange={this.updateState} id='body'/>
        <br></br><br></br>
      <label>Pin Color: </label>
        <div className='option-selector-container group'>
          {Object.keys(Styles.pin_styles).map(key => {
            let styleType = Styles.pin_styles[key]
            let klass = 'option-selector-pin';
            if (this.state.pinColor === styleType.value) {
              klass += ' pin-selected'
            }
            return <div className={klass}
              value={styleType.value}
              style={styleType.style}
              key={key}
              onClick={this.pinSelect}></div>
          })}
        </div>
        <br></br><br></br><br></br>
          <label>Tags: </label>
            <input type="text" value={this.state.tags} onChange={this.updateTags}></input>
          <br></br><br></br>
          <br></br><br></br>

      <label>Image layout: </label>
      {vert}
        <br></br><br></br><br></br>

    <label>Image:</label>
      {this.state.imgUrl === "" ? <button onClick={this.uploadPhoto}>Upload Photo</button> : <img className='img-pin-uploading' src={this.state.imgUrl}></img>}

        <br></br><br></br>
        <br></br><br></br>
      <button onClick={this.handleSubmit}>Create Pin</button>
    </form>
    )
  }
});

module.exports = PinText;
