'use strict';

angular.module( 'astarteApp.models')
.factory('MethodFactory', ['$resource', function ($resource) { 
  return $resource('/api/method/:id', {
    id: '@id'
  });
}]);
