class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :video_id, null: false
      t.integer :likes_count, null: false
      t.boolean :disliked, null: false

      t.timestamps
    end

    add_index :likes, :liker_id, unique: true
    add_index :likes, :video_id, unique: true
  end
end
