class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :email_address, null: false
      t.string :user_pic_url
      t.string :user_initials

      t.timestamps null: false
    end
    add_index :users, :email_address, unique: true
    add_index :users, :session_token, unique: true
  end
end
