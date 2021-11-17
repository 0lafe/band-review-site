class Api::V1::ReviewsController < ApplicationController

    def new

    end

    def create
        binding.pry
        review = Review.new(review_params)
        if review.save
            puts "-------------------------- YES! ------------------------"
        else
            puts "-------------------------- NO! ------------------------"
        end
    end

    private

    def review_params
        params[:review].permit(:rating, :body, :band_id)
    end

end