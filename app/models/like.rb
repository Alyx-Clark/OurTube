class Like < ApplicationRecord
    validates :likes_count, :disliked, :video_id, :liker_id, presence: true

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video

        
end