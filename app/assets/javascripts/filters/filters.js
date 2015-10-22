var appFilters = angular.module('repenseApp.filters', []);

appFilters.filter('studentStatus', function() {
  return function(input, param) {
    if (input == 0)
      return 'Ativo';
    else if (input == 1)
      return 'Inativo';
  };
});

appFilters.filter('courseStatus', function() {
  return function(input, param) {
    if (input == 0)
      return 'Aberto';
    else if (input == 1)
      return 'Fechado';
  };
});
