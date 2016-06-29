class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.integer :team_member_id, null: false
      t.integer :board_id, null: false

      t.timestamps null: false
    end
    add_index :teams, :team_member_id
    add_index :teams, :board_id
  end
end
