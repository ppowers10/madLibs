angular.module("madLib", [])

.controller("MainPageController", function($scope){

  $scope.heShe = "he/she";
  $scope.hisHer = "his/her";
  $scope.himHer = "him/her";

  $scope.changeGender = function(genderType) {
    if (genderType == 'male'){
      $scope.heShe = "he";
      $scope.hisHer = "his";
      $scope.himHer = "him";
    }else{
      $scope.heShe = "she";
      $scope.hisHer = "her";
      $scope.himHer = "her";
    }
  };
});
