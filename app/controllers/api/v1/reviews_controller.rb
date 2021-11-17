class Api::V1::ReviewsController < ApplicationController
  
  def create
    review = Review.new(review_params)
    binding.pry
    
  end

  private

  def review_params
    params[:review].permit(:rating, :body)
  end

end