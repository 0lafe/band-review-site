class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :body, null: false

      t.belongs_to :band, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
