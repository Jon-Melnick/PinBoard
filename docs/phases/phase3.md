# Phase 2: Flux Architecture and Pin CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* PinsIndex
  - PinsIndexItem
* PinForm

### Stores
* Pin

### Actions
* ApiActions.receiveAllPins -> triggered by ApiUtil
* ApiActions.receiveSinglePin
* ApiActions.deletePin
* PinActions.fetchAllPins -> triggers ApiUtil
* PinActions.fetchSinglePin
* PinActions.createPin
* PinActions.editPin
* PinActions.destroyPin

### ApiUtil
* ApiUtil.fetchAllPins
* ApiUtil.fetchSinglePin
* ApiUtil.createPin
* ApiUtil.editPin
* ApiUtil.destroyPin

### Style Pin Components
* be sure to have pins drag and persist location
* allow pins to be brought to the front

## Gems/Libraries
* Flux Dispatcher (npm)
* react-draggable (npm) (for pins)
