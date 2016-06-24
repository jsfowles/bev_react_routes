30.times do |number|
  Beer.create(name: Faker::Beer.name,
              description: Faker::Lorem.paragraph(2),
              style: Faker::Beer.style,
              alcohol_content: Faker::Beer.alcohol)
end

puts "Beers Seeded"
