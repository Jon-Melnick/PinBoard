# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Pins

- `GET /api/pins`
  - Pins index/search
- `POST /api/pins`
- `GET /api/pins/:id`
- `PATCH /api/pins/:id`
- `DELETE /api/pins/:id`

### Board

- `GET /api/boards`
- `POST /api/boards`
- `GET /api/boards/:id`
- `PATCH /api/boards/:id`
- `DELETE /api/boards/:id`
- `GET /api/boards/:id/pins`
  - index of all pins for a board

### Tags

- A pin's tags will be included in the pin information panel
- `GET /api/tags`
- `POST /api/pins/:pin_id/tags`: add tag to pin by name
- `DELETE /api/pins/:pin_id/tags/:tag_name`: remove tag from pin by
  name
