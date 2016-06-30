class User < ActiveRecord::Base
  validates :email_address, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true
  validates :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  attr_reader :password

  # extend Dragonfly::Model
  # include Avatarable

  # dragonfly_accessor :photo

  # def avatar
  #   image = Dragonfly.app.generate(:initial_avatar, avatar_text)
  # end

  # has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  # validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  attr_accessor :avatar

  mount_uploader :avatar, AvatarUploader

  def avatar_text
    first_name.chr
  end

  def full_name
    if first_name && last_name
      return first_name + ' ' + last_name
    end
  end

  def self.find_by_credentials(email_address, password)
    user = User.find_by(email_address: email_address)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
