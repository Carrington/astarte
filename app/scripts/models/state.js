'use strict';

angular.module( 'astarteApp.models')
.factory('StateFactory', ['$resource', function ($resource) { 
  return $resource('/api/states/:id',
	  { id: '@id' },
	  { 'query': { method: 'GET' }}

	  );
}]);
