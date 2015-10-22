class StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def show
    @student = Student.find(params[:id])
  end

  def update
    @student = Student.find(params[:id])
    @student.update_attributes!(student_params)
    render status: 200, json: @student
  end

  def create
    @student = Student.create!(student_params)
    render status: 200, json: @student
  end

  def destroy
    @student = Student.find(params[:id])
    @student.destroy!
    render status: 200, json: @student
  end

  private

  def student_params
    params.require(:student).permit(:name, :register_number)
  end
end
