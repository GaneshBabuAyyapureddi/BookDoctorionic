angular.module('bookDoctor')
.controller("immunizationController", function($scope, $state,$ionicHistory, $http){

  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.$on('$ionicView.enter', function(){
    $http.get('assets/PatientImmunizations.json')
    .success(function(data) {
     $scope.patientImmunizations = data;
      console.log($scope.patientImmunizations);

      })
    .error(function(error) {
      console.log('could not find notifications.json'+error);
      alert("ERROR!");
        });
  });

  $scope.loadData = function() {
       $scope.patientImmunizations;                        
               
  }
})