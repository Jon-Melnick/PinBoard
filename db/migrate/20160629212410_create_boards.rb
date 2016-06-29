class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.integer :creator_id, null: false
      t.string :title, default: 'untitled'
      t.text :description
      t.timestamps null: false
    end
    add_index :boards, :creator_id, unique: true
  end
end
