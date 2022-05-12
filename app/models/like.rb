class Like < ApplicationRecord
    validates :video_id, presence: true
    validates :liker_id, uniqueness: {scope: :video_id}, presence: true, unless: ->(like) {like.disliker_id.present?}
    validates :disliker_id, uniqueness: {scope: :video_id}, presence: true, unless: ->(like) {like.liker_id.present?}



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