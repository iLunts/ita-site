app.directive("owlCarousel", function() {
    return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
            scope.initCarousel = function(element) {
                var defaultOptions = {};
                var customOptions = scope.$eval($(element).attr('data-options'));
                for(var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                $(element).owlCarousel(defaultOptions);
            };
        }
    };
})
.directive('owlCarouselItem', [function() {
    return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {

            if(scope.$last) {
                scope.initCarousel(element.parent());
            }
        }
    };
}]);

app.controller('homeCtrl', function($scope){

    $scope.slider = [
        {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'},
        {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'},
        {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'},
        {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'}
    ];

});

app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "view/home/index.html",
            controller: "homeCtrl"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
]);
