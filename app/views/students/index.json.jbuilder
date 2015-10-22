json.array! @students do |student|
  json.(student, :name, :register_number, :status)
end
