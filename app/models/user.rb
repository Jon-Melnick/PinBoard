class User < ActiveRecord::Base
  validates :email_address, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :first_name, :last_name, presence: true
  validates :session_token, presence: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_one :preference,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'UserPreference'

  has_many :team_boards,
    primary_key: :id,
    foreign_key: :team_member_id,
    class_name: 'Team'

  has_many :boards,
    through: :team_boards,
    source: :board

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
