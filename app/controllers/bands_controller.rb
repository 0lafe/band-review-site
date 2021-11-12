class BandsController < ApplicationController
  def new
    @band = Band.new
  end

  def create
    @band = Band.new(band_params)
    
    if @band.save
      redirect_to root_path
    else
      flash.now[:error]=@band.errors.full_messages.to_sentence
      render :new
    end
  end

  private 

  def band_params
    params[:band].permit(:name, :biography)
  end
end