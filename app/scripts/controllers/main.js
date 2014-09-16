'use strict';

/**
 * @ngdoc function
 * @name astarteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the astarteApp
 */
angular.module('astarteApp')
  .controller('MainCtrl', function ($scope, $location, CityFactory, CountyFactory, StateFactory, MaterialFactory, MethodFactory) {
  
    var loadStates = function () {
      $scope.states = StateFactory.query();
    }

    var loadCounties = function () {
      var queryParams = {};

      if (typeof $scope.selectedState !== 'undefined') {
        queryParams.state = $scope.selectedState;
      }

      $scope.counties = CountyFactory.query();
    }

    var loadCities = function () {
      var queryParams = {};
    
      if (typeof $scope.selectedState !== 'undefined') {
        queryParams.state = $scope.selectedState;
      }

      if (typeof $scope.selectedCounty !== 'undefined') {
	queryParams.county = $scope.selectedCounty;
      }

      $scope.cities = CityFactory.query();
    }

    var loadMaterials = function () {
	$scope.materials = MaterialFactory.query();
    }

    var loadMethods = function () {
    	var queryParams = {
          'state': $scope.selectedState,
	  'county': $scope.selectedCounty,
	  'city': $scope.selectedCity
	};
	$scope.methods = MethodFactory.query(queryParams);
    }

    var init = function () {
	loadStates();
	loadMaterials();
    }

    init();
  });
