class Student < ActiveRecord::Base
  validates :name, :register_number, presence: true

  has_many :classrooms
  has_many :courses, through: :classrooms

  scope :active, ->() { where(status: 0) }
end
