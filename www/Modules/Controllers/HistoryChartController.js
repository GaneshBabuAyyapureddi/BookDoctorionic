angular.module('bookDoctor')
.controller("HistoryChartController", function($scope, $state, $ionicModal, $stateParams,$ionicHistory){
 // $scope.profileObject = $stateParams.patientProfile; 
 $scope.profileObject =   
   {  
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
   };
  $ionicModal.fromTemplateUrl('create-patientReportModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $scope.goToPatientProfile = function(){
    $state.go('patientProfile');
  }
 
  $scope.goBack = function() {
   // $state.go('patientSearch');
    $ionicHistory.goBack();
  }
 $scope.goToLabResultsScreen = function(profileObject){
    $state.go('labResults', {"patientProfile":profileObject});
  }
  $scope.goToPrescriptionScreen = function(profileObject) {
    $state.go('newPrescription', {"patientProfile":profileObject});
  }
  $scope.goToAllergiesScreen = function(profileObject) {
    $state.go('allergies', {"patientProfile":profileObject});
  }
  $scope.goToImmunizationScreen = function(profileObject) {
    $state.go('immunization', {"patientProfile":profileObject});
  }
  $scope.goToDiagnosisScreen = function(profileObject) {
    $state.go('diagnosis', {"patientProfile":profileObject});
  }
  $scope.goToVisitsScreen = function(profileObject) {
    $state.go('visits', {"patientProfile":profileObject});
  }

 $scope.persons = [{"name":"Heart Rate", "date":"Feb22, 2:14 PM", "value":"99", "description":"beats/min"},
  {"name":"Blood Pressure", "date":"Feb22, 2:14 PM", "value":"113/76", "description":"mmahg"},
  {"name":"Blood Glucose","date":"Feb22, 2:14 PM", "value":"76", "description":"mmhol"},
  {"name":"Body Weight", "date":"Oct20, 2016 11.27 AM", "value":"58", "description":"Kg"},
  {"name":"BMI", "date":"Feb22, 2:14 PM", "value":"95", "description":"BMI"},
   {"name":"Body Fat Percentage", "date":"Oct20, 2016", "value":"28", "description":"%"}];
  //Chart related methods
  $scope.heartlabels = ["", "", "", "", "", "", ""];
    //$scope.series = ['Average Spent Effort', 'Average Estimated Effort', 'Average Remainning Effort'];
    $scope.heartdata = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
>>>>>>> fa13cc7c99399a67116789b66659cade966c4cf0:www/Modules/Controllers/HistoryChartController.js
    
})
