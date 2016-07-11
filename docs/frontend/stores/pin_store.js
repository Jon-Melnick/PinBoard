const Store = require('flux/utils').Store,
      PinConstants = require('../constants/pin_constants'),
      dispatcher = require('../dispatcher/dispatcher');


const PinsStore = new Store(dispatcher);

let _pins = {};
let _z = 0;

PinsStore.all = function (){
  let pins = [];
  Object.keys(_pins).forEach(key => {
    pins.push(_pins[key])
  })
  return pins;
};

PinsStore.emptyPins = function(){
  _pins = {};
};

function resetPins (pins){
  _pins = {};
  _z = 0;
  pins.forEach(pin =>{
    _pins[pin.id] = pin;
    if (pin.zIndex > _z) {
      _z = pin.zIndex;
    };
  });
};

PinsStore.getZ = function (){
  return _z;
};

 function setPin (pin) {
  _pins[pin.id] = pin;
};

function removePin (pin) {
 delete _pins[pin.id]
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
    case PinConstants.PIN_DELETED:
      removePin(payload.pin)
      break;
  };
  PinsStore.__emitChange();
}


module.exports = PinsStore;
