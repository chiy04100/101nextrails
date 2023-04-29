class Category < ApplicationRecord
    validates :categoryname, uniqueness: true, presence: true
    has_many :itemlists
end