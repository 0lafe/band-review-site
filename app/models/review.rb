class Review < ApplicationRecord
  validates :rating, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :body, presence: true

  belongs_to :band
  belongs_to :user
end