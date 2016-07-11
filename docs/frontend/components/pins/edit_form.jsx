const React = require('react'),
      Styles = require('../styling'),
      PinActions = require('../../actions/pin_actions');

const PinEdit = React.createClass({
  getInitialState(){
    return({title: this.props.pin.title, body: this.props.pin.body, pinColor: this.props.pin.pin_color, noteColor: this.props.pin.note_color, tags: []})
  },

  updateState(e){
    var state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  },

  handleSubmit(e){
    e.preventDefault()
    const formData = {
			title: this.state.title,
			body: this.state.body,
      id: this.props.pin.id,
      pin_color: this.state.pinColor,
      note_color: this.state.noteColor,
      board_id: this.props.boardId
		};
    const tags = {
      tags: this.state.tags
    }
    PinActions.updatePin(formData, tags);
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

  handleDelete(e){
    e.preventDefault();
    e.stopPropagation();
    PinActions.deletePin(this.props.pin.id)
    this.props.onModalClose();
  },

  updateTags(e){
    this.setState({tags: e.target.value})
  },

  render(){
    return(
      <form className='new-form'>
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

            {this.props.pin.img_url ? <div></div> : <div><label>Note Background: </label>
              <div className='option-selector-container group'>
                {Object.keys(Styles.note_styles).map(key => {
                  let noteType = Styles.note_styles[key]
                  let klass = noteType.klass;
                  if (this.state.noteColor === noteType.value) {
                    klass += ' pin-selected'
                  }
                  return <div className={klass}
                      key={key}
                      value={noteType.value}
                      onClick={this.noteSelect}></div>
                })}
              </div>
              </div>
            }
              <br></br><br></br>
              <br></br><br></br>
              <label>Add More Tags: </label>
                <input type="text" value={this.state.tags} onChange={this.updateTags}></input>
              <br></br><br></br>
              <br></br><br></br>
        <button onClick={this.handleDelete}>Delete Pin</button>
        <button onClick={this.handleSubmit}>Edit Pin</button>
      </form>
    )
  }
});

module.exports = PinEdit;
