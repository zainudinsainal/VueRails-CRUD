# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#

require 'faker'

35.times do
  products = Product.create(
    name: Faker::Device.model_name,
    price: Faker::Number.decimal(l_digits: 3, r_digits: 2),
    description: Faker::Quote.famous_last_words
  )
end
