'use strict';

angular.module( 'astarteApp.models')
.factory('CountyFactory', ['$resource', function ($resource) {
  return $resource('/api/counties/:id', {
    id: '@id',
  });
}]);
