class ClassroomsController < ApplicationController
  def index
    @course = Course.find(params[:course_id])
    @classrooms = @course.classrooms
    @students_not_enrolled = Student.all - @course.classrooms.map(&:student)
  end

  def create
    @student = Student.find(params[:student_id])
    @course = Course.find(params[:course_id])
    @classroom = Classroom.create!(student_id: @student.id, course_id: @course.id)
    render json: @classroom
  end

  def destroy
    @classroom = Classroom.find(params[:id])
    @classroom.destroy!
    render json: @classroom
  end
end
