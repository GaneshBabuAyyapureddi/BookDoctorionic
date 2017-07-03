angular.module('bookDoctor')
.controller("BuyMedicineController",function ($scope, $state, $ionicHistory, $cordovaCamera, $ionicActionSheet, $ionicPopup,$http) {
  $scope.searchText = {};
  $scope.selectedMedicine = '';
  $scope.imageURI = '';
  $scope.goBack = function() {
   $state.go('dashboard.homeScreen');
 }
 $http.get('assets/medicines.json')
 .success(function(obj) {
  $scope.medicineList = obj;
  
})
 .error(function(error) {
  console.log('could not find medicines.json '+error);
  alert("ERROR!");
});
 
 $scope.patientSelected = function(patientObject,patientruppee) {
  $scope.searchText.tabletName = patientObject+"     "+patientruppee;
  $scope.prescriptionList = [];
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