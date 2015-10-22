json.(@course, :id, :name, :description, :status)

json.classrooms @course.classrooms do |classroom|
  json.(classroom, :id, :entry_at)
  json.student classroom.student, :id, :name, :register_number
end
