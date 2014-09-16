'use strict';

var module = angular.module( 'astarteApp.models' [ 'astarteApp.resource' ] );

module.factory('MaterialFactory', ['Resource', function ($resource) { 
  return $resource('/api/materials/:id', {
    id: '@id',
  });
}]);
