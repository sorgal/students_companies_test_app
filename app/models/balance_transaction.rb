# frozen_string_literal: true

class BalanceTransaction < ApplicationRecord
  IN_PURPOSES = %w[revenues equity convertible_note bank_debt].freeze
  OUT_PURPOSES = %w[cogs employees services other_operating_exepenses investments].freeze

  enum transaction_type: { in: 0, out: 1 }
  enum purpose: { other: 0,
                  revenues: 1,
                  equity: 2,
                  convertible_note: 3,
                  bank_debt: 4,
                  cogs: 5,
                  employees: 6,
                  services: 7,
                  other_operating_exepenses: 8,
                  investments: 9 }

  belongs_to :monthly_balance, inverse_of: :balance_transactions

  validates :amount, :purpose, :monthly_balance, presence: true

  validate :purpose_is_wrong, unless: :purpose_is_matched_to_type

  private

  def purpose_is_wrong
    errors.add(:purpose, 'Wrong purpose')
  end

  def purpose_is_matched_to_type
    other? || (in? && IN_PURPOSES.include?(purpose)) || (out? && OUT_PURPOSES.include?(purpose))
  end
end
