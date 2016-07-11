module.exports = {
  fetchAllPins(id, callback){
    $.ajax({
      url: 'api/pins',
      method: "GET",
      data: {board_id: id},
      success: (pins) => {
         callback(pins)
      }
    })
  },

  fetchPin(id, cb){
    $.ajax({
      url: `api/pins/${id}`,
      method: "GET",
      success: function(pin){
         console.log(pin)
      }
    });
  },

  createPin(pin, tags, cb){
    $.ajax({
      url: `api/pins`,
      method: "POST",
      data: {pin: pin, tags},
      success: function(newPin){
         cb(newPin)
      }
    });
  },

  updatePos(pin, x, y, cb) {
    $.ajax({
      method: 'PATCH',
      url: 'api/pins/'+ pin.id,
      data: { pin: {posX: x, posY: y}},
      success: (newPin) => {
        cb(newPin);
      }
    });
  },

  updatePin(pin, tags, cb) {
    $.ajax({
      method: 'PATCH',
      url: 'api/pins/'+ pin.id,
      data: { pin: pin, tags},
      success: (newPin) => {
        cb(newPin);
      }
    });
  },

  updateZ(pin, z, cb) {
    $.ajax({
      method: 'PATCH',
      url: 'api/pins/'+ pin.id,
      data: { pin: {zIndex: z}},
      success: (newPin) => {
        cb(newPin);
      }
    });
  },

  deletePin(id, cb){
    $.ajax({
      url: `api/pins/${id}`,
      method: "DELETE",
      success: function(pin){
         cb(pin);
      }
    })
  }

}
