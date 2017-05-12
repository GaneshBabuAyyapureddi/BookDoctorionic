angular.module('bookDoctor')

.controller("MenuController",function ($scope, $state) {
  $scope.goToHomeScreen = function() {
    $state.go('dashboard.homeScreen');
  }
  
  $scope.goToPatientProfile = function() {
    $state.go('tabs.PatientProfile');
  }
  
   $scope.goToSearchDoctor = function() {
    $state.go('searchDoctor');
  }

  $scope.goToNotification = function() {
    $state.go('notification');
  }
    $scope.goToLogin = function() {
    $state.go('loginPage');
  }

})

