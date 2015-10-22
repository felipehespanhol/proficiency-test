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

end
