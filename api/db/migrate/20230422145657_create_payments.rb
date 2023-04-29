class CreatePayments < ActiveRecord::Migration[6.0]
  def change
    create_table :payments do |t|
      t.references :orderdetails, null: false, foreign_key: true
      t.references :paymentways, null: false, foreign_key: true

      t.timestamps
    end
  end
end
