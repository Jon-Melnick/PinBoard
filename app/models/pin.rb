class Pin < ActiveRecord::Base


  belongs_to :author, #method_name
    primary_key: :id, #typically id
    foreign_key: :user_id, #column_name_id
    class_name: 'User' #class_name ex. (String)

  belongs_to :board, #method_name
    primary_key: :id, #typically id
    foreign_key: :board_id, #column_name_id
    class_name: 'Board' #class_name ex. (String)

  has_many :taggings
  has_many :tags,
      through: :taggings,
      source: :tag

  def date
    self.created_at.strftime("%d %m %Y")
  end

end
