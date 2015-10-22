var app = angular.module('repenseApp', [
  'templates',
  'ngResource',
  'ngAnimate',
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('students', {
      url: '/',
      templateUrl: 'students/index.html',
      controller: 'StudentsIndexController'
    })
    .state('editStudent', {
      url: '/students/:studentId/edit',
      templateUrl: 'students/edit.html',
      controller: 'StudentsEditController'
    })
});

app.factory('Student', function($resource) {
  return $resource('/students/:studentId.json', {studentId: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
});

app.service('StudentService', function(Student, $q) {
  var self = {
    'list': [],
    'isLoading': false,
    'isSaving': false,
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
    }
  };
  self.loadStudents();
  
  return self;
});

app.controller('StudentsIndexController', function($scope, StudentService) {
  $scope.students = StudentService;
});

app.controller('StudentsEditController', function($scope, StudentService, $stateParams, $state) {
  $scope.students = StudentService;
  $scope.students.getStudent($stateParams.studentId);
  $scope.save = function() {
    $scope.students.updateStudent($scope.students.selectedStudent).then(function() {
      $state.go('students');
    });
  };
});

