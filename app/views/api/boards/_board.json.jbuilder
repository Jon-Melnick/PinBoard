json.extract! board, :id, :title, :description, :creator_id

json.team_members board.team_members do |member|
  json.id member.id
  json.name member.full_name
  json.email member.email_address
end
