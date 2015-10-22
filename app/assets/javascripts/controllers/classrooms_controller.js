var appControllers = angular.module('repenseApp.controllers.classrooms', []);

appControllers.controller('EnrollmentsIndexController', ['$scope', 'ClassroomService', 'Course', '$state', '$stateParams', function($scope, ClassroomService, Course, $state, $stateParams) {
  $scope.classrooms = ClassroomService;
  Course.get({courseId: $stateParams.courseId}, function(course) {
    $scope.classrooms.selectedCourse = new Course(course);
  });
  $scope.enrollStudent = function() {
    $scope.classrooms.saveClassroom();
  };
  $scope.removeStudent = function() {
    $scope.classrooms.removeClassroom();
  };
}]);
