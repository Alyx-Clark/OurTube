class ChangeIndexOnDisliker < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :disliker_id
    add_column :likes, :disliker_id, :integer
    remove_column :likes, :liker_id
    add_column :likes, :liker_id, :integer
  end
end
