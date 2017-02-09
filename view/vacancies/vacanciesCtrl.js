app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/vacancies", {
            templateUrl: "view/vacancies/index.html",
            controller: "vacanciesCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
]);

app.controller('vacanciesCtrl', function($scope){});
