# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }
  root 'home#index'

  resources :home, only: :index
  resources :companies, except: %i[index show] do
    get :cash_management_table, on: :member
  end
end
