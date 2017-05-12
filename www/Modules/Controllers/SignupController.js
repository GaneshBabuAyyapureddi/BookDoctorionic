angular.module('bookDoctor')

.controller("signupController",function ($scope, $state, $ionicHistory) {
 
  $scope.submit = function(username) {
 
        alert("Thanks " + username);
 
    }

     $scope.goBack = function() {
     $state.go('loginPage');
    //$ionicHistory.goBack();
  }

});