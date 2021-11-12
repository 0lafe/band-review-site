require 'rails_helper'

feature "visitor sees a list of bands" do
    let!(:test_band) {Band.create!(name: "One", biography: "The first band name that came to mind")}
    scenario "sees a list of bands" do 
        visit root_path
        save_and_open_page  
        expect(page).to have_content("One")
        expect(page).to have_link("One")
    end 
end