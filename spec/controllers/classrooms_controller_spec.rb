require 'rails_helper'

RSpec.describe ClassroomsController, :type => :controller do

  describe "POST create" do
    let(:student) { create(:student) }
    let(:course) { create(:course) }

    it "returns http success" do
      post :create, student_id: student.id, course_id: course.id
      expect(response).to be_success
      expect(course.reload.students). eq(1)
      #  student_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(student_json.name).to eq(student.first.name)
      #  expect(student_json.register_number).to eq(student.first.register_number)
      #  expect(student_json.status).to eq(student.first.status)
    end
  end


end
