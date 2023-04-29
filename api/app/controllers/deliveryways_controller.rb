class DeliverywaysController < ApplicationController
  before_action :set_deliveryway, only: [:show, :update, :destroy]

  # GET /deliveryways
  def index
    @deliveryways = Deliveryway.all

    render json: @deliveryways
  end

  # GET /deliveryways/1
  def show
    render json: @deliveryway
  end

  # POST /deliveryways
  def create
    @deliveryway = Deliveryway.new(deliveryway_params)

    if @deliveryway.save
      render json: @deliveryway, status: :created, location: @deliveryway
    else
      render json: @deliveryway.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /deliveryways/1
  def update
    if @deliveryway.update(deliveryway_params)
      render json: @deliveryway
    else
      render json: @deliveryway.errors, status: :unprocessable_entity
    end
  end

  # DELETE /deliveryways/1
  def destroy
    @deliveryway.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_deliveryway
      @deliveryway = Deliveryway.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def deliveryway_params
      params.require(:deliveryway).permit(:deliveryname)
    end
end
