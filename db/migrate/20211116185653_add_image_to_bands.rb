class AddImageToBands < ActiveRecord::Migration[6.1]
  def change
    add_column :bands, :image, :string
  end
end
