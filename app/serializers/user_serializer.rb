class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :role
  has_many :reviews
end
