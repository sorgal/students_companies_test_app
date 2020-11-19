# frozen_string_literal: true

module ApplicationHelper
  def current_user_name
    [current_user.last_name, current_user.first_name].join(' ')
  end
end
