angular.module('userProfiles').controller('MainController', function($scope, mainService){

  $scope.thisAppIsBroken = "This angular app is working";

  getUsers();

  function getUsers() {
    $scope.users = mainService.getUsers();
  }

  $scope.toggleFavorite = mainService.toggleFavorite;

})
