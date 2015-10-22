class Classroom < ActiveRecord::Base
  validates :course_id, :student_id, presence: true

  belongs_to :student
  belongs_to :course

  before_create :set_entry_at

  def set_entry_at
    self.entry_at = DateTime.now
  end
end
