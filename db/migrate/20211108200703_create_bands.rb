class CreateBands < ActiveRecord::Migration[6.1]
  def change
    create_table :bands do |t|

      t.string :name, null: false
      t.text :bio
      t.string :location
      t.string :soundcloud

      t.timestamps
    end
  end
end