var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/search', {
            templateUrl: "/assets/views/routes/search.html",
            controller: "SomeController"
        }).
        when('/addhh', {
            templateUrl: "/assets/views/routes/addhh.html",
            controller: "SomeController"
        }).
        when('/results', {
            templateUrl: "/assets/views/routes/results.html",
            controller: "AnotherController"
        }).
        otherwise({
            redirectTo: "/search"
        })
}]);