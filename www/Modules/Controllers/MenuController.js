angular.module('bookDoctor')


.controller("MenuController",function ($scope, $state,$ionicModal,$http) {

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
    $state.go('settings');
  }
    $scope.goToLogin = function() {
    $state.go('loginPage');
  }

$ionicModal.fromTemplateUrl('password-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.passwordModal = modal;
      });

      $scope.openPasswordModal = function() {
        $scope.passwordModal.show();
      };

      $scope.closeModal = function() {
         $scope.passwordModal.hide();
      };

$scope.goToDoctorProfile = function() {
    $state.go('dashboard.doctorProfile');
  }
})

