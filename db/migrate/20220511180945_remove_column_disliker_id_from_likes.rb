class RemoveColumnDislikerIdFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :disliker_id
    add_column :likes, :disliker_id, :integer
    add_index :likes, :disliker_id, unique: true
  end
end
