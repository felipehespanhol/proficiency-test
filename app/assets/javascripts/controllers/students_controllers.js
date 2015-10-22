var appControllers = angular.module('repenseApp.controllers.students', []);

appControllers.controller('StudentsIndexController', ['$scope', 'StudentService', function($scope, StudentService) {
  $scope.students = StudentService;
  $scope.removeStudent = function(student) {
    if(confirm('Excluir ' + student.name + '?'))
      $scope.students.removeStudent(student);
  };
}])

appControllers.controller('StudentsEditController', ['$scope', 'StudentService', '$stateParams', '$state', function($scope, StudentService, $stateParams, $state) {
  $scope.students = StudentService;
  $scope.students.selectedStudent = $scope.students.getStudent($stateParams.studentId);
  $scope.save = function() {
    $scope.students.updateStudent($scope.students.selectedStudent).then(function() {
      $state.go('students');
    });
  };
}])

appControllers.controller('StudentsNewController', ['$scope', 'Student', 'StudentService', '$state', function($scope, Student, StudentService, $state) {
  $scope.students = StudentService;
  $scope.students.selectedStudent = new Student();
  $scope.save = function() {
    $scope.students.saveStudent($scope.students.selectedStudent).then(function() {
      $state.go('students');
    });
  };
}]);

