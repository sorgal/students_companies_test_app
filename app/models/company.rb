# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :monthly_balances, dependent: :destroy

  belongs_to :user

  validates :name, :country, :currency, :user_id, presence: true
  validates :name, uniqueness: true

  validate :user_is_student

  def cash_management_table(for_year = Date.current.year)
    monthly_balances.includes(:balance_transactions).where(year: for_year).map { |balance| [balance.month, balance.table_data] }.to_h
  end

  private

  def user_is_student
    errors.add(:user_id, :user_is_not_student) unless user.student?
  end
end
