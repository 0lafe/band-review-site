class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body
  
  belongs_to :band
  belongs_to :user
end
