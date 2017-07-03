angular.module('bookDoctor')
.controller("rateUsController",function ($scope, $state, $stateParams, $ionicHistory, $ionicPopup, $rootScope) {
  $scope.rateUsDate = $stateParams.selectedDate;
   $scope.$on('$ionicView.enter', function(){
});
	$scope.goBack = function() {
    	$ionicHistory.goBack();
  	}
  	
	$scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: $rootScope.combinationTheme,
        iconOffColor:  $rootScope.combinationTheme,
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
               template: 'Your reviews and ratings has been submitted successfully" !'
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