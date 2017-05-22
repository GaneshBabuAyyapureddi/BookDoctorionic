angular.module('bookDoctor')

.controller("doctorSearchController",function ($scope, $state, $ionicHistory, $ionicPopover, $http) {
   $scope.specialist = "";

   $http.get('assets/doctorsList.json')
    .success(function(data) {
       $scope.doctorsList = data;
       $scope.doctorsList.forEach(function(x){
         x.rating= {
         iconOn: 'ion-ios-star',    
         iconOff: 'ion-ios-star-outline',  
         iconOnColor:"#d62304", 
         /*iconOnColor: 'rgb(255, 215, 0)', */ 
         iconOffColor: "#ffa4a3",
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
      , "General surgery", "Neurology and NeuroScience", "Urology", "Oncologist", "Epidemiologist", "Endocrinologist"
      , "Dermatologist", "Dentist", "Endocrinologist", "Dermatologist", "Nephrologist", "Psychiatrist"
      , "Pathologist", "Neurosurgeon", "Gastroenterologist", "Ophthalmologist", "Radiology", "Diabetology"];

      $scope.doctorSelected = function(doctorObject) {
       $state.go('doctorProfile', {"doctorProfile":doctorObject});
   }

})