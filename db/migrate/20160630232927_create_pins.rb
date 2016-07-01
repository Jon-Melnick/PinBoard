class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.integer :user_id, null: false, index: true
      t.integer :board_id, null: false, index: true
      t.string :title
      t.text :body
      t.integer :posX, :default => 100
      t.integer :posY, :default => 100
      t.integer :zIndex, :default => 1

      t.timestamps null: false
    end
  end
end
