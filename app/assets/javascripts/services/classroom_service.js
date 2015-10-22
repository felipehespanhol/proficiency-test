var appServices = angular.module('repenseApp.services.classroom', []);

appServices.factory('Classroom', ['$resource', function($resource) {
  return $resource('/courses/:courseId/classrooms/:classroomId.json', {classroomId: '@id'}, {
    create: {
      url: '/courses/:courseId/students/:studentId/classrooms.js',
      method: 'POST'
    }
  });
}]);

appServices.service('ClassroomService', ['Classroom', 'Student', '$q', '$rootScope', function(Classroom, Student, $q, $rootScope) {
  var self = {
    'list': [],
    'studentsForEnrollment': [],
    'isLoading': false,
    'isSaving': false,
    'isDeleting': false,
    'selectedCourse': null,
    'selectedStudent': null,
    'selectedClassroom': null,
    'mode': null,
    'loadClassrooms': function() {
      self.isLoading = true;
      Classroom.get({courseId: self.selectedCourse.id}, function(data) {
        angular.forEach(data.classrooms, function(classroom) {
          self.list.push(new Classroom(classroom));
        });
        angular.forEach(data.students_not_enrolled, function(student) {
          self.studentsForEnrollment.push(new Student(student));
        });
        self.isLoading = false;
      });
    },
    'reloadClassrooms': function() {
      self.list = [];
      self.studentsForEnrollment = [],
      self.loadClassrooms();
    },
    'saveClassroom': function() {
      var d = $q.defer();
      self.isSaving = true;
      Classroom.create({
        courseId: self.selectedCourse.id,
        studentId: self.selectedStudent.id
      }, {}, function(classroom) {
        self.reloadClassrooms();
        self.isSaving = false;
        self.mode = null;
        d.resolve();
      });
      return d.promise;
    },
    'removeClassroom': function() {
      var d = $q.defer();
      self.isDeleting = true;
      self.selectedClassroom.$remove({courseId: self.selectedCourse.id}).then(function() {
        self.reloadClassrooms();
        self.isDeleting = false;
        self.mode = null;
        d.resolve();
      });
      return d.promise;
    },
    'watchFilters': function() {
      $rootScope.$watch(function() {
        return self.selectedCourse;
      }, function(newVal) {
        if(newVal != null) {
          self.list = [];
          self.selectedStudent = null;
          self.loadClassrooms();
        }
      });
    }
  };
  self.watchFilters();

  return self;
}]);

