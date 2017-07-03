var app = angular.module('bookDoctor')

.controller("PatientProfileController", function($scope, $state, $ionicModal,$cordovaSQLite, $stateParams,$ionicHistory,$rootScope,$ionicSideMenuDelegate){
 $scope.goBack = function() {
  $state.go('dashboard.homeScreen');
}
$scope.patientDetails = [];

$scope.openMenu = function () {
 $ionicSideMenuDelegate.toggleLeft();
}

$scope.leftButtons = [{
  type: 'button-icon icon ion-navicon',
  tap: function(e) {
    $scope.toggleMenu();
  }
}];
$scope.toggleMenu = function() {
  $scope.sideMenuController.toggleLeft();
}

$scope.readData = function(){  
  var db;

  try {
    db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});
  }catch (error) {
    alert(error);
  }
               // Execute SELECT statement to load message from database.
       //        db, "SELECT ? AS amount, ? AS salary", [var_amount, var_salary])
       $cordovaSQLite.execute(db, "SELECT * FROM signUpPatientDetails where name = ?",[$rootScope.myusername])
       .then(
        function(res) {
          var arr = [];
          if (res.rows.length > 0) {                          
            for (var i =0; i < res.rows.length; i++) {
              console.log('result array'+ res.rows.item(i).name);
              arr.push(res.rows.item(i));
            }
            $scope.patientDetails = arr;

          }           
        },
        function(error) {
          $scope.statusMessage = "Error on loading: " + error.message;
                                      // $scope.goToPatientSearch(username);
                                      window.alert("Invalid username/password");
                                    }
                                    );
       
     }
     
   });