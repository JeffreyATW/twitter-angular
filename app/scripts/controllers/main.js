'use strict';

angular.module('twitterAngularApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/tweets').success(function(tweets) {
      $scope.tweets = tweets;
    });
  });
