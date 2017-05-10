angular.module('bookDoctor')

.controller("loginController",function ($scope, $state) {
  $scope.goToHomeScreen = function() {
    $state.go('dashboard.homeScreen');
  }
  
  $scope.goToSignup = function() {
    $state.go('signupScreen');
  }

  $scope.goToForgotPassword = function() {
    $state.go('forgotpassword');
  }

})