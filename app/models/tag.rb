class Tag < ActiveRecord::Base
  validates :tag, presence: true

  has_many :taggings

  has_many :pins,
    through: :taggings,
    source: :pin
end
