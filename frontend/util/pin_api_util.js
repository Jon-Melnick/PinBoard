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

  createPin(pin, cb){
    $.ajax({
      url: `api/pins`,
      method: "POST",
      data: {pin: pin},
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

  updatePin(pin, cb){
    $.ajax({
      url: `api/pins/${pin.id}`,
      method: "PATCH",
      data: {pin: pin},
      success: function(updatedPin){
         console.log(updatedPin)
      }
    })
  },

  deletePin(pin, cb){
    $.ajax({
      url: `api/pins/${pin.id}`,
      method: "DELETE",
      success: function(){
         console.log()
      }
    })
  }

}
