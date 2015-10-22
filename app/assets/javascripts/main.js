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
});

app.factory('Student', function($resource) {
  return $resource('/students/:studentId.json', {studentId: '@id'});
});

app.service('StudentService', function(Student) {
  var self = {
    'list': [],
    'isLoading': false,
    'loadStudents': function() {
      self.isLoading = true;
      Student.query(function(data) {
        angular.forEach(data, function(student) {
          self.list.push(new Student(student));
        });
        self.isLoading = false;
      });
    }
  };
  self.loadStudents();
  
  return self;
});

app.controller('StudentsIndexController', function($scope, StudentService) {
  $scope.students = StudentService;
});

