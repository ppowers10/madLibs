angular.module("madLib", [])

.controller("MainPageController", function($scope){

  $scope.heShe = "he/she";
  $scope.hisHer = "his/her";
  $scope.himHer = "him/her";
    
    $scope.showContent = false;
    $scope.hideContent = true;
    $scope.showFunction = function() {
            $scope.showContent = !$scope.showContent;
            $scope.hideContent = !$scope.hideContent;
        }
    
    $scope.showFunctionAndReset = function() {
            $scope.showContent = !$scope.showContent;
            $scope.hideContent = !$scope.hideContent;
            $scope.mName = "";    
            $scope.dirtyTasks = "";
            $scope.obnoxious = "";
            $scope.jobTitle = "";
            $scope.celebrity = "";
            $scope.hugeNumber = "";
            $scope.tediousTask = "";
            $scope.uselessSkill = "";
            $scope.adjective = "";
        }

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
