class RemovePicFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :profile_pic
  end
end
