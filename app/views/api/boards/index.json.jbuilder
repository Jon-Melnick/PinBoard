json.array! @boards do |board|
  json.id board.id
  json.title board.title
  json.description board.description
  json.creator_id board.creator_id
  json.team_ids board.team_ids
  json.team board.team
  json.hidden board.hidden
  json.board_style board.board_style
  json.pins board.pins
  json.tags board.tags.uniq

  json.team_members board.team_members do |member|
    json.id member.id
    json.name member.full_name
    json.email member.email_address
  end



end
