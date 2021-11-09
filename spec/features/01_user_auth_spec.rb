require 'rails_helper'

feature 'user is able to' do

    let!(:test_user) {User.create!(email: "test_user@mail.com", password: "password", username: "test_user_2", first_name: "test")}
    
    scenario 'click sign up' do
        visit "/"

        click_link "Sign Up"
        checks = ["Username", "Password", "Email"]

        checks.each do |check|
            expect(page).to have_content(check)
        end
    end

    scenario 'is able to sign up' do
        visit new_user_registration_path

        fill_in 'Username' , with: "new_user"
        fill_in 'Password' , with: "password"
        fill_in 'Password confirmation' , with: "password"
        fill_in 'Email' , with: "test@mail.com"
        fill_in 'First name' , with: "New"
        fill_in 'Last name' , with: "User"

        click_button "Sign up"

        expect(page).to have_content("signed up successfully")
    end

    scenario 'is able to sign in and out' do

        visit "/"

        click_link "Sign In"

        fill_in 'Email', with: test_user.email
        fill_in 'Password', with: test_user.password

        click_button "Log in"

        expect(page).to have_content("Signed in successfully")

        click_link "Sign Out"

        expect(page).to have_content("Signed out successfully")
        
    end

end