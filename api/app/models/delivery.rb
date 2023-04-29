class Delivery < ApplicationRecord
  belongs_to :orderdetails
  belongs_to :deliveryways
end
