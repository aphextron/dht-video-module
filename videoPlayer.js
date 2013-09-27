
var videoPlayer = angular.module('videoPlayer',[],function($routeProvider) {        
    
  $routeProvider.when('/videoPlayer',{templateUrl:'videoPlayer.html',controller:'videoCtrl'})
 .otherwise({redirectTo:'/insert_default_route'});
    
});


function videoCtrl($scope, $http) {
    $scope.url = "https://s3.amazonaws.com/mirror.discoverhawaiitours.com/activity_object_json/11204.json";
    $scope.tourObj = [];

    $scope.insertInfo = function(data, status){
    $scope.tourObj = data;
    }

 	$scope.fetchInfo = function() {
       $http.get($scope.url).success($scope.insertInfo)
       }
    

       $scope.fetchInfo();

    }



  

