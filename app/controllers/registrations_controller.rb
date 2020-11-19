# frozen_string_literal: true

class RegistrationsController < Devise::RegistrationsController
  protected

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation, :role, :first_name, :last_name)
  end

  def account_update_params
    params.require(:user).permit(:first_name, :last_name, :avatar)
  end

  def update_resource(resource, params)
    resource.update_without_password(params)
  end
end
