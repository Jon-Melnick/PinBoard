class Comment < ActiveRecord::Base
  validates :body, :user_id, :pin_id, presence: true

  belongs_to :pin
  belongs_to :user
end
