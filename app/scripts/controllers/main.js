'use strict';

/**
 * @ngdoc function
 * @name astarteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the astarteApp
 */
angular.module('astarteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });