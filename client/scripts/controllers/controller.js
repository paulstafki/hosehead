myApp.controller('AddhappyhourController', ["$scope", function($scope){
    //$scope.empAdded = {
    //    value : 'NO'
    //};
}]);

myApp.controller("EstablishmentController", ['$scope', '$http', 'EstablishmentService', function($scope, $http, EstablishmentService){
    $scope.establishment = {};
    $scope.establishments = EstablishmentService.data.establishments;
    $scope.getEstablishments = function(){
        EstablishmentService.getHappyHours($scope.zipcode);
        console.log($scope.zipcode);
        //console.log($scope.establishments);
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

}]);

myApp.factory('EstablishmentService', ['$http', function($http){
    var data;
    data = {                    //data object
        establishments : []         //array contains data object
    };
    return {
        getHappyHours : function(param){
            console.log(param);          //functioned designed to allow passing in of zip code
            $http.post('/happyhour/' + param).then(function(response){      //retrieves establishments
                //console.log(response);        console logs no longer needed
                data.establishments = response.data;
                //response.redirect("/assets/views/routes/landing.html/#results");
            })
        },
        data : data
    };
}]);