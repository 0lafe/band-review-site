class Review < ApplicationRecord
    validates :rating, numericality: { only_integer: true, less_than_or_equal_to: 5, greater_than_or_equal_to: 0 } 
    validates :body, presence: true

    belongs_to :band
    belongs_to :user
end