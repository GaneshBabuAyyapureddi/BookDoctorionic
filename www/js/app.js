// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('bookDoctor', ['ionic', 'ui.router','ui.calendar','ui.bootstrap', 'ionic-ratings'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.views.swipeBackEnabled(false);
  $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
  $ionicConfigProvider.tabs.style("standard");
        $stateProvider
            .state('loginPage', {
                url: '/loginPage',
                templateUrl: 'Modules/Templates/Login.html',
                controller: 'loginController'
            })
            .state('homeScreen',{
              url: '/homeScreen',
                templateUrl: 'Modules/Templates/Home.html',
                controller: 'homeController'
            })
            .state('signupScreen',{
              url: '/signupScreen',
                templateUrl: 'Modules/Templates/Signup.html',
                controller: 'signupController'
            })
           .state('generalProfile', {
                url:'/generalProfile',               
                templateUrl: 'Modules/Templates/GeneralPatientProfile.html',
                controller:'generalPatientProfileController'
            })
            .state('doctorSearch', {
                url:'/doctorSearch',               
                templateUrl: 'Modules/Templates/DoctorSearch.html',
                controller:'doctorSearchController'
            }) 
           .state('doctorProfile', {
                url:'/doctorProfile',               
                templateUrl: 'Modules/Templates/Profile.html',
                controller:'ProfileController'
            })
        $urlRouterProvider.otherwise('/loginPage');
})

