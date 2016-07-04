class Board < ActiveRecord::Base
  validates :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: 'User'

  has_many :team, #method_name, ends with s
    primary_key: :id, #typically id
    foreign_key: :board_id, #column_name_id
    class_name: 'Team' #class_name ex. (String)

  has_many :team_members, #method name
    through: :team,
    source: :member

  def team_ids
    team_ids = []
    self.team_members.each do |member|
      team_ids << member.id
    end
    return team_ids
  end
end
