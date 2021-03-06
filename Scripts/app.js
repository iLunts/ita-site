'use strict';

var app = angular.module('site', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, routeProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true
    });
}]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: "/" });
}]);

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


app.controller('sliderCtrl', function($scope){

    $scope.slider = [
        {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'},
        {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'},
        {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'},
        {url: '/content/img/slider/estate.png', title: 'ESTATE', subtitle: 'агентства недвижимости', slogan: '- это «новое слово» в работе агентств недвижимости!'}
    ];

});
