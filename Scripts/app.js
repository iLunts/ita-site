'use strict';

var app = angular.module('site', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, routeProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    // $routeProvider.otherwise({ redirectTo: "/" });
}]);
