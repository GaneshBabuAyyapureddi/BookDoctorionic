angular.module('bookDoctor')
.controller("forgotPasswordController", function($scope, $state,$ionicHistory){
  

    $scope.submitForgotPassword = function(form) {

if (form.$valid) {

  alert("You will receive a email shortly, with the password change link");
    	$state.go('loginPage');
}
//this has to be changed. Time being to resolve the error sent aslike
else{
	    	$state.go('loginPage');
}

  }
    $scope.goBackToHome = function() {
    //$state.go('loginPage');
    $ionicHistory.goBack();
  }

})




