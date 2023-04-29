class OrderdetailsController < ApplicationController
  before_action :set_orderdetail, only: [:show, :update, :destroy]

  # GET /orderdetails
  def index
    @orderdetails = Orderdetail.all

    render json: @orderdetails
  end

  # GET /orderdetails/1
  def show
    render json: @orderdetail
  end

  # POST /orderdetails
  def create
    @orderdetail = Orderdetail.new(orderdetail_params)

    if @orderdetail.save
      render json: @orderdetail, status: :created, location: @orderdetail
    else
      render json: @orderdetail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orderdetails/1
  def update
    if @orderdetail.update(orderdetail_params)
      render json: @orderdetail
    else
      render json: @orderdetail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orderdetails/1
  def destroy
    @orderdetail.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_orderdetail
      @orderdetail = Orderdetail.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def orderdetail_params
      params.require(:orderdetail).permit(:orders_id, :items_id, :inventory)
    end
end
