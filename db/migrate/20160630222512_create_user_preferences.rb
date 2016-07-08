class CreateUserPreferences < ActiveRecord::Migration
  def change
    create_table :user_preferences do |t|
      t.integer :user_id, null: false, index: true, unique: true
      t.string :user_color
      t.string :home_board, default: 'http://res.cloudinary.com/arkean/image/upload/v1467679359/corkboard_x2gpyn.jpg'

      t.timestamps null: false
    end
  end
end
