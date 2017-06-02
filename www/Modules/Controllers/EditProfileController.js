angular.module('bookDoctor')
.controller("EditProfileController", function($scope, $state,$rootScope, $ionicHistory,$cordovaSQLite){
 $scope.editprofileobject = {};
  $scope.goBack = function() {
    // $state.go('settings');
    $ionicHistory.goBack();
  }

   var db;
        try {
            db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});
        } catch (error) {
            alert(error);
        }

         $cordovaSQLite.execute(db, "SELECT * FROM signUpPatientDetails where name = ?",[$rootScope.myusername])
                  .then(
                function(res) {

                    if (res.rows.length > 0) {

                        for (var i =0; i < res.rows.length; i++) {
                          
        				$scope.editprofileobject.imageUrl = res.rows.item(0).imageUrl;
                        $scope.editprofileobject.name = res.rows.item(0).name;
                        $scope.editprofileobject.mail = res.rows.item(0).mail;
                        $scope.editprofileobject.mobile = res.rows.item(0).mobile;
                        $scope.editprofileobject.patient_id = res.rows.item(0).patient_id;
                       	$scope.editprofileobject.age = res.rows.item(0).Age;
                        $scope.editprofileobject.gender = res.rows.item(0).Gender;
                        $scope.editprofileobject.dob = res.rows.item(0).DOB;
                        $scope.editprofileobject.bloodGroup = res.rows.item(0).BloodGroup;
                        $scope.editprofileobject.address = res.rows.item(0).Address;
                    	}
                    }
                    else
                      {
                         window.alert("Invalid username");
                      }
                },
                function(error) {
                    $scope.statusMessage = "Error on loading: " + error.message;
          
                        window.alert("Invalid username/password");
                }
            );

})