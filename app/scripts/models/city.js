'use strict';

var module = angular.module( 'astarteApp.models' [ 'astarteApp.resource' ] );

module.factory('City', ['Resource', function ($resource) { 
  return $resource('/api/cities/:id', {
    id: '@id'
  });
}]);
