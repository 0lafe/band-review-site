require "rails_helper"

describe Api::V1::BandsController, type: :controller do
    let!(:band) { Band.create(name: "test_band", biography: "test_band_time") }

    describe "GET#index" do
        it "should return all bands" do

            get :index
            returned_json = JSON.parse(response.body)
    
            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json; charset=utf-8")

            expect(returned_json.length).to eq(1)
            expect(returned_json.first["name"]).to eq(band.name)
        end
    end

    describe "GET#show" do
        it "should return one band" do

            get :show, params: {id: band.id}
            returned_json = JSON.parse(response.body)

            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json; charset=utf-8")

            expect(returned_json["name"]).to eq(band.name)
        end
    end

end