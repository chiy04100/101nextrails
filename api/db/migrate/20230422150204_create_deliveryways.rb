class CreateDeliveryways < ActiveRecord::Migration[6.0]
  def change
    create_table :deliveryways do |t|
      t.string :deliveryname

      t.timestamps
    end
  end
end
