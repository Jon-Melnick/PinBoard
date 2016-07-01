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
         email_address: "Demo"}

 user2 = {first_name: "Jon",
          last_name: "Melnick",
          password: 'password',
          email_address: "jonmelnick@hotmail.com"}

user3 = {first_name: "Jayson",
         last_name: "Young",
         password: 'password',
         email_address: "JayYoung@fake.com"}

User.create!(user1)
User.create!(user2)
User.create!(user3)
