class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :pin_id, null: false
      t.string :comment, null: false

      t.timestamps null:false
    end

    add_index :comments, :user_id
    add_index :comments, :pin_id
  end
end
