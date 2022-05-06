class ChangeLikesToRemoveNullOnLikesDislikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :likes_count
    remove_column :likes, :dislikes_count
    add_column :likes, :likes_count, :integer
    add_column :likes, :dislikes_count, :integer
  end
end
