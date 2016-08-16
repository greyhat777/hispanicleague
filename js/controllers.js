var hispanicLeagueControllers = angular.module('hispanicLeagueControllers', []);

hispanicLeagueControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get("js/data.js").success(function (data) {
      $scope.athletes = data;
      $scope.athleteOrder = 'name';
  });
}]);

hispanicLeagueControllers.controller('DetailsController', ['$scope','$http','$routeParams',  function($scope, $http, $routeParams) {
  $http.get("js/data.js").success(function (data) {
      $scope.athletes = data;
      $scope.whichItem = $routeParams.itemId;

      if($routeParams.itemId > 0) {
      	$scope.prevItem = Number($routeParams.itemId)-1;
      } else {
      	$scope.prevItem = $scope.athletes.length-1;
      }

      if($routeParams.itemId < $scope.athletes.length-1) {
      	$scope.nextItem = Number($routeParams.itemId)+1;
      } else {
      	$scope.nextItem = 0;
      }


  });
}]);










