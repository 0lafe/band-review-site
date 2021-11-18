class BandSerializer < ActiveModel::Serializer
  attributes :id, :name, :biography, :image
  has_many :reviews
end