class Api::V1::BandsController < ApplicationController
  before_action :authenticate_user, except: [:index]
  # before_action :authorize_user, except: [:index, :show, :create]

  def index
    render json: Band.all
  end
  
  def show
    current_user = current_user
    band = Band.find(params[:id])
    render json: {band: band, current_user: current_user}
  end

  protected

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end

  def authorize_user
    if !user_signed_in? || !(current_user.role == "admin")
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

end