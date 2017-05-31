angular.module('bookDoctor')

.controller("MenuController",function ($scope, $state,$ionicModal,$http,$ionicSideMenuDelegate) {

  $scope.goToHomeScreen = function() {
    $state.go('dashboard.homeScreen');
  }
  
  $scope.goToPatientProfile = function() {
    $state.go('dashboard.patientProfile');
  }
  
   $scope.goToSearchDoctor = function() {
    $state.go('dashboard.doctorSearch');
  }

  $scope.goToNotification = function() {
    $state.go('notification');
  }
  $scope.goToSettings = function() {
    $state.go('dashboard.settings');
  }
    $scope.goToLogin = function() {
    $state.go('loginPage');
  }


$scope.goToDoctorProfile = function() {
    $state.go('dashboard.doctorProfile');
  }

$scope.toggleMenu = function() {
  $ionicSideMenuDelegate.toggleLeft();
}
$scope.goToBuyMedicine = function() {
  $state.go('dashboard.buyMedicine');
}

})

