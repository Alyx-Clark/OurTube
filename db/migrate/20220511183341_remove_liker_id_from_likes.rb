class RemoveLikerIdFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :liker_id
    add_column :likes, :liker_id, :integer
    add_index :likes, :liker_id, unique: true
  end
end
