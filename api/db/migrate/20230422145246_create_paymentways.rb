class CreatePaymentways < ActiveRecord::Migration[6.0]
  def change
    create_table :paymentways do |t|
      t.string :paymentname

      t.timestamps
    end
  end
end
