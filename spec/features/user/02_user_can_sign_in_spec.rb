require 'rails_helper'

feature "user" do

    let!(:test_user) {User.create!(email: "test_user@mail.com", password: "password", username: "test_user_2", first_name: "test")}

    scenario 'is able to sign in with the right info' do

        visit "/"

        click_link "Sign In"

        fill_in 'Email', with: test_user.email
        fill_in 'Password', with: test_user.password

        click_button "Log in"

        expect(page).to have_content("Signed in successfully")

        
        
    end

    scenario 'is unable to sign in with the wrong info' do

        visit "/"

        click_link "Sign In"

        click_button "Log in"

        expect(page).to have_content("Invalid Email or password.")
    end

end