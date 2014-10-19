'use strict';

angular.module('astarteApp.models')
.factory('CityFactory', ['$resource', function ($resource) { 
  return $resource('api/cities/:id', {
    id: '@id'
  });
}]);
