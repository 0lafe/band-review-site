class Api::V1::ReviewsController < ApplicationController
    def create
        review = Review.new(review_params)
        review.user = current_user
        if review.save
            render json: review
        else
            render json: {errors: review.errors.full_messages.to_sentence}
        end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body, :band_id)
    end
end