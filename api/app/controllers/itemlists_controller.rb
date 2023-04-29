class ItemlistsController < ApplicationController
  before_action :set_itemlist, only: [:show, :update, :destroy]

  # GET /itemlists
  def index
    @itemlists = Itemlist.all

    render json: @itemlists
  end

  # GET /itemlists/1
  def show
    render json: @itemlists
  end

  # POST /itemlists
  def create
    @itemlists = Itemlist.new(itemlist_params)

    if @itemlists.save
      render json: @itemlists, status: :created, location: @itemlists
    else
      render json: @itemlists.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /itemlists/1
  def update
    if @itemlists.update(itemlist_params)
      render json: @itemlist
    else
      render json: @itemlists.errors, status: :unprocessable_entity
    end
  end

  # DELETE /itemlists/1
  def destroy
    @itemlist.destroy

    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_itemlist
      @itemlists = Itemlist.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def itemlist_params
      params.require(:itemlist).permit(:itemname, :itemdescription, :price, :inventory, :categories, :image )
    end
end
