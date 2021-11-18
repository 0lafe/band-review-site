class BandsController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user
  
  def new
    @band = Band.new
  end

  def create
    @band = Band.new(band_params)
    
    if @band.save
      flash[:notification]="Band successfully saved"
      redirect_to root_path
    else
      flash.now[:error]=@band.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    @band = Band.find(params[:id])
  end

  def update
    @band = Band.find(params[:id])

    if @band.update(band_params)
      flash[:notification] = "Band updated"
      redirect_to "/bands/#{params[:id]}"
    else
      flash.now[:error] = @band.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
    @band = Band.find(params[:id])

    if @band.destroy
      flash.now[:notification] = "Band has been deleted"
      redirect_to root_path
    end
    
  end

  private 

  def band_params
    params[:band].permit(:name, :biography, :image)
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end

end