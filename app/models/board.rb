class Board < ActiveRecord::Base
  validates :creator_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: 'User'

  has_many :team,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: 'Team'

  has_many :team_members,
    through: :team,
    source: :member

  has_many :pins,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: 'Pin'

  has_many :tags, #method name
    through: :pins,
    source: :tags

  def team_ids
    team_ids = []
    self.team_members.each do |member|
      team_ids << member.id
    end
    return team_ids
  end

  def my_team(id)
    self.team.where(team_member_id: id)
  end
end
