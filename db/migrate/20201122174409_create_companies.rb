# frozen_string_literal: true

class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.references :user, index: true
      t.string :name
      t.string :country
      t.string :currency
      t.timestamps
    end
    add_index :companies, :name, unique: true
  end
end
