json.extract! pin, :id, :title, :body, :user_id, :board_id, :posX, :posY, :zIndex, :board, :pin_color, :note_color, :img_url, :date

json.author_name pin.author.full_name
json.shadow pin.author.preference.user_color

json.tags do
  json.array! pin.tags
end
