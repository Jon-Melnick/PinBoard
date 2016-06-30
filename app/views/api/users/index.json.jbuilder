json.array! @users do |user|
  json.id user.id
  json.email_address user.email_address
  json.first_name user.first_name
  json.last_name user.last_name
  json.full_name user.full_name
  json.avatar_text user.avatar_text
  json.avatar user.avatar
end
