class UserPreference < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: true

  belongs_to :user, #method_name
    primary_key: :id, #typically id
    foreign_key: :user_id, #column_name_id
    class_name: 'User' #class_name ex. (String)

  COLORS = ['black', 'blue', 'red', 'orange', 'yellow', 'green', 'gray', 'purple']

  def UserPreference.color
    COLORS.sample
  end



end
