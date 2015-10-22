require 'rails_helper'

RSpec.describe StudentsController, :type => :controller do

  describe "GET index" do
    #let(:students) { create_list(:student, 3) }
    it "returns http success" do
      get :index, format: :json
      expect(response).to be_success
      #  get :index, format: :json
      #  students_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(students_json.size).to be 3
      #  expect(students_json.first.name).to eq(students.first.name)
      #  expect(students_json.first.register_number).to eq(students.first.register_number)
      #  expect(students_json.first.status).to eq(students.first.status)
    end
  end

  describe "GET show" do
    let(:student) { create(:student) }

    it "returns http success" do
      get :show, id: student.id, format: :json
      expect(response).to be_success
      #  get :index, format: :json
      #  student_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(student_json.name).to eq(student.first.name)
      #  expect(student_json.register_number).to eq(student.first.register_number)
      #  expect(student_json.status).to eq(student.first.status)
    end
  end

  describe "PUT update" do
    let(:student) { create(:student) }

    it "returns http success" do
      new_name = 'newname'
      put :update, id: student.id, student: { name: new_name }
      expect(response).to be_success
      #  student_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(student_json.name).to eq(student.first.name)
      #  expect(student_json.register_number).to eq(student.first.register_number)
      #  expect(student_json.status).to eq(student.first.status)
    end
  end

  describe "POST create" do
    it "returns http success" do
      post :create, student: { name: 'Victor', register_number: '12341234' }
      expect(response).to be_success
      #  student_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(student_json.name).to eq(student.first.name)
      #  expect(student_json.register_number).to eq(student.first.register_number)
      #  expect(student_json.status).to eq(student.first.status)
    end
  end

  describe "DELETE destroy" do
    let(:student) { create(:student) }

    it "returns http success" do
      delete :destroy, id: student.id
      expect(response).to be_success
      #  student_json = JSON.parse(response.body)
      #  expect(response).to be_success
      #  expect(student_json.name).to eq(student.first.name)
      #  expect(student_json.register_number).to eq(student.first.register_number)
      #  expect(student_json.status).to eq(student.first.status)
    end
  end

end
