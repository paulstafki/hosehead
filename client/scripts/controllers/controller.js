myApp.controller('SomeController', ["$scope", function($scope){
    $scope.thing = "Here you go!";
    console.log("Some Controller");
}]);

myApp.controller('AnotherController', ["$scope", function($scope){
    $scope.thing = "There you are!";
    console.log("Another Controller");
}]);