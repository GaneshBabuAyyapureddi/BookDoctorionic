angular.module('bookDoctor')
.controller("EditProfileController", function($scope, $state,$rootScope, $ionicHistory,$cordovaSQLite,$cordovaCamera, $ionicActionSheet,$ionicPopup){
 $scope.editprofileobject = {};
  $scope.imgURI="img/AddProfileIcon.png";
  $scope.goBack = function() {
    // $state.go('settings');
    $ionicHistory.goBack();
  }
 $scope.getPhoto = function() {       
         // Show the action sheet
      var showActionSheet = $ionicActionSheet.show({
         buttons: [
        { text: '<i class="icon ion-camera"></i> Take Photo' },
        { text: '<i class="icon ion-image"></i> Open Gallery' },
        ],
         destructiveText: 'Cancel',
         titleText: 'Upload Photo',
      
         buttonClicked: function(index) {
            if(index === 0) {
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                    return true;
            }

        
            if(index === 1) {
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                    return true;
            }
         },
          destructiveButtonClicked: function() {
            return true;
         }

      });
   }
   
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