var appTheme = "#11c1f3";
var tabsTheme = "calm";
var combinationTheme = "#ef473a";
angular.module('bookDoctor')

.controller("SettingsController",function ($scope,$cordovaSQLite,$cordovaToast, $state,$rootScope,$ionicModal,$ionicHistory,$ionicPopup, $window) {

  var myOldPassword;
  $scope.goBack = function() {
   $state.go('dashboard.homeScreen');
 }

 $scope.submitNewPassword = function() {
   $state.go('dashboard.homeScreen');
 }

 $scope.goEditProfile = function() {
  $state.go('editProfile');
}

$scope.showLogoutConfirm = function(){

  var confirmPopup = $ionicPopup.confirm({
   title: 'Logout',
   template: 'Are you want to logout?'
 });

  confirmPopup.then(function(res) {
   if(res) {          
    $state.go('loginPage');
    $ionicHistory.clearHistory();
    
  } else {
    console.log('Not sure!');
  }
});
}

$scope.themeArray=["Default","Yellow","Red","Green"];

$scope.openThemeDialog = function(theme){
  var confirmPopup = $ionicPopup.confirm({
   title: 'Change your Theme',
   template: 'Do you want to change your theme to '+theme+'?',
   cssClass:'style'
 });
  confirmPopup.then(function(res) {
   if(res) {
    switch(theme){
      case 'Yellow' :
      $scope.appTheme = '#ffc900';
      $scope.tabsTheme = "energized";
      $scope.combinationTheme = "#7c6262";
      break;
      case 'Red' :
      $scope.appTheme = '#ef473a';
      $scope.tabsTheme = "assertive";
      $scope.combinationTheme = "#11c1f3";
      break;
      case 'Green' :
      $scope.appTheme = '#33cd5f';
      $scope.tabsTheme = "balanced";
      $scope.combinationTheme = "#cd3571";
      break;
      default :
      $scope.appTheme = '#11c1f3';
      $scope.tabsTheme = "calm";
      $scope.combinationTheme = "#ef473a";
      break;
    }
    $rootScope.appTheme = $scope.appTheme;
    $rootScope.tabsTheme = $scope.tabsTheme;
    $rootScope.combinationTheme = $scope.combinationTheme;
    $scope.themeModal.hide();

  } else {
    console.log('Not sure!');
  }
});
}

  $ionicModal.fromTemplateUrl('password-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.passwordModal = modal;
  });

  $scope.openPasswordModal = function() {
    $scope.fetchPassword();
    console.log(myOldPassword);
    $scope.passwordModal.show();

  };

  $scope.closePasswordModal = function(event) {
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

/* Read user password from DB*/
$scope.fetchPassword = function() {
  var db;

  try {
    db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});   
  } catch (error) {
    alert(error);
  }
  
        // Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, 'SELECT * FROM signUpPatientDetails')
        .then(
          function(res) {
            var arr = [];
            if (res.rows.length > 0) {
              for (var i =0; i < res.rows.length; i++) {
                arr.push(res.rows.item(i));
              }
              console.log(arr);                        
              myOldPassword = arr[0].password;
              
            }
          },
          function(error) {
                    // window.alert(error.message);
                  }
                  );
      }


      /* Update user password from DB*/
      $scope.updatePassword = function(newPassword) {
        var db;

        try {
          db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});   
        } catch (error) {
          alert(error);
        }
        
        // Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, "UPDATE signUpPatientDetails SET password ='" + newPassword + "' WHERE patient_id='123'")
        .then(
          function(result) {

           var confirmPopup = $ionicPopup.alert({
             title: 'BookDoctor!!',
             template: 'You have successfully Password updated!'
           });

           confirmPopup.then(function(res) {
             if(res) {
              $scope.closePasswordModal();
              $scope.passwordModal.hide();
              $ionicHistory.clearHistory();
              
            } else {
             console.log('Not sure!');
           }
         });
         },
         function(error) {
                    // window.alert(error.message);
                  }
                  );
      }

      $scope.validatePassword = function(data){
        var alertPopup;
        if(data.oldPassword === myOldPassword){ 
          if(data.newPassword === data.confPassword){
            $scope.updatePassword(data.newPassword);
          }else{
           alertPopup = $ionicPopup.alert({
            title: 'BookDoctor!',
            template: 'Password missmatched'
          });
           alertPopup.then(function(res) {
             console.log('password missmatched');
           });
         }
       }else{
         alertPopup = $ionicPopup.alert({
          title: 'BookDoctor!',
          template: 'Old password is incorrect'
        });
         alertPopup.then(function(res) {
           console.log('Old password is incorrect');
         });
       }
     }

     $scope.openHelpScreen = function(){
      $state.go('guestUserScreen',{'fromWhere':'Help'});
    }
  })

.filter('inSlicesOf', 
    ['$rootScope',  
    function($rootScope) {
      makeSlices = function(items, count) { 
        if (!count)            
          count = 3;
        
        if (!angular.isArray(items) && !angular.isString(items)) return items;
        
        var array = [];
        for (var i = 0; i < items.length; i++) {
          var chunkIndex = parseInt(i / count, 10);
          var isFirst = (i % count === 0);
          if (isFirst)
            array[chunkIndex] = [];
          array[chunkIndex].push(items[i]);
        }

        if (angular.equals($rootScope.arrayinSliceOf, array))
          return $rootScope.arrayinSliceOf;
        else
          $rootScope.arrayinSliceOf = array;
          
        return array;
      };
      
      return makeSlices; 
    }]
  )