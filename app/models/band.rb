class Band < ApplicationRecord
    validates :name, presence: true

    has_many :reviews
       
    mount_uploader :image, BandProfilePhotoUploader
end