class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.integer :user_id, null: false, index: true
      t.integer :board_id, null: false, index: true
      t.string :title
      t.text :body
      t.text :pin_color
      t.text :note_color
      t.text :img_url
      t.integer :posX, :default => 100
      t.integer :posY, :default => 100
      t.integer :zIndex, :default => 5

      t.timestamps null: false
    end
  end
end
