require 'rails_helper'

RSpec.describe ClassroomsController, :type => :controller do

  describe "GET index" do
    let(:course) { create(:course) }

    it "returns http success" do
      get :index, course_id: course.id, format: :json
      expect(response).to be_success
      #  get :index, format: :json
      #  courses_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(courses_json.size).to be 3
      #  expect(courses_json.first.name).to eq(courses.first.name)
      #  expect(courses_json.first.description).to eq(courses.first.description)
      #  expect(courses_json.first.status).to eq(courses.first.status)
    end
  end

  describe "POST create" do
    let(:student) { create(:student) }
    let(:course) { create(:course) }

    it "returns http success" do
      post :create, student_id: student.id, course_id: course.id
      expect(response).to be_success
      expect(course.reload.students.size).to eq(1)
      #  student_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(student_json.name).to eq(student.first.name)
      #  expect(student_json.register_number).to eq(student.first.register_number)
      #  expect(student_json.status).to eq(student.first.status)
    end
  end


end
