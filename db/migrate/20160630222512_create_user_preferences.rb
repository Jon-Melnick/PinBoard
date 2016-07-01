class CreateUserPreferences < ActiveRecord::Migration
  def change
    create_table :user_preferences do |t|
      t.integer :user_id, null: false, index: true, unique: true
      t.string :color
      
      t.timestamps null: false
    end
  end
end
