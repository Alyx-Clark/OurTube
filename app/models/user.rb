require 'bcrypt'

class User < ApplicationRecord

    attr_reader :password

    validates :user_name, :password_digest, :session_token, :email, :first_name, :last_name, presence: true
    validates :user_name, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_one_attached :profile_pic

    after_initialize :ensure_session_token

    has_many :uploads,
        foreign_key: :uploader_id,
        class_name: :Video

    has_many :comments,
        foreign_key: :commenter_id,
        class_name: :Comment

    # has_many :liked_videos,
    #     through: :likes,
    #     source: :videos

    def self.find_by_credentials(user_name, password)
        user = User.find_by(user_name: user_name)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
        self.session_token = new_session_token
        end
        self.session_token
    end

end
