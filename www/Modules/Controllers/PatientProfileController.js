angular.module('bookDoctor')

.controller("PatientProfileController", function($scope, $state, $ionicModal,$cordovaSQLite, $stateParams,$ionicHistory){
     $scope.goBack = function() {
	 $state.go('dashboard.homeScreen');
    }
     $scope.genearlProfileObject =   [
      {name:"Patient Name:",value:"Peter"},
      {name:"Patient ID:",value:"PE458"},
      {name:"Gender:",value:"Male"},
      {name:"MMH ID:",value:"1122"},
      {name:"Date Of Birth:",value:"01-May-1985"},
      {name:"Age:",value:"31"},
      {name:"Blood Group:",value:"A+"}
 //  {name:"profilePic",value:"img/Mark.jpeg"}, 
            ];
            $scope.genearlProfileContactDetails =   [
      {name:"Primary Mobile Number:",value:"5551234567"},
      {name:"Emergency Mobile Number:",value:"5551234567"},
      {name:"Email ID:",value:"peter@doctorapp.com"} ,
      {name:"Street:",value:"Downtown"},
      {name:"City:",value:"Atlanta"},
      {name:"Address:",value:"No 8, abc Avenue, Houston-12"} //  {name:"profilePic",value:"img/Mark.jpeg"}, 
            ];


})
