angular.module('bookDoctor')

.controller("doctorSearchController",function ($scope, $state, $ionicHistory, $ionicPopover, $http, $rootScope) {
 $scope.specialist = "";
 $scope.$on('$ionicView.enter', function(){

  $http.get('assets/doctorsList.json')
  .success(function(data) {
   $scope.doctorsList = data;
   $scope.doctorsList.forEach(function(x){
     x.rating= {
       iconOn: 'ion-ios-star',    
       iconOff: 'ion-ios-star-outline',  
       iconOnColor:$rootScope.combinationTheme, 
       /*iconOnColor: 'rgb(255, 215, 0)', */ 
       iconOffColor: $rootScope.combinationTheme,
          // 'rgb(224, 224, 224)',   
          rating: x.ratings, 
          minRating: 0,    
         readOnly: true, // Set to true so user cannot edit rating
         callback: function(rating) {    //Mandatory
           // do nothing as read only stars 
         }

       }

     })
 })
  .error(function(error) {
    console.log('could not find notifications.json'+error);
    alert("ERROR!");
  });

  $scope.doctorSelected = function(doctorObject) {
   $state.go('doctorProfile', {"doctorProfile":doctorObject});
 }
});


 $scope.goBack = function() {
    // $ionicHistory.goBack();
    $state.go('dashboard.homeScreen');
  }

  $scope.getCurrentSpecialist = function(result) {
    if(result == 'ShowAll'){
     $scope.specialist = '';
     $scope.popover.hide();
   }
   else{
     $scope.specialist = result;
     $scope.popover.hide();
   }
 }
 
 $scope.ratingsCallback = function(rating, index) {
   console.log('Selected rating is : ', rating, ' and the index is : ', index);
 };

 $ionicPopover.fromTemplateUrl('templates/popover.html', {
  scope: $scope,
}).then(function(popover) {
 $scope.popover = popover;
});

$scope.specialistLists=["ShowAll","Immunology","Obstetrics and gynecology", "Cardiology", "Gynecology"
, "General surgery", "Neurology", "Urology", "Oncologist", "Epidemiologist", "Endocrinologist"
, "Dermatologist", "Dentist", "Endocrinologist", "Dermatologist", "Nephrologist", "Psychiatrist"
, "Pathologist", "Neurosurgeon", "Gastroenterologist", "Ophthalmologist", "Radiology", "Diabetology", "NeuroScience"];



})