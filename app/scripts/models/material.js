'use strict';

angular.module( 'astarteApp.models' )
.factory('MaterialFactory', ['$resource', function ($resource) { 
  return $resource('/api/materials/:id', {
    id: '@id',
  });
}]);
