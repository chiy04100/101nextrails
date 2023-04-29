Rails.application.routes.draw do
  resources :items
  resources :logins
  resources :deliveries
  resources :deliveryways
  resources :payments
  resources :paymentways
  resources :itemlists
  resources :categories
  resources :orderdetails
  resources :items 
  resources :cartdetails
  resources :carts
  resources :orders
  resources :users
  resources :posts
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
