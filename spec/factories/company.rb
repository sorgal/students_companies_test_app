FactoryBot.define do
  factory :company do
    name { Faker::Company.unique.name }
    country { Faker::Address.country }
    currency  { Faker::Currency.code }
    user { create(:user, :student) }
  end
end