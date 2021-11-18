# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.all.delete_all
Band.all.delete_all

User.create(email: "admin@mail.com", password: "password", username: "admin", first_name: "admin", role: "admin")
User.create(email: "user@mail.com", password: "123456", username: "user", first_name: "Coffee", role: "member")

Band.create(name: "Mindwalk Blvd", biography: "An amazing band Justin knows", image: "https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/67282383_2306184666095267_3885220926266015744_n.png?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=mPbyGcNVBBsAX8ONX2O&_nc_ht=scontent-bos3-1.xx&oh=31a886547571928dccee43d1be9383f7&oe=61BAA6C6")
Band.create(name: "Blindchalk Street", biography: "Justin parody band")
Band.create(name: "Tame Impala", biography: "Trippy Australians")
Band.create(name: "No Doubt", biography: "Gwen Stefani and the Californians")