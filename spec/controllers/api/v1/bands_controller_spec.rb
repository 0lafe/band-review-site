require "rails_helper"

describe Api::V1::BandsController, type: :controller do
    let!(:band) { Band.create(name: "test_band", biography: "test_band_time") }
    let!(:user) { User.create(email: "admin@mail.com", password: "password", username: "admin", first_name: "admin")}
    let!(:review) { Review.create(rating: 5, body: "Cool songs", user: user, band: band) }

    describe "GET#index" do
        it "should return all bands" do
            get :index
            returned_json = JSON.parse(response.body)
    
            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json; charset=utf-8")

            expect(returned_json["bands"].length).to eq(1)
            expect(returned_json["bands"].first["name"]).to eq(band.name)
        end
    end

    describe "GET#show" do
        it "should return one band" do
            get :show, params: {id: band.id}
            returned_json = JSON.parse(response.body)

            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json; charset=utf-8")

            expect(returned_json["band"]["name"]).to eq(band.name)
        end

        it "should also return reviews for that band" do
            get :show, params: {id: band.id}
            returned_json = JSON.parse(response.body)

            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json; charset=utf-8")

            expect(returned_json["band"]["reviews"].first["rating"]).to eq(review.rating)
            expect(returned_json["band"]["reviews"].first["body"]).to eq(review.body)

            expect(returned_json["band"]["reviews"].first["user"]["username"]).to eq(user.username)
        end
    end
end