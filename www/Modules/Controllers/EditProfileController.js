angular.module('bookDoctor')
.controller("EditProfileController", function($scope, $state,$rootScope, $ionicHistory,$cordovaSQLite, $cordovaImagePicker, $ionicPopup){
 $scope.editprofileobject = {};
  $scope.goBack = function() {
    // $state.go('settings');
    $ionicHistory.goBack();
  }
 $scope.getPhoto = function() {       
        // Image picker will load images according to these settings
    var options = {
        maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
        width: 800,
        height: 800,
        quality: 80            // Higher is better
    };
 
    $cordovaImagePicker.getPictures(options).then(function (results) {
                // Loop through acquired images
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);   // Print image URI
        }
    }, function(error) {
        console.log('Error: ' + JSON.stringify(error));    // In case of error
    });

};
   var db;
        try {
            db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});
        } catch (error) {
           // alert(error);
            $scope.showPopup(error);
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
                         //window.alert("Invalid username");
                          $scope.showPopup('Invalid username');
                      }
                },
                function(error) {
                    $scope.statusMessage = "Error on loading: " + error.message;
          
                       // window.alert("Invalid username/password");
                        $scope.showPopup('Invalid username/password');
                }
            );


 $scope.goToEditConfirm = function(editDetails) {
 
//     console.log('Image URI: expected'+signUpDetails.fullname+ ' '+signUpDetails.mail);   // Print image URI
      var db;
        try {
            db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});
        } catch (error) {
           // alert(error);
            $scope.showPopup(error);
        }
        
       $cordovaSQLite.execute(db, 'UPDATE signUpPatientDetails SET mail = (?), mobile = (?), age = (?), gender = (?), dob = (?), bloodGroup = (?), address = (?)  WHERE name = (?) ', [editDetails.mail,editDetails.mobile,editDetails.age,editDetails.gender,editDetails.dob,editDetails.bloodGroup,editDetails.address,editDetails.fullname])
            .then(function(result) {
             //   $scope.statusMessage = "Message saved successful, cheers!";
                // alert("update profile details done successfully");
                 $scope.showPopup('update profile details done successfully');
            }, function(error) {
            //    $scope.statusMessage = "Error on saving: " + error.message;
            // alert("Form not submitted");
            $scope.showPopup('Form not submitted');
            })
         
  }


$scope.showPopup = function(message){
  var alertPopup = $ionicPopup.alert({
    title: 'BookDoctor',
    template: message
  })
  alertPopup.then(function(res){

  });
}


})