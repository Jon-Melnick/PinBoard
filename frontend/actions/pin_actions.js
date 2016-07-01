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

  createPin(pin){
    PinApi.createPin(pin, this.receivePin)
  },

  updatePos(pin, x, y){
    PinApi.updatePos(pin, x, y, this.receivePin)
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
  }
}
