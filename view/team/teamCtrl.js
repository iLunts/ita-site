app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/team", {
            templateUrl: "view/team/index.html",
            controller: "teamCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
]);

app.controller('teamCtrl', function($scope){});
