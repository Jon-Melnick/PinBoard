class Taggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :pin_id, null: false
    end
    add_index :taggings, :pin_id
    add_index :taggings, :tag_id
  end
end
