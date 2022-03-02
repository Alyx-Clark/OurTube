class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description
      t.integer :length
      t.integer :user_id, foreign_key: true, null: false

      t.timestamps
    end
    add_index :videos, :title
    add_index :videos, :user_id
  end
end
