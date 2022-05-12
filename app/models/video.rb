class Video < ApplicationRecord

    validates :title, :uploader_id, presence: true

    has_one_attached :uploaded_video
    has_one_attached :uploaded_thumbnail

    belongs_to :user,
        foreign_key: :uploader_id,
        class_name: :User

    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment

    has_many :commenters,
        through: :comments,
        source: :commenter

    has_many :likes,
        foreign_key: :video_id,
        class_name: :Like

    has_many :dislikes,
        foreign_key: :video_id,
        class_name: :Like

    has_many :likers,
        through: :likes,
        source: :liker

    has_many :dislikers,
        through: :likes,
        source: :disliker


        

end
