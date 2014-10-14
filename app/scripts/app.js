'use strict';

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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
