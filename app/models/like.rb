class Like < ApplicationRecord
    validates :video_id, :liker_id, :disliker_id, presence: true
    validates :liker_id, uniqueness: {scope: :video_id}
    validates :disliker_id, uniqueness: {scope: :video_id}

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :disliker,
        primary_key: :id,
        foreign_key: :disliker_id,
        class_name: :User

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video

        
end