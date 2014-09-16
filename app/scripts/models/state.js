'use strict';

var module = angular.module( 'astarteApp.models' [ 'astarteApp.resource' ] );

module.factory('StateFactory', ['Resource', function ($resource) { 
  return $resource('/api/states/:id', {
    id: '@id',
  });
}]);
