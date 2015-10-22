class CoursesController < ApplicationController
  def index
    @courses = Course.all
  end

  def show
    @course = Course.find(params[:id])
  end

  def update
    @course = Course.find(params[:id])
    @course.update_attributes!(course_params)
    render status: 200, json: @course
  end

  def create
    @course = Course.create!(course_params)
    render status: 200, json: @course
  end

  def destroy
    @course = Course.find(params[:id])
    @course.destroy!
    render status: 200, json: @course
  end

  private

  def course_params
    params.require(:course).permit(:name, :description, :status)
  end
end
