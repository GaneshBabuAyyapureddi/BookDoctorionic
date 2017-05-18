angular.module('bookDoctor')

.controller("signupController",function ($scope, $state,  $cordovaSQLite, $ionicHistory) {
 
  $scope.submit = function(username) {
 
        alert("Thanks " + username);
 
    }

     $scope.goBack = function() {
     $state.go('loginPage');
    //$ionicHistory.goBack();
  }

  $scope.goToSignUpConfirm = function(form,signUpDetails) {

    if(form.$valid) {
     console.log('Image URI: expected'+signUpDetails.fullname+ ' '+signUpDetails.mail);   // Print image URI
      var db;
        try {
            db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});
        } catch (error) {
            alert(error);
        }
        
$cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS signUpPatientDetails (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, mail TEXT, password TEXT, patient_id INTEGER,code INTEGER, mobile TEXT,emergency_mobile TEXT,Age TEXT,DOB TEXT, BloodGroup TEXT, Address TEXT, Street TEXT, Locality TEXT,City TEXT,Gender TEXT)');


       $cordovaSQLite.execute(db, 'INSERT INTO signUpPatientDetails(name, mail, password, patient_id, code, mobile, emergency_mobile, Age, DOB, BloodGroup, Address, Street, Locality, City,Gender) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [signUpDetails.fullname,signUpDetails.mail,signUpDetails.password,signUpDetails.PatientId,signUpDetails.code,signUpDetails.Primarymobileno,signUpDetails.secondarymobileno,signUpDetails.age,signUpDetails.dob,signUpDetails.bloodgroup,signUpDetails.address,signUpDetails.street,signUpDetails.locality,signUpDetails.city,signUpDetails.gender])
            .then(function(result) {
             //   $scope.statusMessage = "Message saved successful, cheers!";
                 alert("Signup done successfully");
            }, function(error) {
            //    $scope.statusMessage = "Error on saving: " + error.message;
             alert(error.message);
            })
          }else
    console.log("error");

  };

});