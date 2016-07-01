class Team < ActiveRecord::Base
  belongs_to :member, #method_name, ends with s
    primary_key: :id, #typically id
    foreign_key: :team_member_id, #column_name_id
    class_name: 'User' #class_name ex. (String)

  belongs_to :board, #method_name
    primary_key: :id, #typically id
    foreign_key: :board_id, #column_name_id
    class_name: 'Board' #class_name ex. (String)
end
