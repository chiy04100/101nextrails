class CartdetailsController < ApplicationController
  before_action :set_cartdetail, only: [:show, :update, :destroy]

  # GET /cartdetails
  def index
    @cartdetails = Cartdetail.all

    render json: @cartdetails
  end

  # GET /cartdetails/1
  def show
    render json: @cartdetail
  end

  # POST /cartdetails
  def create
    @cartdetail = Cartdetail.new(cartdetail_params)

    if @cartdetail.save
      render json: @cartdetail, status: :created, location: @cartdetail
    else
      render json: @cartdetail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cartdetails/1
  def update
    if @cartdetail.update(cartdetail_params)
      render json: @cartdetail
    else
      render json: @cartdetail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cartdetails/1
  def destroy
    @cartdetail.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cartdetail
      @cartdetail = Cartdetail.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def cartdetail_params
      params.require(:cartdetail).permit(:carts_id, :users_id)
    end
end
