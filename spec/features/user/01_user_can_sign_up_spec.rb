require 'rails_helper'

feature 'user is able to' do

    let!(:test_user) {User.create!(email: "test_user@mail.com", password: "password", username: "test_user_2", first_name: "test")}
    
    scenario 'click sign up' do
        visit "/"

        click_link "Sign Up"

        expect(page).to have_content("Sign up")

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

    scenario 'is unable to sign up with bad info' do
        visit new_user_registration_path

        click_button "Sign up"

        expect(page).to have_content("Username can't be blank")
        expect(page).to have_content("Email can't be blank")
        expect(page).to have_content("Password can't be blank")
        expect(page).to have_content("First name can't be blank")
    end

    scenario 'is unable to use an already existing username' do
        visit new_user_registration_path

        fill_in 'Username', with: test_user.username

        click_button "Sign up"

        expect(page).to have_content("Username has already been taken")
    end

    scenario 'is unable to sign in with duplicate info' do

        visit "/"

        click_link "Sign Up"

        fill_in 'Username' , with: test_user.username
        fill_in 'Password' , with: "password"
        fill_in 'Password confirmation' , with: "password"
        fill_in 'Email' , with: "test@mail.com"
        fill_in 'First name' , with: "New"
        fill_in 'Last name' , with: "User"

        click_button "Sign up"

        expect(page).to have_content("Username has already been taken")
    end

end