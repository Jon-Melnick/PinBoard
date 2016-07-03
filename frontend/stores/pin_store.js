const Store = require('flux/utils').Store,
      PinConstants = require('../constants/pin_constants'),
      dispatcher = require('../dispatcher/dispatcher');


const PinsStore = new Store(dispatcher);

let _pins = {};

PinsStore.all = function (){
  let pins = [];
  Object.keys(_pins).forEach(key => {
    pins.push(_pins[key])
  })
  return pins;
};

function resetPins (pins){
  _pins = {};
  pins.forEach(pin =>{
    _pins[pin.id] = pin;
  });
};

 function setPin (pin) {
  _pins[pin.id] = pin;
};

PinsStore.find = function (id){
  return _pins[id]
}

PinsStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case PinConstants.PINS_RECEIVED:
      resetPins(payload.pins);
      break;
    case PinConstants.PIN_RECEIVED:
      setPin(payload.pin)
      break;
  };
  PinsStore.__emitChange();
}


module.exports = PinsStore;