json.array! @boards do |board|
  json.id board.id
  json.title board.title
  json.description board.description
  json.creator_id board.creator_id
end
