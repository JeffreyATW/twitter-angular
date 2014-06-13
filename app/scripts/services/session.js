'use strict';

angular.module('twitterAngularApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
