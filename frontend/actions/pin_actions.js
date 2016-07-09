const PinApi = require('../util/pin_api_util'),
      PinConstants = require('../constants/pin_constants'),
      dispatcher = require('../dispatcher/dispatcher');

module.exports = {

  fetchAllPins(id){
    PinApi.fetchAllPins(id, this.receiveAllPins)
  },

  fetchPin(id) {
    PinApi.fetchPin(id, this.receivePin)
  },

  createPin(pin, tags){
    PinApi.createPin(pin, tags, this.receivePin)
  },

  updatePin(pin){
    PinApi.updatePin(pin, this.receivePin)
  },

  updatePos(pin, x, y){
    PinApi.updatePos(pin, x, y, this.receivePin)
  },

  updateZ(pin, z){
    PinApi.updateZ(pin, z, this.receivePin)
  },

  deletePin(id){
    PinApi.deletePin(id, this.deletedPin)
  },

  receiveAllPins(pins){
    dispatcher.dispatch({
      actionType: PinConstants.PINS_RECEIVED,
      pins: pins
    });
  },

  receivePin(pin){
    dispatcher.dispatch({
      actionType: PinConstants.PIN_RECEIVED,
      pin: pin
    });
  },

  deletedPin(pin){
    dispatcher.dispatch({
      actionType: PinConstants.PIN_DELETED,
      pin: pin
    });
  }
}
