class Api::BeersController < ApplicationController
  before_action :beer, except: :index

  def index
    render json: Beer.all
  end

  def show
    render json: @beer
  end

  def destroy
    @beer.destroy
    render json: true
  end

  private
  def beer
    @beer = Beer.find_by(id: params[:id])
  end
end
