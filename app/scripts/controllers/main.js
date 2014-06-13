'use strict';

/**
 * @ngdoc function
 * @name twitterAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitterAngularApp
 */
angular.module('twitterAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
