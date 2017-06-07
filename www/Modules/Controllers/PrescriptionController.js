angular.module('bookDoctor')
.controller("PrescriptionController", function($scope, $state,$ionicModal,$stateParams,$cordovaSQLite,$ionicHistory,$http){
 
  
  $scope.goBack =  function(){
  
   $ionicHistory.goBack();
  }

  //$http.get('assets/prescriptions.json')

$http.get('assets/prescriptions.json')
    .success(function(obj) {
       $scope.prescriptionList = obj;
       //console.log('data in json :: '+JSON.stringify(obj));
     
   })
   .error(function(error) {
      console.log('could not find notifications.json '+error);
      alert("ERROR!");
   });

})