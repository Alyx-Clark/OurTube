class ChangeUniqueOfLikesDislikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :disliker_id
    remove_column :likes, :liker_id
    remove_column :likes, :video_id
    add_column :likes, :video_id, :integer
    add_column :likes, :disliker_id, :integer
    add_column :likes, :liker_id, :integer
    add_index :likes, :disliker_id
    add_index :likes, :liker_id
    add_index :likes, :video_id
  end
end
