var appControllers = angular.module('repenseApp.controllers.classrooms', []);

appControllers.controller('EnrollmentsIndexController', ['$scope', 'CourseService', '$state', '$stateParams', function($scope, CourseService, $state, $stateParams) {
  $scope.courses = CourseService;
  $scope.courses.getCourse($stateParams.courseId);
}]);
