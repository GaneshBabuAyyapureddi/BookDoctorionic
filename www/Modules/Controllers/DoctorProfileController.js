angular.module('bookDoctor')
.controller("DoctorProfileController",function ($scope, $state, $stateParams, $ionicHistory, $ionicPopup, $ionicModal, $rootScope, $http) {
 
    $scope.profileObject = $stateParams.doctorProfile;
    $scope.ratings = $scope.profileObject.ratings;
    $scope.doctorName = $scope.profileObject.doctorName;
    $scope.educationalObject = $scope.profileObject.educationalDescription;
    $scope.patientList = $scope.profileObject.reviewsAndratings;
    $scope.awardList = $scope.profileObject.awards;
    $scope.specialityDescriptionList = $scope.profileObject.specialityDescription;
    $scope.patientList.forEach(function(x){
      x.rating= {
        iconOn: 'ion-ios-star',    
        iconOff: 'ion-ios-star-outline',   
        // iconOnColor: 'rgb(255, 215, 0)',  
        // iconOffColor:  'rgb(224, 224, 224)',   
        iconOnColor:$rootScope.combinationTheme, 
        iconOffColor: $rootScope.combinationTheme,
        rating: x.ratings, 
        minRating: 0,    
        readOnly: true, // Set to true so user cannot edit rating
        callback: function(rating) {    //Mandatory
          // do nothing as read only stars 
        }
      }
    });

    $scope.ratingsObject = {
      iconOn : 'ion-ios-star',
      iconOff : 'ion-ios-star-outline',
        // iconOnColor: 'rgb(255, 215, 0)',  
        // iconOffColor:  'rgb(224, 224, 224)',   
        iconOnColor:$rootScope.combinationTheme, 
        iconOffColor: $rootScope.combinationTheme,        
        rating:  $scope.ratings,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };   
      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : '+ rating);
      };
  
  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.rateMe = function(rateUsDate) {
    $state.go('rateUsScreen', {'selectedDate':rateUsDate});
  }
  
  angular.element(document).ready(function () {
    initialize();
        // google.maps.event.addDomListener(window, 'load', initialize());
      });

  function initialize(){
    var myLatlng = new google.maps.LatLng(12.9814, 80.2432);
    console.log("latandlong"+JSON.stringify(myLatlng));
    
    var mapOptions = {
      center: myLatlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setCenter(myLatlng);

    var myLocation = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "My Location"
    });

    var myLocation2 = new google.maps.Marker({
      position: new google.maps.LatLng(12.9830, 80.2594),
      map: map,
      animation: google.maps.Animation.DROP,
      title: "My Location"
    });

      // Setup poliline
      var flightPlanCoordinates = [
      {lat: 12.9814, lng: 80.2432},
      {lat: 12.9830, lng: 80.2594}
      ];
      var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      flightPath.setMap(map); //Implement poliline to map
      // Add poliline - ends
      $scope.map = map;
    }

    $scope.$on('$ionicView.enter', function(){
    $http.get('assets/DoctorAppointments.json')
    .success(function(data) {
     $scope.doctorsAppointmentList = data;
      console.log($scope.doctorsAppointmentList);

      })
    .error(function(error) {
      console.log('could not find notifications.json'+error);
      alert("ERROR!");
        });
    });


    $scope.editValue = function(appointmentDate){
      var date = new Date();
      var FromDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
      if (appointmentDate == FromDate) {
        alert("Your appointment date is today so, could not edit");
      }else{      
      // alert($scope.date);
      $scope.openModal();
      $scope.date = new Date(appointmentDate);
      $scope.appointmentTitle = "Edit Appointment";
      $scope.specialityShow = false;
      $scope.doctorShow = false;

      /*Time Picker*/
      $scope.timeNow=new Date();
      var hour = $scope.timeNow.getHours();
      var minutes = $scope.timeNow.getMinutes();
      $scope.timeNow.setHours(hour,minutes,0,0);
    }    
  }

  $scope.deleteValue = function(appointmentDate){
    var date = new Date();
    var FromDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    if (appointmentDate == FromDate) {
      alert("Your appointment date is today so, could not delete");
    }else{
      // alert("Edit success");
      $scope.showConfirm();
    }    
  }

  $scope.showConfirm = function() {
    
    var confirmPopup = $ionicPopup.confirm({
     title: 'Confirmation',
     template: 'Are you sure to delete?'
   });

    confirmPopup.then(function(res) {
     if(res) {
      console.log('Sure!');
    } else {
      console.log('Not sure!');
    }
  });
    
  };

  /* Add appointment modal view */
  $ionicModal.fromTemplateUrl('Modules/Templates/AddAppointmentModalView.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.addAppointmentModal = modal;
  });
  $scope.openModal = function() {
    $scope.addAppointmentModal.show();
  };

  $scope.closeModal = function() {
    $scope.addAppointmentModal.hide();
  };


  $scope.$on('$destroy', function() {
          // $scope.modal.remove();
        });

  $scope.$on('modal.hidden', function() {
          // Execute action
        });

  $scope.$on('modal.removed', function() {
          // Execute action
        }); 
})

.filter('inSlicesOf', 
  ['$rootScope',  
  function($rootScope) {
    makeSlices = function(items, count) { 
      if (!count)            
        count = 3;
      
      if (!angular.isArray(items) && !angular.isString(items)) return items;
      
      var array = [];
      for (var i = 0; i < items.length; i++) {
        var chunkIndex = parseInt(i / count, 10);
        var isFirst = (i % count === 0);
        if (isFirst)
          array[chunkIndex] = [];
        array[chunkIndex].push(items[i]);
      }

      if (angular.equals($rootScope.arrayinSliceOf, array))
        return $rootScope.arrayinSliceOf;
      else
        $rootScope.arrayinSliceOf = array;
      
      return array;
    };
    
    return makeSlices; 
  }]
  )