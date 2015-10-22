json.classrooms @course.classrooms do |classroom|
  json.(classroom, :id, :entry_at)
  json.student classroom.student, :id, :name, :register_number
end

json.students_not_enrolled @students_not_enrolled, :id, :name, :register_number
