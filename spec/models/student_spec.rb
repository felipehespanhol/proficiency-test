require 'rails_helper'

RSpec.describe Student, :type => :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:register_number) }
  it { should have_many(:classrooms) }
  it { should have_many(:courses) }
end
