class Tags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :tag, null: false, index: true, unique: true
    end
  end
end
