class CreateClassrooms < ActiveRecord::Migration
  def change
    create_table :classrooms do |t|
      t.integer :course_id, null: false
      t.integer :student_id, null: false
      t.datetime :entry_at, null: false

      t.timestamps
    end
  end
end
