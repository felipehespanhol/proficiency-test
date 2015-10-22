var appControllers = angular.module('repenseApp.controllers.courses', []);

appControllers.controller('CoursesIndexController', ['$scope', 'CourseService', function($scope, CourseService) {
  $scope.courses = CourseService;
  $scope.removeCourse = function(course) {
    if(confirm('Excluir ' + course.name + '?'))
      $scope.courses.removeCourse(course);
  };
}])

appControllers.controller('CoursesEditController', ['$scope', 'CourseService', '$stateParams', '$state', function($scope, CourseService, $stateParams, $state) {
  $scope.courses = CourseService;
  $scope.courses.selectedCourse = $scope.courses.getCourse($stateParams.courseId);
  $scope.save = function() {
    $scope.courses.updateCourse($scope.courses.selectedCourse).then(function() {
      $state.go('courses');
    });
  };
}])

appControllers.controller('CoursesNewController', ['$scope', 'Course', 'CourseService', '$state', function($scope, Course, CourseService, $state) {
  $scope.courses = CourseService;
  $scope.courses.selectedCourse = new Course();
  $scope.save = function() {
    $scope.courses.saveCourse($scope.courses.selectedCourse).then(function() {
      $state.go('courses');
    });
  };
}]);
