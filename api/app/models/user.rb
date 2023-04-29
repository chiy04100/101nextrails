class User < ApplicationRecord
    validates :address, uniqueness: true, presence: true
end
