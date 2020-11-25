# frozen_string_literal: true

module ApplicationHelper
  def current_user_name
    [current_user.last_name, current_user.first_name].join(' ')
  end

  def cash_management_table_rows
    { cash_initial: true, cash_in: true }.merge(BalanceTransaction::IN_PURPOSES.index_with { |_purpose| false })
                                         .merge(other_in_payments: false, cash_out: true)
                                         .merge(BalanceTransaction::OUT_PURPOSES.index_with { |_purpose| false })
                                         .merge(other_out_payments: false, cash_out: true)
  end
end
