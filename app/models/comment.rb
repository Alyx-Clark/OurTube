class Comment < ApplicationRecord

    validates :body, :commenter_id, :video_id, presence: true

    # belongs_to :video,
    #     primary_key: id,
    #     foreign_key: :video_id,
    #     class_name: :Video

    belongs_to :commenter,
        primary_key: :id,
        foreign_key: :commenter_id,
        class_name: :User

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video

end
