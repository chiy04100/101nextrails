# app/controllers/users_controller.rb

class UsersController < ApplicationController
  def index
    @users = User.where(address: params[:address], phone_number: params[:Phonenumber])
    render json: @users
  end
end
