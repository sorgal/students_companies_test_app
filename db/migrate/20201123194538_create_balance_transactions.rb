# frozen_string_literal: true

class CreateBalanceTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :balance_transactions do |t|
      t.references :monthly_balance, index: true
      t.integer :purpose, index: true, default: 0
      t.integer :transaction_type, default: 0
      t.decimal :amount
      t.timestamps
    end
  end
end
