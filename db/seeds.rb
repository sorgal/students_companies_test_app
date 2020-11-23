# frozen_string_literal: true

# Create users
if User.teacher.none?
  User.create(email: 'default_teacher@gmail.com',
              password: 'password',
              password_confirmation: 'password',
              first_name: Faker::Name.first_name,
              last_name: Faker::Name.last_name,
              role: :teacher)
end
if User.student.none?
  User.create(email: 'default_student@gmail.com',
              password: 'password',
              password_confirmation: 'password',
              first_name: Faker::Name.first_name,
              last_name: Faker::Name.last_name,
              role: :student)
end

# Create companies

student = User.student.last
if student.companies.none?
  rand(1..5).times do |_i|
    student.companies.create(name: Faker::Company.unique.name, country: Faker::Address.country, currency: Faker::Currency.code)
  end
end

# Create balance changes

year = Date.current.year
start_balance = 100
company = student.companies.first
monthly_balance = company.monthly_balances.first

Date::MONTHNAMES[1..Date.current.month].each do |month|
  mounthly_start_balance = monthly_balance&.end_balance || start_balance
  transactions = []
  mounthly_end_balance = mounthly_start_balance
  rand(1..20).times do |_i|
    amount = rand(1..10)
    transaction_type = rand(0..1)
    mounthly_end_balance += transaction_type == 1 ? - amount : amount
    purpose = [(transaction_type == 1 ? BalanceTransaction::OUT_PURPOSES.sample : BalanceTransaction::IN_PURPOSES.sample), :other].sample
    transactions << { purpose: purpose, amount: amount, transaction_type: transaction_type }
  end
  monthly_balance = company.monthly_balances.build(start_balance: mounthly_start_balance,
                                                   end_balance: mounthly_end_balance,
                                                   month: month,
                                                   year: year,
                                                   balance_transactions_attributes: transactions)
  monthly_balance.save!
end
