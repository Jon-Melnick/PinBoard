class Board < ActiveRecord::Base
  validates :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: 'User'

  # has_many :team_members

end
