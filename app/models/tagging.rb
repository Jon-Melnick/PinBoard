class Tagging < ActiveRecord::Base
  validates :tag_id, :pin_id, presence: true

  belongs_to :pin
  belongs_to :tag

end
