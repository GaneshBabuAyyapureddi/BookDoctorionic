angular.module('bookDoctor')
.controller("editProfileController", function($scope, $state,$rootScope, $ionicHistory){
 $scope.editprofileobject = {};
  $scope.goBack = function() {
    // $state.go('settings');
    $ionicHistory.goBack();
  }

})