# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :classroom do
    association(:course)
    association(:student)
    entry_at '2015-10-22'
  end
end
