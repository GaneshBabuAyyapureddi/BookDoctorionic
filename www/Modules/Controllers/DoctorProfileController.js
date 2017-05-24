angular.module('bookDoctor')
.controller("DoctorProfileController",function ($scope, $state, $stateParams, $ionicHistory, $ionicPopup) {
    
  //$scope.$on('$ionicView.beforeEnter', function(){
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
        iconOnColor:"#d62304", 
        iconOffColor: "#ffa4a3",
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
        iconOnColor:"#d62304", 
        iconOffColor: "#ffa4a3",        
        rating:  $scope.ratings,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };
      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
      };
  // });
  
  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.rateMe = function() {
    $state.go('rateUsScreen');
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

    $scope.appointmentList = [
  {
    "appointmentDate":"2017-05-22",
    "image":"img/tick_green.png", 
    "message":"Your appointment has been approved",
    "modifyValue":true,
    "rateValue":false
  },
  {
    "appointmentDate":"2017-05-21",
    "image":"img/close_red.png", 
    "message":"Your appointment has been cancelled",
    "modifyValue":false,
    "rateValue":true
  },
  {
    "appointmentDate":"2017-05-20",
    "image":"img/waiting.png", 
    "message":"Your appointment is in progress",
    "modifyValue":true,
    "rateValue":false
  },
  {
    "appointmentDate":"2017-05-23",
    "image":"img/close_red.png", 
    "message":"Your appointment has been cancelled",
    "modifyValue":false,
    "rateValue":true
  },
  {
    "appointmentDate":"2017-05-24",
    "image":"img/tick_green.png", 
    "message":"Your appointment has been approved",
    "modifyValue":true,
    "rateValue":false
  }
  ];

  $scope.editValue = function(appointmentDate){
    var date = new Date();
    var FromDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    if (appointmentDate == FromDate) {
      alert("Your appointment date is today so, could not edit");
    }else{
      alert("Edit success");
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