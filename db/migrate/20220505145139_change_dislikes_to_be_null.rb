class ChangeDislikesToBeNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :likes, :dislikes_count, false
  end
end
