require 'rails_helper'

RSpec.describe ClassroomsController, :type => :controller do

  describe "GET index" do
    let(:course) { create(:course) }

    it "returns http success" do
      get :index, course_id: course.id, format: :json
      expect(response).to be_success
    end
  end

  describe "POST create" do
    let(:student) { create(:student) }
    let(:course) { create(:course) }

    it "returns http success" do
      post :create, student_id: student.id, course_id: course.id
      expect(response).to be_success
      expect(course.reload.students.size).to eq(1)
    end
  end

  describe "DELETE destroy" do
    let(:classroom) { create(:classroom) }

    it "returns http success" do
      delete :destroy, course_id: classroom.course_id, id: classroom.id
      expect(response).to be_success
    end
  end

end
