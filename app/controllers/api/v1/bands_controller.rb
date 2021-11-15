class Api::V1::BandsController < ApplicationController

  def index
    render json: Band.all
  end
  
end