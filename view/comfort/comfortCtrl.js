app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/comfort", {
            templateUrl: "view/comfort/index.html",
            controller: "comfortCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
]);

app.controller('comfortCtrl', function($scope){});
