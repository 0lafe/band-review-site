class CreateBands < ActiveRecord::Migration[6.1]
  def change
    create_table :bands do |t|
      t.string :name, null: false
      t.string :genre, null: false
      t.text :biography
      t.string :image, default: "https://swimg.com/wp-content/uploads/not-available.jpg"

      t.timestamps null: false
    end
  end
end
