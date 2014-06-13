'use strict';

/**
 * @ngdoc function
 * @name twitterAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the twitterAngularApp
 */
angular.module('twitterAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
