angular.module('bookDoctor')
.controller("immunizationController", function($scope, $state, $stateParams, $ionicHistory){
  $scope.profileObject = $stateParams.patientProfile;
  $scope.goBack = function() {
    // $state.go('patientProfile',{"patientProfile":$scope.profileObject});
    $ionicHistory.goBack();
  }
  $scope.patientImmunizations = [{"comments":"HEPATITIS A", "date":"19/4/2016","time":"10:33 AM"},
      {"comments":"HEPATITIS B", "date":"29/4/2016","time":"11:46 AM"}, 
      {"comments":"VARICELLA", "date":"3/5/2016","time":"12:22 PM"},
      {"comments":"POLIO", "date":"4/6/2016","time":"2:33 PM"},
      {"comments":"Fever", "date":"19/7/2016","time":"8:30 AM"},
      {"comments":"VARICELLA", "date":"29/7/2016","time":"4:33 PM"}, 
      {"comments":"HPV VACCINE", "date":"10/8/2017","time":"12:33 AM"},
      {"comments":"POLIO", "date":"20/1/2017","time":"8:27 PM"},
      {"comments":"TETANUS-DIPHTHERIA-PERTUSIS", "date":"15/2/2017","time":"6:33 PM"},
      {"comments":"HEPATITIS B", "date":"19/3/2017","time":"9:23 AM"}, 
      {"comments":"MMR", "date":"5/4/2017","time":"10:12 AM"},
      {"comments":"HEPATITIS A", "date":"13/4/2017","time":"5:33 PM"}];

  $scope.addDetails = function(immuneInfo) {
    var db;
        try {
            db = $cordovaSQLite.openDB({name:"myapp.db",location:'default'});
        } catch (error) {
            alert(error);
        }
    var month = ('0' + (immuneInfo.fullDate.getMonth() + 1)).slice(-2); //months from 1-12
    var day = ('0' + (immuneInfo.fullDate.getDate())).slice(-2);
    var year = immuneInfo.fullDate.getFullYear();
    var selectedDate = year + "/" + month + "/" + day;
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS immuneDetails (patientId TEXT, immuneDate TEXT, immuneType TEXT)');

    $cordovaSQLite.execute(db, 'INSERT INTO immuneDetails(patientId, immuneDate, immuneType) VALUES (?,?,?)', [$scope.profileObject.patientID, selectedDate, immuneInfo.vaccineType])
        .then(function(result) {
         //   $scope.statusMessage = "Message saved successful, cheers!";
             window.alert("Successfully Inserted");
             $scope.loadData();
        }, function(error) {
        //    $scope.statusMessage = "Error on saving: " + error.message;
         window.alert("Form not submitted");
        })
  }

  $scope.loadData = function() {
   
                        $scope.patientImmunizations;                        
               
  }
})