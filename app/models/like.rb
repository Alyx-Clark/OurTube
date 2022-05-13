class Like < ApplicationRecord
    validates :video_id, presence: true
    #validates :disliker_id, :liker_id, presence: true
    validates :liker_id, uniqueness: {scope: :video_id}, presence: true, unless: ->(like) {like.disliker_id.present?}
    validates :disliker_id, uniqueness: {scope: :video_id}, presence: true, unless: ->(like) {like.liker_id.present?}

    validate :not_both

    def not_both 
        return if liker_id.blank? ^ disliker_id.blank?

        errors.add(:base, 'Cant have dislike and like')
    end



    belongs_to :liker, 
        optional: true,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :disliker,
        optional: true,
        primary_key: :id,
        foreign_key: :disliker_id,
        class_name: :User

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video

        
end