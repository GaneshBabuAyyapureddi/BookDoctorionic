angular.module('bookDoctor')
.controller("BuyMedicineController",function ($scope, $state, $stateParams, $ionicHistory) {
	alert('Work in Progress');
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
    console.log(patientObject);
    //$state.go('patientProfile', {"patientProfile":patientObject});
  }
})