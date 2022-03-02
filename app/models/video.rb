class Video < ApplicationRecord

    validates :title, :uploader_id, presence: true

    belongs_to :user,
        foreign_key: :uploader_id,
        class_name: :User

    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment

end
