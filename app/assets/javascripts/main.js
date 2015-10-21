var app = angular.module('repenseApp', [
  'templates',
  'ngAnimate',
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('students', {
      url: '/',
      templateUrl: 'students/index.html',
      controller: 'studentsIndexController'
    })
});

app.controller('studentsIndexController', function($scope) {
  $scope.students = [{register_number: '1234', name: 'teste', status: 'Não matriculado'}];
});
