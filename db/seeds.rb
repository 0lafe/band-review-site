# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.all.delete_all
Band.all.delete_all

User.create(email: "admin@mail.com", password: "password", username: "admin", first_name: "admin")

Band.create(name: "Mindwalk Blvd", biography: "An amazing band Justin knows")
Band.create(name: "Blindchalk Street", biography: "Justin parody band")
Band.create(name: "Tame Impala", biography: "Trippy Australians")
Band.create(name: "No Doubt", biography: "Gwen Stefani and the Californians")