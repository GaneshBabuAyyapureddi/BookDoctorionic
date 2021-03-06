// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('bookDoctor', ['ionic', 'ui.router','chart.js','ui.calendar', 'ionic-ratings','ngCordova'])

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
  $ionicConfigProvider.navBar.alignTitle('center');

  $stateProvider
  .state('dashboard',{
    url: '/dashboard',              
    abstract: true,
    templateUrl: 'Modules/Templates/Menu.html',
    controller: 'MenuController'     
  })

  .state('dashboard.homeScreen', {
    url: '/homeScreen',  
    views: {
      'menuContent': {
        templateUrl: 'Modules/Templates/Home.html',
        controller: 'HomeController'
      }
    }                                  
  })
  
  .state('dashboard.doctorSearch', {
    url:'/doctorSearch', 
    views: {
      'menuContent': {
        templateUrl: 'Modules/Templates/DoctorSearch.html',
        controller:'doctorSearchController'
      }
    }                  
    
  }) 
  .state('dashboard.buyMedicine', {
    url:'/buyMedicine', 
    views: {
      'menuContent': {
        templateUrl: 'Modules/Templates/BuyMedicine.html',
        controller:'BuyMedicineController'
      }
    }                  
    
  }) 

  .state('loginPage', {
    url: '/loginPage',
    templateUrl: 'Modules/Templates/Login.html',
    controller: 'loginController'
  })
  
  .state('signupScreen',{
    url: '/signupScreen',
    cache: false,
    templateUrl: 'Modules/Templates/Signup.html',
    controller: 'signupController'
  })

  .state('forgotPassword', {
    url:'forgotPassword', 
    cache: false,              
    templateUrl: 'Modules/Templates/forgotPassword.html',
    controller:'forgotPasswordController'
  }) 

  .state('doctorProfile', {
    url:'/doctorProfile',
    cache:false,
    params: {
      'doctorProfile': null
    },          
    templateUrl: 'Modules/Templates/DoctorProfile.html',
    controller:'DoctorProfileController'
  })
  .state('tabs', {
    url: '/tab',
    abstract: true,
    templateUrl: 'Modules/Templates/tabMenu.html',
    controller: 'MenuController' 
  })
  
  .state('tabs.patientProfile', {
   url: '/PatientProfile',
   views: {
    
    'PatientProfile-tab': {
      templateUrl: 'Modules/Templates/PatientProfile.html',
      controller:'PatientProfileController'
    }
  }             
})
  .state('tabs.HistoryChart', {
   url: '/HistoryChart',
   views: {
    'HistoryChart-tab': {
      templateUrl: 'Modules/Templates/HistoryChart.html',
      controller:'HistoryChartController'
    }
  }
})

  .state('tabs.Allergies', {
   url: '/Allergies',
   views: {
    'Allergies-tab': {
      templateUrl: 'Modules/Templates/Allergies.html',
      controller:'allergiesController'
    }
  }
})
  .state('tabs.LabResults', {
   url: '/LabResults',
   views: {
    'LabResults-tab': {
      templateUrl: 'Modules/Templates/LabResults.html',
      controller:'labResultsController'
    }
  }
})
  .state('tabs.Immunization', {
   url: '/Immunization',
   views: {
    'Immunization-tab': {
      templateUrl: 'Modules/Templates/Immunization.html',
      controller:'immunizationController'
    }
  }
})
  .state('tabs.Prescription', {
   url: '/Prescription',
   cache: false,
   views: {
    'Prescription-tab': {
      templateUrl: 'Modules/Templates/Prescription.html',
      controller:'PrescriptionController'
    }
  }
})
  
  .state('dashboard.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'Modules/Templates/Settings.html',
        controller: 'SettingsController'
      }
    }
  })
  .state('rateUsScreen', {
    url:'rateUsScreen',        
    params: {
     'selectedDate': 'Doctor'
   },       
   templateUrl: 'Modules/Templates/rateUs.html',
   controller:'rateUsController'
 }) 
  .state('guestUserScreen', {
    url:'guestUserScreen',    
    params: {
     'fromWhere': 'Help'
   },            
   templateUrl: 'Modules/Templates/guestUser.html',
   controller:'guestUserController'
 }) 
  .state('editProfile', {
    url:'editProfile',
    templateUrl: 'Modules/Templates/EditProfile.html',
    controller:'EditProfileController'
  })  
  
  $urlRouterProvider.otherwise('/loginPage');
})

