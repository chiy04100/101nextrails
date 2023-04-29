class LoginsController < ApplicationController
  before_action :set_login, only: [:show, :update, :destroy]

  # GET /logins
  def index
    @users = User.where(address: params[:address], Phonenumber: params[:Phonenumber])
    if @users.present?
      render json: @users
    else
      render json: { error: 'No users found with the given address and phone number' }, status: :not_found
    end
  end
  # GET /logins/1
  def show
    render json: @users
  end

  # POST /logins
  def create
    user = User.find_by(address: params[:address], Phonenumber: params[:Phonenumber])
    if user
      render json: { userId: user.id }
    else
      render json: { error: 'Invalid address or phone number' }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /logins/1
  def update
    if @login.update(login_params)
      render json: @login
    else
      render json: @login.errors, status: :unprocessable_entity
    end
  end

  # DELETE /logins/1
  def destroy
    @login.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_login
      @login = Login.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def login_params
      params.require(:login).permit(:address, :Phonenumber)
    end
end
