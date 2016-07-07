# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = {first_name: "Demo",
         last_name: "User",
         password: 'password',
         email_address: "Demo",
         user_initials: 'DU'}

 user2 = {first_name: "Jon",
          last_name: "Melnick",
          password: 'password',
          email_address: "jonmelnick@hotmail.com",
          user_initials: 'JM'}


user3 = {first_name: "Jayson",
         last_name: "Young",
         password: 'password',
         email_address: "JayYoung@fake.com",
         user_initials: 'JY'}

User.create!(user1)
User.create!(user2)
User.create!(user3)
UserPreference.create!(user_id: 1, user_color: 'red')
UserPreference.create!(user_id: 2, user_color: 'blue')
UserPreference.create!(user_id: 3, user_color: 'green')
