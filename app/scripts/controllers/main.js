'use strict';

/**
 * @ngdoc function
 * @name astarteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the astarteApp
 */
angular.module('astarteApp')
  .controller('MainCtrl', 
  function ($scope, $location, CityFactory, CountyFactory, StateFactory, MaterialFactory, MethodFactory) {
   
  var loadStates,
      loadCounties,
      loadCities,
      loadMaterials,
      loadMethods,
      init;

  loadStates = function () {
      StateFactory.query().$promise.then(function(data) { 
		$scope.states = data["_embedded"]; 
	      }, function(error) {
                //TODO display some kinda error
	      });
     
  }

  loadCounties = function () {
      var queryParams = {};

      if (typeof $scope.selectedState !== 'undefined') {
        queryParams.state = $scope.selectedState;
      }

      $scope.counties = CountyFactory.query();
    }

  loadCities = function () {
      var queryParams = {};
    
      if (typeof $scope.selectedState !== 'undefined') {
        queryParams.state = $scope.selectedState;
      }

      if (typeof $scope.selectedCounty !== 'undefined') {
	queryParams.county = $scope.selectedCounty;
      }

      $scope.cities = CityFactory.query();
    }

  loadMaterials = function () {
	$scope.materials = MaterialFactory.query();
    }

  loadMethods = function () {
    	var queryParams = {
          'state': $scope.selectedState,
	  'county': $scope.selectedCounty,
	  'city': $scope.selectedCity
	};
	$scope.methods = MethodFactory.query(queryParams);
    }

   init = function () {
	loadStates();
	loadMaterials();
    }

    init();
  });
