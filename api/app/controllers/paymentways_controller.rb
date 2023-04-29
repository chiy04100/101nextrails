class PaymentwaysController < ApplicationController
  before_action :set_paymentway, only: [:show, :update, :destroy]

  # GET /paymentways
  def index
    @paymentways = Paymentway.all

    render json: @paymentways
  end

  # GET /paymentways/1
  def show
    render json: @paymentway
  end

  # POST /paymentways
  def create
    @paymentway = Paymentway.new(paymentway_params)

    if @paymentway.save
      render json: @paymentway, status: :created, location: @paymentway
    else
      render json: @paymentway.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /paymentways/1
  def update
    if @paymentway.update(paymentway_params)
      render json: @paymentway
    else
      render json: @paymentway.errors, status: :unprocessable_entity
    end
  end

  # DELETE /paymentways/1
  def destroy
    @paymentway.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_paymentway
      @paymentway = Paymentway.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def paymentway_params
      params.require(:paymentway).permit(:paymentname)
    end
end
