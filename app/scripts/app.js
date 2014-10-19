'use strict';

angular.module('astarteApp.models', []);


/**
 * @ngdoc overview
 * @name astarteApp
 * @description
 * # astarteApp
 *
 * Main module of the application.
 */
angular
  .module('astarteApp', [
    'astarteApp.models',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngResource',
    'ngTouch',
    'ui.bootstrap'])
  .config(['$resourceProvider', '$routeProvider', function ($resourceProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
