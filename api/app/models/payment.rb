class Payment < ApplicationRecord
  belongs_to :orderdetails
  belongs_to :paymentways
end
