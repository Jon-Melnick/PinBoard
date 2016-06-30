module Api::UsersHelper
  def user_avatar(user, options = {})
    if user.photo.nil?
      image_tag user.avatar_url, options
    else
      image_tag user.photo.thumb('150x150#').url, options
    end
  end
end
