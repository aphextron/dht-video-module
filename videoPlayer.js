
var videoPlayer = angular.module('videoPlayer', ['ui.bootstrap']);

function modalCtrl($scope, $modal, $log){


    $scope.open = function (pid) {
    var modalInstance = $modal.open({
      templateUrl: 'videoPlayer.html',
      controller: videoCtrl,     
    });
    window.CurrentActivityID = pid;
    }
}



function videoCtrl($scope, $http) {
    var pid = $scope.CurrentActivityID;
    $scope.tourObj = [];

    $scope.insertInfo = function(data, status){
      $scope.tourObj = data;
    }

 	  $scope.fetchInfo = function() {
      var pid = window.CurrentActivityID; 
      $scope.url = "https://s3.amazonaws.com/mirror.discoverhawaiitours.com/activity_object_json/"+ pid +".json";
      $http.get($scope.url).success($scope.insertInfo)
   
    }
    



       $scope.fetchInfo();
}



  

