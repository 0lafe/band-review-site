class CreateBandsAndGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :bands_and_genres do |t|
      t.belongs_to :band, null: false
      t.belongs_to :genre, null: false

      t.timestamps
    end
  end
end
