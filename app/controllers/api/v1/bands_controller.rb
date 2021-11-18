class Api::V1::BandsController < ApplicationController
  def index
    render json: Band.all
  end
  
  def show
    render json: Band.find(params[:id])
  end
end