class Band < ApplicationRecord
    validates :name, presence: true

    mount_uploader :image, BandProfilePhotoUploader
end