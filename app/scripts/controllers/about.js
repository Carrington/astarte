'use strict';

/**
 * @ngdoc function
 * @name astarteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the astarteApp
 */
angular.module('astarteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
