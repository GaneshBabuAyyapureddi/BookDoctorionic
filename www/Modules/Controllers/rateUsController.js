angular.module('bookDoctor')
.controller("rateUsController",function ($scope, $state, $stateParams, $ionicHistory, $ionicPopup) {
  $scope.rateUsDate = $stateParams.selectedDate;
	$scope.goBack = function() {
    	$ionicHistory.goBack();
  	}
  	
	$scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: '#03A9F4',
        iconOffColor:  '#CFD8DC',
        rating:  0,
        minRating:0,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };

      $scope.ratingsCallback = function(rating) {        
        console.log('Selected rating is : ', rating);
        $scope.starImageShowHide = true;
        if (rating == 1)
          $scope.starImage = "img/star1.jpg";
        else if (rating == 2 || rating == 3)
          $scope.starImage = "img/star23.png";
        else
          $scope.starImage = "img/star45.jpg";
      };

      $scope.closeModal = function(){
      var confirmPopup = $ionicPopup.alert({
              title: 'BookDoctor!',
               template: 'You have been rated  successfully !'
            });

            confirmPopup.then(function(res) {
                if(res) {
                   $ionicHistory.goBack();
                 } else {
                    console.log('Not sure!');
                  }
            });


      };
})