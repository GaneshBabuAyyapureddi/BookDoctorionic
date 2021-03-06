angular.module('bookDoctor')

.controller("loginController",function ($scope,$cordovaSQLite, $state,$rootScope,$ionicPopup) {
  $rootScope.appTheme = "#11c1f3";
  $rootScope.tabsTheme="calm";
  $rootScope.combinationTheme = "#ef473a";
  
  $scope.goToHomeScreen = function() {
    $state.go('dashboard.homeScreen');
  }
  
  $scope.goToSignup = function() {
    $state.go('signupScreen');
  }

  $scope.goToForgotPassword = function() {
    $state.go('forgotPassword');
  }
  $scope.loadguestPage = function() {
    $state.go('guestUserScreen',{'fromWhere':'Guest User'});
  }
  $scope.load = function(username,pass) {
   if(username === "demouser")
   {
    $state.go('dashboard.homeScreen');
  }
  else
  {
   
    var db;

    try {
      db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});
      
    } catch (error) {
      alert(error);
    }
                   // Execute SELECT statement to load message from database.
           //        db, "SELECT ? AS amount, ? AS salary", [var_amount, var_salary])
           $cordovaSQLite.execute(db, "SELECT * FROM signUpPatientDetails where name = ?",[username])
           .then(
            function(res) {

              if (res.rows.length > 0) {

                $scope.newMessage = res.rows.item(0).name;
                for (var i =0; i < res.rows.length; i++) {
                  console.log('result array'+ res.rows.item(i).name);
                  
                  if (pass === res.rows.item(i).password) {
                    $rootScope.myusername = res.rows.item(0).name;
                    $scope.statusMessage = "Message loaded successful, cheers!"+res.rows.item(0).name;
                    $scope.onLoginSuccess(res.rows.item(0).name);
                    
                  }else
                  {
                    $scope.onLoginFailure("Invalid password");
                  }
                }
              }
              else
              {
                $scope.onLoginFailure("Invalid username");
              }
            },
            function(error) {
              $scope.statusMessage = "Error on loading: " + error.message;
                                          // $scope.goToPatientSearch(username);
                                         // window.alert("Invalid username/password");
                                         $scope.onLoginFailure("Invalid username/password");
                                       }
                                       );
         }
       }

       $scope.onLoginSuccess = function(name){
         var alertPopup = $ionicPopup.alert({
           title: 'BookDoctor',
           template: 'You have successfully logged in '+name+' !'
         });

         alertPopup.then(function(res) {
          $state.go('dashboard.homeScreen');
        });
       }
       $scope.onLoginFailure = function(message){
        var alertPopup = $ionicPopup.alert({
          title: 'BookDoctor',
          template: message
        })
        alertPopup.then(function(res){

        });
      }
    })