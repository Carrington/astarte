'use strict';

var module = angular.module( 'astarteApp.models' [ 'astarteApp.resource' ] );

module.factory('CountyFactory', ['Resource', function ($resource) { 
  return $resource('/api/counties/:id', {
    id: '@id',
  });
}]);
