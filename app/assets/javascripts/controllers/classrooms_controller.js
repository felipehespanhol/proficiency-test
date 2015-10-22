var appControllers = angular.module('repenseApp.controllers.classrooms', []);

appControllers.controller('EnrollmentsIndexController', ['$scope', 'ClassroomService', 'CourseService', '$state', '$stateParams', function($scope, ClassroomService, CourseService, $state, $stateParams) {
  $scope.classrooms = ClassroomService;
  $scope.courses = CourseService;
  CourseService.getCourse($stateParams.courseId).then(function() {
    $scope.classrooms.selectedCourse = $scope.courses.selectedCourse;
  });
}]);
