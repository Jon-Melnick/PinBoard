class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.integer :creator_id, null: false
      t.string :title, default: 'untitled'
      t.text :description
      t.text :board_style, default: 'http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467679359/corkboard_x2gpyn.jpg'
      t.boolean :hidden, defult: false
      t.timestamps null: false
    end
  end
end
