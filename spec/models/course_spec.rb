require 'rails_helper'

RSpec.describe Course, :type => :model do
  it { should validate_presence_of(:name) }
  it { should have_many(:classrooms) }
  it { should have_many(:students) }
end
