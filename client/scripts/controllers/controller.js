myApp.controller('AnotherController', ["$scope", function($scope){
    $scope.thing = "There you are!";
    console.log("Another Controller");
}]);

myApp.controller("EstablishmentController", ['$scope', '$http', 'EstablishmentService', function($scope, $http, EstablishmentService){
    $scope.establishment = {};
    $scope.establishments = EstablishmentService.data.establishments;
    $scope.getEstablishments = function(){
        EstablishmentService.getHappyHours();
        console.log($scope.establishments);
    };
}]);

myApp.factory('EstablishmentService', ['$http', function($http){
    var data;
    data = {                    //data object
        establishments : []         //array contains data object
    };
    return {
        getHappyHours : function(){         //functioned designed to allow passing in of zipcode
            return $http.get('/happyhour').then(function(response){      //retrieves establishments
                return data.establishments = response.data;
                console.log(establishments);
            })
        },
        data : data
    };
}]);