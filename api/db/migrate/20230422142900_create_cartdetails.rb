class CreateCartdetails < ActiveRecord::Migration[6.0]
  def change
    create_table :cartdetails do |t|
      t.references :carts, null: false, foreign_key: true
      t.references :items, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
