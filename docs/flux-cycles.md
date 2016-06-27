# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Pin Cycles

### Pins API Request Actions

* `fetchAllPins`
  0. invoked from `PinsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/pins` is called.
  0. `receiveAllPins` is set as the callback.

* `createPin`
  0. invoked from new pin button `onClick`
  0. `POST /api/pins` is called.
  0. `receiveSinglePin` is set as the callback.

* `fetchSinglePin`
  0. invoked from `PinDetail` `didMount`/`willReceiveProps`
  0. `GET /api/pins/:id` is called.
  0. `receiveSinglePin` is set as the callback.

* `updatePin`
  0. invoked from `PinForm` `onSubmit`
  0. `POST /api/pins` is called.
  0. `receiveSinglePin` is set as the callback.

* `destroyPin`
  0. invoked from delete pin button `onClick`
  0. `DELETE /api/pins/:id` is called.
  0. `removePin` is set as the callback.

### Pins API Response Actions

* `receiveAllPins`
  0. invoked from an API callback.
  0. `Pin` store updates `_pins` and emits change.

* `receiveSinglePin`
  0. invoked from an API callback.
  0. `Pin` store updates `_pins[id]` and emits change.

* `removePin`
  0. invoked from an API callback.
  0. `Pin` store removes `_pins[id]` and emits change.

### Store Listeners

* `PinsIndex` component listens to `Pin` store.
* `PinDetail` component listens to `Pin` store.


## Board Cycles

### Boards API Request Actions

* `fetchAllBoards`
  0. invoked from `BoardsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/boards` is called.
  0. `receiveAllBoards` is set as the callback.

* `createBoard`
  0. invoked from new board button `onClick`
  0. `POST /api/boards` is called.
  0. `receiveSingleBoard` is set as the callback.

* `fetchSingleBoard`
  0. invoked from `BoardDetail` `didMount`/`willReceiveProps`
  0. `GET /api/boards/:id` is called.
  0. `receiveSingleBoard` is set as the callback.

* `updateBoard`
  0. invoked from `BoardForm` `onSubmit`
  0. `POST /api/boards` is called.
  0. `receiveSingleBoard` is set as the callback.

* `destroyBoard`
  0. invoked from delete board button `onClick`
  0. `DELETE /api/boards/:id` is called.
  0. `removeBoard` is set as the callback.

### Boards API Response Actions

* `receiveAllBoards`
  0. invoked from an API callback.
  0. `Board` store updates `_boards` and emits change.

* `receiveSingleBoard`
  0. invoked from an API callback.
  0. `Board` store updates `_boards[id]` and emits change.

* `removeBoard`
  0. invoked from an API callback.
  0. `Board` store removes `_boards[id]` and emits change.

### Store Listeners

* `BoardsIndex` component listens to `Board` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `PinSearchSelections` `onClick`
  0. `GET /api/pins` is called with `value`.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `PinSearchSelections` `onClick` when 'all' clicked
  0. `SearchSuggestion` store resets `_suggestions` and emits change.
