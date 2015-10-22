var app = angular.module('repenseApp', [
  'templates',
  'ngResource',
  'ngAnimate',
  'ngMask',
  'ui.router',
  'angularSpinner',
  'repenseApp.controllers.students',
  'repenseApp.controllers.courses',
  'repenseApp.controllers.classrooms',
  'repenseApp.services.student',
  'repenseApp.services.course',
  'repenseApp.services.classroom',
  'repenseApp.filters'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
    .state('newStudent', {
      url: '/students/new',
      templateUrl: 'students/new.html',
      controller: 'StudentsNewController'
    })
    .state('courses', {
      url: '/courses',
      templateUrl: 'courses/index.html',
      controller: 'CoursesIndexController'
    })
    .state('editCourse', {
      url: '/courses/:courseId/edit',
      templateUrl: 'courses/edit.html',
      controller: 'CoursesEditController'
    })
    .state('newCourse', {
      url: '/courses/new',
      templateUrl: 'courses/new.html',
      controller: 'CoursesNewController'
    })
    .state('classrooms', {
      url: '/courses/:courseId/classrooms',
      templateUrl: 'classrooms/index.html',
      controller: 'EnrollmentsIndexController'
    })
}]);
