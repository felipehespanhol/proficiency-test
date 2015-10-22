var appServices = angular.module('repenseApp.services.student', []);

appServices.factory('Student', ['$resource', function($resource) {
  return $resource('/students/:studentId.json', {studentId: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
}]);

appServices.service('StudentService', ['Student', '$q', function(Student, $q) {
  var self = {
    'list': [],
    'isLoading': false,
    'isSaving': false,
    'isDeleting': false,
    'selectedStudent': null,
    'loadStudents': function() {
      self.isLoading = true;
      Student.query(function(data) {
        angular.forEach(data, function(student) {
          self.list.push(new Student(student));
        });
        self.isLoading = false;
      });
    },
    'getStudent': function(studentId) {
      self.isLoading = true;
      Student.get({studentId: studentId}, function(student) {
        self.selectedStudent = new Student(student);
        self.isLoading = false;
      });
    },
    'updateStudent': function(student) {
      var d = $q.defer();
      self.isSaving = true;
      student.$update().then(function() {
        self.isSaving = false;
        d.resolve();
      })
      return d.promise;
    },
    'saveStudent': function(student) {
      var d = $q.defer();
      self.isSaving = true;
      student.$save().then(function(student) {
        self.list.unshift(new Student(student));
        self.isSaving = false;
        d.resolve();
      })
      return d.promise;
    },
    'removeStudent': function(student) {
      var d = $q.defer();
      self.isDeleting = true;
      student.$remove().then(function() {
        var index = self.list.indexOf(student);
        self.list.splice(index, 1);
        self.selectedStudent = null;
        self.isDeleting = false;
        d.resolve();
      });
      return d.promise;
    }
  };
  self.loadStudents();
  return self;
}]);

