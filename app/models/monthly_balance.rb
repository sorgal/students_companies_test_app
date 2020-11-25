# frozen_string_literal: true

class MonthlyBalance < ApplicationRecord
  FOLLOWING_YEARS_COUNT = 2

  has_many :balance_transactions, dependent: :destroy, inverse_of: :monthly_balance

  belongs_to :company

  validates :start_balance, :end_balance, :year, presence: true
  validates :month, uniqueness: { scope: :year }

  validate :year_is_wrong, unless: proc { |record| (year..2020 + FOLLOWING_YEARS_COUNT).include?(record.year) }
  validate :month_is_wrong, unless: proc { |record| Date::MONTHNAMES.compact.include?(record.month) }
  validate :start_balance_is_not_equal_to_previous_end
  validate :transactions_are_invalid

  accepts_nested_attributes_for :balance_transactions

  def table_data
    transactions = balance_transactions.to_a
    {
      cash_initial: start_balance,
      cash_end: end_balance,
      cash_in: transactions.select(&:in?).map(&:amount).inject(0, &:+),
      cash_out: transactions.select(&:out?).map(&:amount).inject(0, &:+),
      other_in_payments: transactions.select { |transaction| transaction.other? && transaction.in? }.map(&:amount).inject(0, &:+),
      other_out_payments: transactions.select { |transaction| transaction.other? && transaction.out? }.map(&:amount).inject(0, &:+)
    }.merge(purposes_payments)
  end

  private

  def purposes_payments
    BalanceTransaction.purposes.keys.map do |purpose|
      [purpose.to_sym, transactions.select { |transaction| transaction.public_send("#{purpose}?") }
                                   .map(&:amount)
                                   .inject(0, &:+)]
    end.to_h
  end

  def year_is_wrong
    errors.add(:year, 'Wrong year')
  end

  def month_is_wrong
    errors.add(:month, 'Wrong month')
  end

  def start_balance_is_not_equal_to_previous_end
    return if prev_month_last_is_equal_to_current_start
    errors.add(:start_balance, 'Wrong balance')
  end

  def transactions_are_invalid
    return if transactions_sum_are_valid
    errors.add(:base, 'Transactions sum is not valid')
  end

  def prev_month_last_is_equal_to_current_start
    index = Date::MONTHNAMES.find_index(month)
    previous_year = year
    if index.zero?
      index = 12
      previous_year -= 1
    end
    previous_month = Date::MONTHNAMES[index]
    previous_balance = self.class.find_by(year: previous_year, month: previous_month)&.end_balance
    return true if previous_balance.blank?

    previous_balance == start_balance
  end

  def transactions_sum_are_valid
    in_sum = balance_transactions.select(&:in?).map(&:amount).inject(0, &:+)
    out_sum = balance_transactions.select(&:out?).map(&:amount).inject(0, &:+)
    (start_balance + in_sum - out_sum) == end_balance
  end
end
