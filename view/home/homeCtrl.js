app.controller('homeCtrl', function($scope){

    // $scope.slider = [
    //     {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'},
    //     {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'},
    //     {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'},
    //     {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'}
    // ];

});

app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "view/home/index.html",
            controller: "homeCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
]);
