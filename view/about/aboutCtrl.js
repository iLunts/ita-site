app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/about", {
            templateUrl: "view/about/index.html",
            controller: "aboutCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
]);

app.controller('aboutCtrl', function($scope){});
