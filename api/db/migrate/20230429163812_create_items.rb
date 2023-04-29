class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :itemname
      t.string :itemdescription
      t.integer :price
      t.integer :inventory
      t.string :image
      t.integer :categories

      t.timestamps
    end
  end
end
