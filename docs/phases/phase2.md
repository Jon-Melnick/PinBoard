# Phase 3: Boards (2 days)

## Rails
### Models
* Board


### Controllers
* Api::BoardsController (create, destroy, index, show, update)

### Views
* board/index.json.jbuilder
* board/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* BoardsIndex
  - BoardIndexItem
* BoardForm (new)
* BoardMenu

### Stores
* Board

### Actions
* ApiActions.receiveAllBoards -> triggered by ApiUtil
* ApiActions.receiveSingleBoard
* ApiActions.deleteBoard
* BoardActions.fetchAllBoards -> triggers ApiUtil
* BoardActions.fetchSingleBoard
* BoardActions.createBoard
* BoardActions.editBoard
* BoardActions.destroyBoard

### ApiUtil
* ApiUtil.fetchAllBoards
* ApiUtil.fetchSingleBoard
* ApiUtil.createBoard
* ApiUtil.editBoard
* ApiUtil.destroyBoard

### Style Board components
* Board having a background
* Board has a visible BoardMenu on the rightside

## Gems/Libraries
