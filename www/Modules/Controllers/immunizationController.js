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
  // $scope.patientImmunizations = [{"comments":"HEPATITIS A", "date":"19/4/2016","time":"10:33 AM"},
  //     {"comments":"HEPATITIS B", "date":"29/4/2016","time":"11:46 AM"}, 
  //     {"comments":"VARICELLA", "date":"3/5/2016","time":"12:22 PM"},
  //     {"comments":"POLIO", "date":"4/6/2016","time":"2:33 PM"},
  //     {"comments":"Fever", "date":"19/7/2016","time":"8:30 AM"},
  //     {"comments":"VARICELLA", "date":"29/7/2016","time":"4:33 PM"}, 
  //     {"comments":"HPV VACCINE", "date":"10/8/2017","time":"12:33 AM"},
  //     {"comments":"POLIO", "date":"20/1/2017","time":"8:27 PM"},
  //     {"comments":"TETANUS-DIPHTHERIA-PERTUSIS", "date":"15/2/2017","time":"6:33 PM"},
  //     {"comments":"HEPATITIS B", "date":"19/3/2017","time":"9:23 AM"}, 
  //     {"comments":"MMR", "date":"5/4/2017","time":"10:12 AM"},
  //     {"comments":"HEPATITIS A", "date":"13/4/2017","time":"5:33 PM"}];

  $scope.loadData = function() {
       $scope.patientImmunizations;                        
               
  }
})