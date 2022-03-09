class ChangeConstraintsForComments < ActiveRecord::Migration[5.2]
  def change
    reversible do |dir|
      dir.up do
        remove_index :comments, :commenter_id
        add_index :comments, :commenter_id
        remove_index :comments, :video_id
        add_index :comments, :video_id
      end

      dir.down do
        remove_index :comments, :commenter_id
        add_index :comments, :commenter_id, unique: true
        remove_index :comments, :video_id
        add_index :comments, :video_id, unique: true
      end
    end
  end
end
