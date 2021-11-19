class BandSerializer < ActiveModel::Serializer
  attributes :id, :name, :biography, :image, :reviews
  has_many :reviews
end