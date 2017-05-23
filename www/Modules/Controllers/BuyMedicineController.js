angular.module('bookDoctor')
.controller("BuyMedicineController",function ($scope, $state, $stateParams, $ionicHistory) {
	$scope.goBack = function() {
    // $ionicHistory.goBack();
    	$state.go('dashboard.homeScreen');
   }
   $scope.buyMedicineList = [{"patientName":"Paracetamol"},{"patientName":"Trapic"},{"patientName":"Paracetamol"}];
   $scope.patientSelected = function(patientObject) {
    console.log(patientObject);
    //$state.go('patientProfile', {"patientProfile":patientObject});
  }
})