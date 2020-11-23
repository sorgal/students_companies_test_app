# frozen_string_literal: true

class CompaniesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create update destroy]

  before_action :authenticate_user!
  before_action :set_company, except: %i[new create]

  def new
    @company = current_user.companies.build
  end

  def edit; end

  def create
    company = current_user.companies.build(company_params)
    if company.save
      head :created
    else
      render json: { errors: company.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @company.assign_attributes(company_params)
    if @company.save
      head :created
    else
      render json: { errors: @company.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    if @company.destroy
      head :ok
    else
      render json: { errors: @company.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def cash_management_table
    @year = params[:year] || Date.current.year
  end

  def new_balance
    @new_balance = @company.build(year: params[:year], month: params[:month])
  end

  def create_monthly_balance
    monthly_balance = company.monthly_balances.build(n)
    if monthly_balance.save
      head :created
    else
      render json: { errors: monthly_balance.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_company
    @company = current_user.companies.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:name, :country, :currency)
  end

  def monthly_balance_params
    params.require(:monthly_balance).permit(:year, :month, :start_balance, :end_balance,
                                            balance_transactions_attributes: %i[amount putpose transaction_type])
  end
end
