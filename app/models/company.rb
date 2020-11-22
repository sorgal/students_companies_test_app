# frozen_string_literal: true

class Company < ApplicationRecord

  belongs_to :user

  validates :name, :country, :currency, :user_id, presence: true
  validates :name, uniqueness: true
  validate :user_is_student

  private

  def user_is_student
    errors.add(:user_id, :user_is_not_student) unless user.student?
  end
end
