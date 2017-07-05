angular.module('bookDoctor')
.controller("allergiesController", function($scope, $state,$ionicHistory,$ionicModal,$http){

  $scope.goBack = function() {
      $ionicHistory.goBack();
  }
$ionicModal.fromTemplateUrl('Modules/Templates/AllergiesForm.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
  $scope.openModal = function(allergies){
  	$scope.allergies=allergies;
    $scope.modal.show();
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }

  $scope.$on('$ionicView.enter', function(){
  $http.get('assets/allergies.json')
  .success(function(data) {
   $scope.allergiesArray = data;
  console.log($scope.allergiesArray);

    })
  .error(function(error) {
    console.log('could not find notifications.json'+error);
    alert("ERROR!");
      });
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