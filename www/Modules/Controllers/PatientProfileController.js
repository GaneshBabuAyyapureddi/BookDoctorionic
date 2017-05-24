angular.module('bookDoctor')

.controller("PatientProfileController", function($scope, $state, $ionicModal,$cordovaSQLite, $stateParams,$ionicHistory,$rootScope, $ionicSideMenuDelegate){
     $scope.goBack = function() {
	 $state.go('dashboard.homeScreen');
    }
      $scope.patientDetails = [];
 //$scope.genearlProfileObject = [];
     $scope.genearlProfileObject =   [
      {name:"Patient Name:",value:"Peter"},
      {name:"Patient ID:",value:"PE458"},
      {name:"Gender:",value:"Male"},
      {name:"MMH ID:",value:"1122"},
      {name:"Date Of Birth:",value:"01-May-1985"},
      {name:"Age:",value:"31"},
      {name:"Blood Group:",value:"A+"}
            ];
            $scope.genearlProfileContactDetails =   [
      {name:"Primary Mobile Number:",value:"5551234567"},
      {name:"Emergency Mobile Number:",value:"5551234567"},
      {name:"Email ID:",value:"peter@doctorapp.com"} ,
      {name:"Street:",value:"Downtown"},
      {name:"City:",value:"Atlanta"},
      {name:"Address:",value:"No 8, abc Avenue, Houston-12"} //  {name:"profilePic",value:"img/Mark.jpeg"}, 
            ];
$scope.readData = function(){

  
    var db;

         try {
            db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});
   
        } catch (error) {
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


})
