class CreateOrderdetails < ActiveRecord::Migration[6.0]
  def change
    create_table :orderdetails do |t|
      t.references :orders, null: false, foreign_key: true
      t.references :items, null: false, foreign_key: true
      t.integer :inventory

      t.timestamps
    end
  end
end
