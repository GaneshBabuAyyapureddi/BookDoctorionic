angular.module('bookDoctor')
.controller("BuyMedicineController",function ($scope, $state, $stateParams, $ionicHistory, $cordovaCamera, $ionicActionSheet, $ionicPopup) {
  $scope.searchText = {};
  $scope.selectedMedicine = '';
  $scope.imageURI = '';
	$scope.goBack = function() {
    // $ionicHistory.goBack();
    	$state.go('dashboard.homeScreen');
   }
    $scope.prescriptionList = [
   {  
      "tabletName":"NEUROBEX B TABLET 10'S",
      "tabletPrice":"Rs 14",
      "tabletAvailable":true
   },
   {  
      "tabletName":"PARACIP 500MG TABLET 10'S",
      "tabletPrice":"Rs.8.71",
      "tabletAvailable":true
   },
   {  
      "tabletName":"GLUCORED FORTE TABLET 10'S",
      "tabletPrice":"Rs.37.00",
      "tabletAvailable":false
   },
   {  
      "tabletName":"TRIGABANTIN 100MG TABLET 10'S",
      "tabletPrice":"Rs.121.00",
      "tabletAvailable":true
   }, 
   {  
      "tabletName":"NEUROPILL TABLET 10'S",
      "tabletPrice":"Rs.175.40",
      "tabletAvailable":true
   },
   {  
      "tabletName":"FOLIACT N TABLET 10'S",
      "tabletPrice":"Rs.118.75",
      "tabletAvailable":true
   },
   {  
      "tabletName":"LENALID 10MG CAPSULE 30'S",
      "tabletPrice":"Rs.8976",
      "tabletAvailable":false
   },
   {  
      "tabletName":"GOUTNIL 0.5MG TABLET 10'S",
      "tabletPrice":"Rs.30.38",
      "tabletAvailable":true
   },
   {  
      "tabletName":"ELMEFOL 1MG TABLET 10'S",
      "tabletPrice":"Rs.80",
      "tabletAvailable":true
   },
   {  
      "tabletName":"BIOFOLIC 1MG TABLET 10'S",
      "tabletPrice":"Rs.59",
      "tabletAvailable":true
   },
   {  
      "tabletName":"ELFOLIN 7.5MG TABLET 10'S",
      "tabletPrice":"Rs.104.00",
      "tabletAvailable":false
   },
   {  
      "tabletName":"REDIHEALTH TABLET 15'S",
      "tabletPrice":"Rs.97.95",
      "tabletAvailable":true
   },
   {  
      "tabletName":"VEGEFER TABLET 10'S",
      "tabletPrice":"Rs.81.99",
      "tabletAvailable":true
   },
   {  
      "tabletName":"COBESE 120MG CAPSULE 10'S",
      "tabletPrice":"Rs.546.00",
      "tabletAvailable":true
   },
   {  
      "tabletName":"LIPOCUT 120MG CAPSULE 10'S",
      "tabletPrice":"Rs.449.50",
      "tabletAvailable":true
   },
   {  
      "tabletName":"LIPOPHAGE 60MG CAPSULE 10'S",
      "tabletPrice":"Rs.207.20",
      "tabletAvailable":false
   },
   {  
      "tabletName":"LIPOPHAGE 120MG CAPSULE 10'S",
      "tabletPrice":"Rs.414.20",
      "tabletAvailable":true
   },
   {  
      "tabletName":"O STAT 120MG CAPSULE 10'S",
      "tabletPrice":"Rs.335.00",
      "tabletAvailable":true
   },
   {  
      "tabletName":"OBESTAT 10MG CAPSULE 10'S",
      "tabletPrice":"Rs.167.77",
      "tabletAvailable":true
   },
   {  
      "tabletName":"OBEZITA 60MG CAPSULE 10'S",
      "tabletPrice":"Rs.171.89",
      "tabletAvailable":false
   },
   {  
      "tabletName":"ADRIDE 4MG TABLET 10'S",
      "tabletPrice":"Rs.40.20",
      "tabletAvailable":true
   },
   {  
      "tabletName":"POZITIV 7.5MG TABLET 10'S",
      "tabletPrice":"Rs.38.84",
      "tabletAvailable":true
   },
   {  
      "tabletName":"HILGLIM 2MG TABLET 10'S",
      "tabletPrice":"Rs.55.00",
      "tabletAvailable":true
   },
   {  
      "tabletName":"REBOSE 100MG TABLET 10'S",
      "tabletPrice":"Rs.57.00",
      "tabletAvailable":false
   },
   {  
      "tabletName":"REJUMET TABLET 10'S",
      "tabletPrice":"Rs.60.00",
      "tabletAvailable":true
   }
   ];
   
   $scope.patientSelected = function(patientObject,patientruppee) {
    $scope.searchText.tabletName = patientObject+"     "+patientruppee;
    $scope.prescriptionList = [];
    }
    $scope.OnTextChange = function(){
      $scope.prescriptionList = [
   {  
      "tabletName":"NEUROBEX B TABLET 10'S",
      "tabletPrice":"Rs 14",
      "tabletAvailable":true
   },
   {  
      "tabletName":"PARACIP 500MG TABLET 10'S",
      "tabletPrice":"Rs.8.71",
      "tabletAvailable":true
   },
   {  
      "tabletName":"GLUCORED FORTE TABLET 10'S",
      "tabletPrice":"Rs.37.00",
      "tabletAvailable":false
   },
   {  
      "tabletName":"TRIGABANTIN 100MG TABLET 10'S",
      "tabletPrice":"Rs.121.00",
      "tabletAvailable":true
   }, 
   {  
      "tabletName":"NEUROPILL TABLET 10'S",
      "tabletPrice":"Rs.175.40",
      "tabletAvailable":true
   },
   {  
      "tabletName":"FOLIACT N TABLET 10'S",
      "tabletPrice":"Rs.118.75",
      "tabletAvailable":true
   },
   {  
      "tabletName":"LENALID 10MG CAPSULE 30'S",
      "tabletPrice":"Rs.8976",
      "tabletAvailable":false
   },
   {  
      "tabletName":"GOUTNIL 0.5MG TABLET 10'S",
      "tabletPrice":"Rs.30.38",
      "tabletAvailable":true
   },
   {  
      "tabletName":"ELMEFOL 1MG TABLET 10'S",
      "tabletPrice":"Rs.80",
      "tabletAvailable":true
   },
   {  
      "tabletName":"BIOFOLIC 1MG TABLET 10'S",
      "tabletPrice":"Rs.59",
      "tabletAvailable":true
   },
   {  
      "tabletName":"ELFOLIN 7.5MG TABLET 10'S",
      "tabletPrice":"Rs.104.00",
      "tabletAvailable":false
   },
   {  
      "tabletName":"REDIHEALTH TABLET 15'S",
      "tabletPrice":"Rs.97.95",
      "tabletAvailable":true
   },
   {  
      "tabletName":"VEGEFER TABLET 10'S",
      "tabletPrice":"Rs.81.99",
      "tabletAvailable":true
   },
   {  
      "tabletName":"COBESE 120MG CAPSULE 10'S",
      "tabletPrice":"Rs.546.00",
      "tabletAvailable":true
   },
   {  
      "tabletName":"LIPOCUT 120MG CAPSULE 10'S",
      "tabletPrice":"Rs.449.50",
      "tabletAvailable":true
   },
   {  
      "tabletName":"LIPOPHAGE 60MG CAPSULE 10'S",
      "tabletPrice":"Rs.207.20",
      "tabletAvailable":false
   },
   {  
      "tabletName":"LIPOPHAGE 120MG CAPSULE 10'S",
      "tabletPrice":"Rs.414.20",
      "tabletAvailable":true
   },
   {  
      "tabletName":"O STAT 120MG CAPSULE 10'S",
      "tabletPrice":"Rs.335.00",
      "tabletAvailable":true
   },
   {  
      "tabletName":"OBESTAT 10MG CAPSULE 10'S",
      "tabletPrice":"Rs.167.77",
      "tabletAvailable":true
   },
   {  
      "tabletName":"OBEZITA 60MG CAPSULE 10'S",
      "tabletPrice":"Rs.171.89",
      "tabletAvailable":false
   },
   {  
      "tabletName":"ADRIDE 4MG TABLET 10'S",
      "tabletPrice":"Rs.40.20",
      "tabletAvailable":true
   },
   {  
      "tabletName":"POZITIV 7.5MG TABLET 10'S",
      "tabletPrice":"Rs.38.84",
      "tabletAvailable":true
   },
   {  
      "tabletName":"HILGLIM 2MG TABLET 10'S",
      "tabletPrice":"Rs.55.00",
      "tabletAvailable":true
   },
   {  
      "tabletName":"REBOSE 100MG TABLET 10'S",
      "tabletPrice":"Rs.57.00",
      "tabletAvailable":false
   },
   {  
      "tabletName":"REJUMET TABLET 10'S",
      "tabletPrice":"Rs.60.00",
      "tabletAvailable":true
   }
   ];
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
   $scope.BuyEnableandDisable = function(){
    $scope.buyValue = true;
    if($scope.searchText.tabletName != null){
      $scope.buyValue = false;
      return  $scope.buyValue;
    }
    return $scope.buyValue;
   }
    $scope.closeModal = function(){
      var confirmPopup = $ionicPopup.alert({
              title: 'Buy Medicine!',
               template: 'Your Medince has been submitted successfully" !'
            });

            confirmPopup.then(function(res) {
                if(res) {
                  $scope.searchText.tabletName = '';
                  $scope.imageURI = '';
                  $ionicHistory.goBack();
                 } else {
                    console.log('Not sure!');
                  }
            });


      };
  
})