var appServices = angular.module('repenseApp.services.course', []);

appServices.factory('Course', ['$resource', function($resource) {
  return $resource('/courses/:courseId.json', {courseId: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
}]);

appServices.service('CourseService', ['Course', '$q', function(Course, $q) {
  var self = {
    'list': [],
    'isLoading': false,
    'isSaving': false,
    'isDeleting': false,
    'selectedCourse': null,
    'loadCourses': function() {
      self.isLoading = true;
      Course.query(function(data) {
        angular.forEach(data, function(course) {
          self.list.push(new Course(course));
        });
        self.isLoading = false;
      });
    },
    'getCourse': function(courseId) {
      //var d = $q.defer();
      //self.isLoading = true;
      //Course.get({courseId: courseId}, function(course) {
      //  self.selectedCourse = new Course(course);
      //  self.isLoading = false;
      //  d.resolve();
      //});
      //return d.promise;
      for(var i=0; i < self.list.length; i++) {
        var course = self.list[i];
        if(course.id == courseId) {
          return course;
        }
      };
    },
    'updateCourse': function(course) {
      var d = $q.defer();
      self.isSaving = true;
      course.$update().then(function() {
        self.isSaving = false;
        d.resolve();
      })
      return d.promise;
    },
    'saveCourse': function(course) {
      var d = $q.defer();
      self.isSaving = true;
      course.$save().then(function(course) {
        self.list.unshift(new Course(course));
        self.isSaving = false;
        d.resolve();
      })
      return d.promise;
    },
    'removeCourse': function(course) {
      var d = $q.defer();
      self.isDeleting = true;
      course.$remove().then(function() {
        var index = self.list.indexOf(course);
        self.list.splice(index, 1);
        self.selectedCourse = null;
        self.isDeleting = false;
        d.resolve();
      });
      return d.promise;
    }
  };
  self.loadCourses();
  return self;
}]);

