'use strict';

angular.module('astarteApp', ['ngResource']).factory('State', function($resource) { 
  return $resource('/api/states/:id', {
    query: { method: "GET", isArray: false }
  });
});
