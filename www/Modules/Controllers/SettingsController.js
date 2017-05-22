angular.module('bookDoctor')

.controller("settingsController",function ($scope,$cordovaSQLite,$cordovaToast, $state,$rootScope,$ionicModal,$ionicHistory,$ionicPopup) {

  $scope.goBack = function() {
   $state.go('dashboard.homeScreen');
   // $ionicHistory.goBack();
  }

  $scope.submitNewPassword = function() {
   $state.go('dashboard.homeScreen');
   // $ionicHistory.goBack();
  }


  $scope.goEditProfile = function() {
   $state.go('tabs.PatientProfile');
   // $ionicHistory.goBack();
  }

  $scope.showLogoutConfirm = function(){

var confirmPopup = $ionicPopup.confirm({
         title: 'Title',
         template: 'Are you sure?'
      });

      confirmPopup.then(function(res) {
         if(res) {
              $state.go('loginPage');
         } else {
            console.log('Not sure!');
         }
      });
/*   $ionicPopup.alert({
        title: 'Logout Confirmation',
        template: 'Do you want to Logout?'
      });*/

  }


  $scope.blueDialog = function(){
  
  var confirmPopup = $ionicPopup.confirm({
         title: 'Change your Theme',
         template: 'Do you want to change your theme to Blue?'
      });

      confirmPopup.then(function(res) {
         if(res) {
          $scope.themeModal.hide();
              // $state.go('loginPage');
         } else {
            console.log('Not sure!');
         }
      });
    // confirm("Do you want to change your theme to Blue?", "title", "buttonLabels");
  }
  $scope.redDialog = function(){
  
  var confirmPopup = $ionicPopup.confirm({
         title: 'Change your Theme',
         template: 'Do you want to change your theme to Red?'
      });

      confirmPopup.then(function(res) {
         if(res) {
          $scope.themeModal.hide();
           // $cordovaToast.show('Theme changed to Red', 'long', 'center');
              // $state.go('loginPage');
         } else {
            console.log('Not sure!');
         }
      });
    // confirm("Do you want to change your theme to Red?", "title", "buttonLabels");
  }
  $scope.greenDialog = function(){
  
  var confirmPopup = $ionicPopup.confirm({
         title: 'Change your Theme',
         template: 'Do you want to change your theme to Green?'
      });

      confirmPopup.then(function(res) {
         if(res) {
          $scope.themeModal.hide();
              // $state.go('loginPage');

         } else {
            console.log('Not sure!');
         }
      });
    // confirm("Do you want to change your theme to Green?", "title", "buttonLabels");
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

      $scope.closePasswordModal = function() {
         $scope.passwordModal.hide();
      };


  $ionicModal.fromTemplateUrl('change-theme.html',{
    scope: $scope
  }).then(function(modal) {
        $scope.themeModal = modal;
      });

      $scope.openThemeModal = function() {
        $scope.themeModal.show();
      };

      $scope.closeModal = function() {
         $scope.themeModal.hide();
      };


})


