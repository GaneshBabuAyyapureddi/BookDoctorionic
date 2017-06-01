angular.module('bookDoctor')

.controller("guestUserController",function ($scope, $state, $stateParams, $ionicHistory, $ionicSlideBoxDelegate) {

    $scope.title=$stateParams.fromWhere;
  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.images = $scope.images = ["img/LoginScreen.jpg","img/SignupScreen.jpg","img/ForgotPassword.jpg",
                    "img/HomeScreenAppointments.jpg",
                     "img/HomeScreenCalendar.jpg",
                     "img/DoctorSearchScreen.jpg",
                     "img/DoctorSearchFilter.jpg",
                     "img/DoctorProfile.jpg",
                     "img/DoctorRatings.jpg",
                     "img/PatientProfileTabs.jpg",
                     "img/PatientLabReports.jpg",
                     "img/SettingsScreen.jpg",
                     "img/ChangePassword.jpg",
                     "img/ChangeThemeScreen.jpg",
     
    					];
            setTimeout(function() {
                $ionicSlideBoxDelegate.slide(0);
                $ionicSlideBoxDelegate.update();
                $scope.$apply();
            });

});