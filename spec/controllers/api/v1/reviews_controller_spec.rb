require "rails_helper"

describe Api::V1::ReviewsController, type: :controller do
    let!(:band) { Band.create(name: "test_band", biography: "test_band_time") }
    let!(:user) { User.create(email: "admin@mail.com", password: "password", username: "admin", first_name: "admin")}
    let!(:review) { Review.create(rating: 5, body: "Cool songs", user: user, band: band) }

    describe "GET#create" do
        it "should be able to add a review" do

            sign_in user
            get :create, params: {review: {rating: review.rating, body: review.body, band_id: band.id}}
            returned_json = JSON.parse(response.body)

            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json; charset=utf-8")

            expect(returned_json["review"]["body"]).to eq(review.body)
            expect(returned_json["review"]["user"]["username"]).to eq(user.username)
        end
    end

end