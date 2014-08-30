'use strict';

var module = angular.module( 'astarteApp.models' [ 'astarteApp.resource' ] );

module.factory('State', ['Resource', function ($resource) { 
  return $resource('/api/states/:id/:name', {
    id: '@id',
    name: '@name'
  });
}]);
