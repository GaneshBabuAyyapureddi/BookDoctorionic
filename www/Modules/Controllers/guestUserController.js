angular.module('bookDoctor')

.controller("guestUserController",function ($scope, $state, $ionicHistory) {


  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

});