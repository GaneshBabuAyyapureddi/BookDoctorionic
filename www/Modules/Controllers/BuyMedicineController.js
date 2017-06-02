angular.module('bookDoctor')
.controller("BuyMedicineController",function ($scope, $state, $stateParams, $ionicHistory, $cordovaCamera, $ionicActionSheet) {
  $scope.searchText = {};
  $scope.selectedMedicine = '';
  $scope.imageURI = '';
	$scope.goBack = function() {
    // $ionicHistory.goBack();
    	$state.go('dashboard.homeScreen');
   }
   $scope.patientsList = [{  
      "patientID":"PE458",
      "patientName":"Peter",
      "dateOfBirth":"01-May-1985",
      "age":"31",
      "street": "Downtown",
      "city":"Atlanta",
      "address":"No 8, abc Avenue, Houston-12",
      "profilePic":"img/Mark.jpeg",
      "gender":"Male",
      "bloodGroup":"B+",
      "mobileNumber":5551234567,
      "emailID":"peter@doctorapp.com"
   },
   {  
      "patientID":"JA985",
      "patientName":"James",
      "dateOfBirth":"15-Mar-1995",
      "age": "22",
      "street": "Lake 90",
      "city":"NewJersey",
      "address":"No 3,obama Avenue , Houston-1",
      "profilePic":"img/Steve.jpg",
      "gender":"Male",
      "bloodGroup":"A-",
      "mobileNumber":5553213972,
      "emailID":"james@doctorapp.com"
   },
   {  
      "patientID":"SA236",
      "patientName":"Samson",
      "dateOfBirth":"10-Sep-1987",
      "age": "30",
      "street": "Downtown",
      "city":"Atlanta",
      "address":"No 5,red block, redhills , San Fransisco -500",
      "profilePic":"img/Bill.jpeg",
      "gender":"Male",
      "bloodGroup":"B+",
      "mobileNumber":5551230185,
      "emailID":"samson@doctorapp.com"
   }];
   $scope.patientSelected = function(patientObject) {
    $scope.searchText.patientName = patientObject;
    $scope.patientsList = [];
    }
    $scope.OnTextChange = function(){
       $scope.patientsList = [{  
      "patientID":"PE458",
      "patientName":"Peter",
      "dateOfBirth":"01-May-1985",
      "age":"31",
      "street": "Downtown",
      "city":"Atlanta",
      "address":"No 8, abc Avenue, Houston-12",
      "profilePic":"img/Mark.jpeg",
      "gender":"Male",
      "bloodGroup":"B+",
      "mobileNumber":5551234567,
      "emailID":"peter@doctorapp.com"
   },
   {  
      "patientID":"JA985",
      "patientName":"James",
      "dateOfBirth":"15-Mar-1995",
      "age": "22",
      "street": "Lake 90",
      "city":"NewJersey",
      "address":"No 3,obama Avenue , Houston-1",
      "profilePic":"img/Steve.jpg",
      "gender":"Male",
      "bloodGroup":"A-",
      "mobileNumber":5553213972,
      "emailID":"james@doctorapp.com"
   },
   {  
      "patientID":"SA236",
      "patientName":"Samson",
      "dateOfBirth":"10-Sep-1987",
      "age": "30",
      "street": "Downtown",
      "city":"Atlanta",
      "address":"No 5,red block, redhills , San Fransisco -500",
      "profilePic":"img/Bill.jpeg",
      "gender":"Male",
      "bloodGroup":"B+",
      "mobileNumber":5551230185,
      "emailID":"samson@doctorapp.com"
   }];
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
                        $scope.imageURI = "data:image/jpeg;base64," + imageData;
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
                        $scope.imageURI = "data:image/jpeg;base64," + imageData;
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
})