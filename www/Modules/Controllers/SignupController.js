angular.module('bookDoctor')

.controller("signupController",function ($scope, $state,  $cordovaSQLite, $ionicHistory, $cordovaCamera, $ionicActionSheet,$ionicPopup) {
   $scope.imgURI="img/AddProfileIcon.png";
   $scope.selectedGenderPlaceHolderVal = "Gender";
   $scope.id = "name";

  $scope.submit = function(username) {
 
        alert("Thanks " + username);
 
    }

     $scope.goBack = function() {
     $state.go('loginPage');
    //$ionicHistory.goBack();
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
                  

  $scope.goToSignUpConfirm = function(form,signUpDetails) {
   //alert(signUpDetails.selectedGenderVal)

    if(form.$valid) {
     console.log('Image URI: expected'+signUpDetails.fullname+ ' '+signUpDetails.mail); 
       // Print image URI
         
      var db;
        try {
            db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});
        } catch (error) {
            alert(error);
        }


        
$cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS signUpPatientDetails (id INTEGER PRIMARY KEY AUTOINCREMENT, imageUrl TEXT, name TEXT, mail TEXT, password TEXT, patient_id INTEGER,code INTEGER, mobile TEXT,emergency_mobile TEXT,Age TEXT,DOB TEXT, BloodGroup TEXT, Address TEXT, Street TEXT, Locality TEXT,City TEXT,Gender TEXT)');


       $cordovaSQLite.execute(db, 'INSERT INTO signUpPatientDetails(imageUrl,name, mail, password, patient_id, code, mobile, emergency_mobile, Age, DOB, BloodGroup, Address, Street, Locality, City,Gender) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [$scope.imgURI,signUpDetails.fullname,signUpDetails.mail,signUpDetails.password,signUpDetails.PatientId,signUpDetails.code,signUpDetails.Primarymobileno,signUpDetails.secondarymobileno,signUpDetails.age,signUpDetails.dob,signUpDetails.bloodgroup,signUpDetails.address,signUpDetails.street,signUpDetails.locality,signUpDetails.city,signUpDetails.gender])
            .then(function(result) {
             //   $scope.statusMessage = "Message saved successful, cheers!";
                // alert("Signup done successfully");
          var confirmPopup = $ionicPopup.alert({
              title: 'BookDoctor!',
               template: 'Signup done successfully !'
            });

            confirmPopup.then(function(res) {
                if(res) {
                    $state.go('loginPage');
                    $ionicHistory.clearHistory();
                 } else {
                    console.log('Not sure!');
                  }
            });

      }, function(error) {
            //    $scope.statusMessage = "Error on saving: " + error.message;
             alert(error.message);
            })
          }else
    console.log("error");

  };
  /* Change Gender drop down */
  $scope.OnSelectedGenderChange = function(selectedGenderVal){
   $scope.selectedGenderVal = selectedGenderVal;
  angular.element(document.getElementById($scope.id)).addClass("textplaceholdercoloractive");
  }


  

});