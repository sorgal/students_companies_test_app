# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_23_194538) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "balance_transactions", force: :cascade do |t|
    t.bigint "monthly_balance_id"
    t.integer "purpose", default: 0
    t.integer "transaction_type", default: 0
    t.decimal "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["monthly_balance_id"], name: "index_balance_transactions_on_monthly_balance_id"
    t.index ["purpose"], name: "index_balance_transactions_on_purpose"
  end

  create_table "companies", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.string "country"
    t.string "currency"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_companies_on_name", unique: true
    t.index ["user_id"], name: "index_companies_on_user_id"
  end

  create_table "monthly_balances", force: :cascade do |t|
    t.bigint "company_id"
    t.decimal "start_balance"
    t.decimal "end_balance"
    t.string "month"
    t.integer "year"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_monthly_balances_on_company_id"
    t.index ["month"], name: "index_monthly_balances_on_month"
    t.index ["year"], name: "index_monthly_balances_on_year"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "first_name"
    t.string "last_name"
    t.string "avatar"
    t.integer "role", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
