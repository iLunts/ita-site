"use strict";

angular.module('site.home', ["ngRoute"])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "view/home/index.html",
            controller: "homeCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
]);
