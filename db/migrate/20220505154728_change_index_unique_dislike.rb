class ChangeIndexUniqueDislike < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :disliker_id
    add_index :likes, :disliker_id, unique: true
  end
end
