"use strict";

angular
.module('astarteApp.directives')
.directive('astteCounty', ['CountyService', function(CountyService) {
  return {
    require: 'ngModel',
    restrict: 'A',
    controller: 'CountyController',
    scope: {
      state: '=state'
    },
    link: function (scope, element, attr, ngModel) {
      scope.$watch(attrs.state, function (state) {
	//fail fast
        if (! state) {
          scope.counties = null;
	  scope.county = null;
	}

	//otherwise query service for list of state's counties
        CountyService.query(state).then( function (counties) {
	  scope.counties = counties;
	}, function () {
	  scope.counties = null;
	  scope.county = null.
	});
      }, true);

      //REFACTOR: mnbn
      scope.$watch(
        function () { return ngModel.$modelValue },
	function (newValue, oldValue) {
          if (newValue !== oldValue) {

	  }
        }
      );
      element.bind('change', function () {
        
      });
    },
    templateUrl: 'views/templates/astte-county-template.html'
  }
}]);
