# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  products = Product.create(
    [
      { name: 'Star Wars', price: 300 },
      { name: 'Lord of the Rings', price: 400},
      { name: 'Samsung S10', price: 900},
      { name: 'Iphone 12', price: 1000},
    ]
  )
#   Character.create(name: 'Luke', movie: movies.first)
