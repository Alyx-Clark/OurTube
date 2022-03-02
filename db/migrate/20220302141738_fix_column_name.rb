class FixColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :videos, :user_id, :uploader_id
    rename_column :comments, :user_id, :commenter_id
  end
end
