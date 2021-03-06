require "rails_helper"

feature "band photo" do
  let!(:test_user) {User.create!(email: "test_user@mail.com", password: "password", username: "test_user_2", first_name: "test", role: "admin")}
  scenario "user uploads a band profile photo" do
    login_as(test_user)

    visit new_band_path

    fill_in "Band Name", with: "Flamey-Os"
    fill_in "Biography", with: "Hot-trots for Hotman"
    attach_file :band_image, "#{Rails.root}/spec/support/images/test_image.jpg"
    click_button "Add Local Band"

    expect(page).to have_content("Band successfully saved")
    expect(Band.last.image.url).to eq("/uploads/band/image/#{Band.last.id}/test_image.jpg")
  end
end