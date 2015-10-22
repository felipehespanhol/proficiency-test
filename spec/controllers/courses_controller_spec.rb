require 'rails_helper'

RSpec.describe CoursesController, :type => :controller do

  describe "GET index" do
    #let(:courses) { create_list(:course, 3) }
    it "returns http success" do
      get :index, format: :json
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

  describe "GET show" do
    let(:course) { create(:course) }

    it "returns http success" do
      get :show, id: course.id, format: :json
      expect(response).to be_success
      #  get :index, format: :json
      #  course_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(course_json.name).to eq(course.first.name)
      #  expect(course_json.description).to eq(course.first.description)
      #  expect(course_json.status).to eq(course.first.status)
    end
  end

  describe "PUT update" do
    let(:course) { create(:course) }

    it "returns http success" do
      new_name = 'newname'
      put :update, id: course.id, course: { name: new_name }
      expect(response).to be_success
      #  course_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(course_json.name).to eq(course.first.name)
      #  expect(course_json.description).to eq(course.first.description)
      #  expect(course_json.status).to eq(course.first.status)
    end
  end

  describe "POST create" do
    it "returns http success" do
      post :create, course: { name: 'Matemática', description: '12341234' }
      expect(response).to be_success
      #  course_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(course_json.name).to eq(course.first.name)
      #  expect(course_json.description).to eq(course.first.description)
      #  expect(course_json.status).to eq(course.first.status)
    end
  end

  describe "DELETE destroy" do
    let(:course) { create(:course) }

    it "returns http success" do
      delete :destroy, id: course.id
      expect(response).to be_success
      #  course_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(course_json.name).to eq(course.first.name)
      #  expect(course_json.description).to eq(course.first.description)
      #  expect(course_json.status).to eq(course.first.status)
    end
  end

end
