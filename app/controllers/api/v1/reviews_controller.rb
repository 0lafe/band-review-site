class Api::V1::ReviewsController < ApplicationController

    def new

    end

    def create
        review = Review.new(review_params)
        review.user = current_user
        if review.save
            render json: review
        else
            flash[:errors] = review.errors.full_messages.to_sentence
            render json: review
        end
    end

    private

    def review_params
        params[:review].permit(:rating, :body, :band_id)
    end

end