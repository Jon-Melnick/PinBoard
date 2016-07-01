json.array! @pins do |pin|
  json.id pin.id
  json.title pin.title
  json.body pin.body
  json.user_id pin.user_id
  json.board_id pin.board_id
  json.posX pin.posX
  json.posY pin.posY
  json.zIndex pin.zIndex
end
