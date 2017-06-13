angular.module('bookDoctor')

.controller("guestUserController",function ($scope, $state, $stateParams, $ionicHistory, $ionicSlideBoxDelegate,$rootScope) {
    //  $scope.mystyles1 = ".slider-pager-page { color: " + '#ef473a !important' + "; }";
   
    if($rootScope.appTheme && $rootScope.combinationTheme){
       
        $scope.colorchnage =$rootScope.appTheme;
        $scope.colorchnage1 = $rootScope.combinationTheme;
        //$scope.mystyles2 = ".slider-pager-page.active { color: " + '#11c1f3'+ "; }"+".slider-pager-page { color: " + '#ef473a' + "; }";
        $scope.mystyles1 = ".slider-pager-page.active { color: " +  $rootScope.combinationTheme + "!important; }";
        $scope.mystyles2 = ".slider-pager-page { color: " +  $rootScope.appTheme + "!important; }";
    }
    else{
        $scope.mystyles1 = ".slider-pager-page.active { color: " + '#ef473a !important' + "!important; }";
        $scope.mystyles2 = ".slider-pager-page { color: " + '#11c1f3!important' + "; }";
    }
   
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