class AddDislikerIdToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :disliker_id, :integer, null: false
  end
end
