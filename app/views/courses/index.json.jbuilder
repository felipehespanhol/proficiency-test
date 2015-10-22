json.array! @courses do |course|
  json.(course, :id, :name, :description, :status)
end
