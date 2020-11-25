# frozen_string_literal: true

class CreateMonthlyBalances < ActiveRecord::Migration[6.0]
  def change
    create_table :monthly_balances do |t|
      t.references :company, index: true
      t.decimal :start_balance
      t.decimal :end_balance
      t.string :month, index: true
      t.integer :year, index: true
      t.timestamps
    end
  end
end
