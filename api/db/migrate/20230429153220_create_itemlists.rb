class CreateItemlists < ActiveRecord::Migration[6.0]
  def change
    create_table :itemlists do |t|
      t.string :itemname
      t.string :itemdescription
      t.integer :price
      t.integer :inventory
      t.string :image
      t.references :categories, null: false, foreign_key: true

      t.timestamps
    end
  end
end
