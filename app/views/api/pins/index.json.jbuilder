json.array! @pins do |pin|
  json.id pin.id
  json.title pin.title
  json.body pin.body
  json.user_id pin.user_id
  json.board_id pin.board_id
  json.posX pin.posX
  json.posY pin.posY
  json.zIndex pin.zIndex
  json.author pin.author
  json.author_name pin.author.full_name
  json.board pin.board
  json.pin_color pin.pin_color
  json.note_color pin.note_color
  json.img_url pin.img_url
  json.shadow pin.author.preference.user_color
end
