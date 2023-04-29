class Item < ApplicationRecord
    validates :itemname, presence: true
    validates :itemdescription, presence: true
    validates :price, presence: true
    validates :inventory, presence: true
    validates :image, presence: true
    validates :categories, presence: true
   
 
 
    def self.create_from_form_data(form_data)
        items = new(form_data)
   
        if @item.save
          items
        else
          nil
        end
    end
   
    def self.delete_item(id)
      item = find(id)
      item.destroy
    end
 end
 
 
 
 