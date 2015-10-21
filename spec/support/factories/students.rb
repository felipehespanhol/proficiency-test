# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :student do
    name "João"
    register_number "123"
    status 1
  end
end
