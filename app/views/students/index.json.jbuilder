json.array! @students do |student|
  json.(student, :id, :name, :register_number, :status)
end
