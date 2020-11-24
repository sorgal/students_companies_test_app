require 'rails_helper'

RSpec.describe Company, type: :model do
  
  let(:company) { build(:company) }
  let(:teacher) { create(:user, :teacher) }

  describe '#user_is_student validation' do
    it 'available to create' do
      expect { company.save }.to change { Company.count }.from(0).to(1)
    end

    it 'not available to create' do
      company.user = teacher
      expect { company.save }.not_to change { Company.count }
      expect(company.errors.count).to eq(1)
      expect(company.errors.full_messages.first).to include('User is not a student')
    end
  end
end
