class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name
  has_many :reviews
end
