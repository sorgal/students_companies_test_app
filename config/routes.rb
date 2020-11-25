# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }
  root 'home#index'

  resources :home, only: :index
  resources :companies, except: %i[index show] do
    member do
      get :cash_management_table
      post :create_monthly_balance
    end
  end
end
