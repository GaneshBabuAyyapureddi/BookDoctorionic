angular.module('bookDoctor')

.controller("MenuController",function ($scope, $state,$ionicModal,$http) {
  $scope.goToHomeScreen = function() {
    $state.go('dashboard.homeScreen');
  }
  
  $scope.goToPatientProfile = function() {
    $state.go('tabs.PatientProfile');
  }
  
   $scope.goToSearchDoctor = function() {
    $state.go('dashboard.doctorSearch');
  }

  $scope.goToNotification = function() {
    $state.go('notification');
  }
    $scope.goToLogin = function() {
    $state.go('loginPage');
  }

$scope.goToDoctorProfile = function() {
    $state.go('dashboard.doctorProfile');
  }




})

