class CreateDeliveries < ActiveRecord::Migration[6.0]
  def change
    create_table :deliveries do |t|
      t.references :orderdetails, null: false, foreign_key: true
      t.references :deliveryways, null: false, foreign_key: true
      t.string :deliveryaddress
      t.string :deliverystatus

      t.timestamps
    end
  end
end
