# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.all.delete_all
Band.all.delete_all

user_1 = User.create(email: "admin@mail.com", password: "password", username: "admin", first_name: "admin", role: "admin")
User.create(email: "user@mail.com", password: "123456", username: "user", first_name: "Coffee", role: "member")

band_1 = Band.create(name: "Mindwalk Blvd", biography: "MINDWALK BLVD is a trio from Boston whose music is a mix of progressive metal and progressive rock.The band members are very young,but are very experienced and talented.16 year old Jordan Ferreira(guitars,vocals)has been recording since the age of 5 and touring and perfomring with his father Jorge Ferreira since the age of 12.Mike Avakian(bass,guitar,keyboards,vocals),also 16,has been playing for 10 years and at 14 started attending classes at the Berklee School of Music.Last but not least is 13 year old drum prodigy Tyler Hudson,who has been playing since the age of 3 and performing since the age of 5,and who is currently studying under Mike Mangini")
band_2 = Band.create(name: "Blindchalk Street", biography: "Justin parody band")

Band.create(name: "Tame Impala", biography: "Trippy Australians")
Band.create(name: "No Doubt", biography: "Gwen Stefani and the Californians")
review_1 = Review.create(rating: 5, body: "Cool songs", user: user_1, band: band_1)