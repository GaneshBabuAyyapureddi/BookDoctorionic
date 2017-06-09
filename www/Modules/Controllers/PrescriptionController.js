angular.module('bookDoctor')
.controller("PrescriptionController", function($scope, $state,$ionicModal,$stateParams,$cordovaSQLite,$ionicHistory,$http){
	$scope.maxRows = -1;
	$scope.selectedPrescriptionObj= {};
	$scope.goBack =  function(){

		$ionicHistory.goBack();
	}

  $http.get('assets/prescriptions.json')
  .success(function(obj) {
  	$scope.prescriptionList = obj;
      
   })
  .error(function(error) {
  	console.log('could not find notifications.json '+error);
  	alert("ERROR!");
  });
  $scope.count = function() {
  	if($scope.maxRows==2){
  		$scope.maxRows = 0;
  	}else{
  		$scope.maxRows++;	
  	}
  	return $scope.maxRows;
  }
 
 $ionicModal.fromTemplateUrl('detailedPrescription.html',{
    scope: $scope,
      animation: 'rollIn'
  }).then(function(modal) {
        $scope.prescriptionModal = modal;
      });

      $scope.openDetailList = function(obj) {
        $scope.prescriptionModal.show();
        $scope.selectedPrescriptionObj = obj;
      };

      $scope.closeModal = function() {
         $scope.prescriptionModal.hide();
      };

})