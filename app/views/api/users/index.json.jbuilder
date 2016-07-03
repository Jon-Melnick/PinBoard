json.array! @users do |user|
  json.id user.id
  json.email_address user.email_address
  json.first_name user.first_name
  json.last_name user.last_name
  json.full_name user.full_name
  json.preference user.preference
  json.user_pic_url user.user_pic_url
  json.user_initials user.user_initials
end
