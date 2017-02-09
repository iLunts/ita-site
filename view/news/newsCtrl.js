app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/news", {
            templateUrl: "view/news/index.html",
            controller: "newsCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
]);

app.controller('newsCtrl', function($scope){});
