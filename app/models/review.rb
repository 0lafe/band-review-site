class Review < ApplicationRecord
  validates :rating, presence: true
  validates :body, presence: true

  belongs_to :band
  belongs_to :user

  validates :user_id, presence: true
  validates :band_id, presence: true
end