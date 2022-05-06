class ChangeDislikesToBeInt < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :disliked
    add_column :likes, :dislikes_count, :integer
  end
end
