class AddIndexToDislikerId < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, :disliker_id
  end
end
