myApp.controller('AddhappyhourController', ["$scope", function($scope){
    //$scope.empAdded = {
    //    value : 'NO'
    //};
}]);

myApp.controller("EstablishmentController", ['$scope', '$http', '$location', '$rootScope', 'EstablishmentService', function($scope, $http, $location, $rootScope, EstablishmentService){
    $scope.establishment = {};
    $scope.data = EstablishmentService.data;
    $scope.establishments = $scope.data.establishments;
    $scope.getEstablishments = function(){
        //EstablishmentService.getHappyHours($scope.zipcode).then(function(result){
        //    console.log(result);
        //    $location.path("results");        //mirrors the promise(.then) in the Est.Service below
        //});
        EstablishmentService.getHappyHours($scope.zipcode);
        console.log(EstablishmentService.data.establishments);
        console.log('getEstablishments zipcode ' + $scope.zipcode);
    };
    $scope.reportFalse = function(note){        //PUT for flagging false HH info
        $http({ url: '/flag/' + note._id,
            method: 'PUT',
            data: note,
            headers: {"Content-Type": "application/json;charset=utf-8"}
        }).then(function(res) {
            alert("False information flagged - we'll get right on it, thank you!");
        }, function(error) {
            console.log(error);
        });
    };
    $scope.upvote = function(note){ //PUT for upvotes
        note.upvotes += 1;
        $http({ url: '/upvote/' + note._id,
            method: 'PUT',
            data: note,
            headers: {"Content-Type": "application/json;charset=utf-8"}
        }).then(function(res) {
            console.log(res);
        }, function(error) {
            console.log(error);
        });
    };
    $scope.downvote = function(note){        //PUT for downvotes
        note.downvotes += 1;
        $http({ url: '/downvote/' + note._id,
            method: 'PUT',
            data: note,
            headers: {"Content-Type": "application/json;charset=utf-8"}
        }).then(function(res) {
            console.log(res);
        }, function(error) {
            console.log(error);
        });
    };
}]);

myApp.factory('EstablishmentService', ['$http', '$location', function($http, $location){
    var data;
    data = {                    //data object
        establishments : []         //array contains data object
    };
    return {
        getHappyHours : function(param){
            console.log("Est Servive zip code " + param);          //functioned designed to allow passing in of zip code
            return $http.post('/happyhour/' + param).then(function(response){      //retrieves establishments
                data.establishments = response.data;
                console.log(response.data);       // console logs no longer needed
                $location.path("results");
            })
        },
        data : data
    };
}]);