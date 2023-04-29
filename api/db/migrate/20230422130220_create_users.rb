class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :familyname
      t.string :name
      t.string :postalcode
      t.string :address
      t.string :Phonenumber

      t.timestamps
    end
  end
end
