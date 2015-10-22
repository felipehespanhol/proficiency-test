var appServices = angular.module('repenseApp.services.classroom', []);

appServices.factory('Classroom', ['$resource', function($resource) {
  return $resource('/courses/:courseId/classrooms.json');
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
    'mode': null,
    'loadClassrooms': function() {
      self.isLoading = true;
      Classroom.get({courseId: self.selectedCourse.id}, function(data) {
        console.log(data);
        angular.forEach(data.classrooms, function(classroom) {
          self.list.push(new Classroom(classroom));
        });
        angular.forEach(data.students_not_enrolled, function(student) {
          self.studentsForEnrollment.push(new Student(student));
        });
        self.isLoading = false;
      });
    },
    'removeClassroom': function(classroom) {
      var d = $q.defer();
      self.isDeleting = true;
      classroom.$remove().then(function() {
        var index = self.list.indexOf(classroom);
        self.list.splice(index, 1);
        self.selectedClassroom = null;
        self.isDeleting = false;
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

