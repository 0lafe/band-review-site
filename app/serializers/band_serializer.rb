class BandSerializer < ActiveModel::Serializer
  attributes :id, :name, :biography
  has_many :reviews
end