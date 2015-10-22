class ClassroomsController < ApplicationController
  def create
    @student = Student.find(params[:student_id])
    @course = Course.find(params[:course_id])
    @classroom = Classroom.create!(student_id: @student.id, course_id: @course.id)
    render json: @classroom
  end
end
