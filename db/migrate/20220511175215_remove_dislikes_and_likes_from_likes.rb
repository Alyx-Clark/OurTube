class RemoveDislikesAndLikesFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :likes_count, :integer
    remove_column :likes, :dislikes_count, :integer
  end
end
