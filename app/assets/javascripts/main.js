var app = angular.module('repenseApp', [
  'templates',
  'ngResource',
  'ngAnimate',
  'ui.router',
  'repenseApp.controllers',
  'repenseApp.services'
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
    .state('newStudent', {
      url: '/students/new',
      templateUrl: 'students/new.html',
      controller: 'StudentsNewController'
    })
});
