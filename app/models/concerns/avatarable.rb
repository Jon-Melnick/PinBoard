module Avatarable
  extend ActiveSupport::Concern

  AVATAR_COLORS = [ 'e53935', 'b71c1c', 'd81b60', '880e4f', '8e24aa', '4a148c',
    '5e35b1', '311b92', '3949ab', '1a237e', '1e88e5', '0d47a1', '039be5', '01579b',
    '00acc1', '006064', '00897b', '004d40', '43a047', '1b5e20', '7cb342', '33691e',
    'c0ca33', '827717', 'fdd835', 'f57f17', 'ffb300', 'ff6f00', 'fb8c00', 'e65100',
    'f4511e', 'bf360c', '6d4c41', '3e2723', '757575', '212121', '546e7a', '263238' ]

  included do
    delegate :url_helpers, to: 'Rails.application.routes'
  end

  def avatar_url
    url_helpers.send(:avatar_path, avatar_size, avatar_color, avatar_text)
  end

  def avatar_size
    150
  end

  def avatar_param
    to_param
  end

  def avatar_text
    raise NotImplementedError, "must implement avatar_text"
  end

  def avatar_color
    AVATAR_COLORS[ Zlib.crc32( avatar_param ).modulo( AVATAR_COLORS.length ) ]
  end
end
