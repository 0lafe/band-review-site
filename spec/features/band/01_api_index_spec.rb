require 'rails_helper'

feature 'api is able to' do
  let!(:band) {Band.create!(name: "Test Band", biography: "Test Band's Info")} 
  
  scenario 'render data' do
    visit api_v1_bands_path

    expect(page).to have_content(band.name)
    expect(page).to have_content(band.biography)
  end

end