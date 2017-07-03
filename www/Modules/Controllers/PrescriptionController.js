angular.module('bookDoctor')
.controller("PrescriptionController", function($scope, $state,$ionicModal,$stateParams,$cordovaSQLite,$ionicHistory,$http){
	$scope.maxRows = -1;
	$scope.selectedPrescriptionObj= {};
	$scope.goBack =  function(){

		$ionicHistory.goBack();
	}

  $http.get('assets/prescriptions.json')
  .success(function(obj) {
  	$scope.prescriptionList = obj;
      
   })
  .error(function(error) {
  	console.log('could not find prescriptions.json '+error);
  	alert("ERROR!");
  });
  $scope.count = function() {
  	if($scope.maxRows==2){
  		$scope.maxRows = 0;
  	}else{
  		$scope.maxRows++;	
  	}
  	return $scope.maxRows;
  }
 
 $ionicModal.fromTemplateUrl('detailedPrescription.html',{
    scope: $scope,
      animation: 'rollIn'
  }).then(function(modal) {
        $scope.prescriptionModal = modal;
      });

      $scope.openDetailList = function(obj) {
        $scope.prescriptionModal.show();
        $scope.selectedPrescriptionObj = obj;
      };

      $scope.closeModal = function() {
         $scope.prescriptionModal.hide();
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