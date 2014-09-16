'use strict';

var module = angular.module( 'astarteApp.models' [ 'astarteApp.resource' ] );

module.factory('MethodFactory', ['Resource', function ($resource) { 
  return $resource('/api/method/:id', {
    id: '@id'
  });
}]);
