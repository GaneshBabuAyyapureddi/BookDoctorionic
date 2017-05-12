angular.module('bookDoctor')

.controller("PatientProfileController", function($scope, $state, $ionicModal, $stateParams,$ionicHistory){
     $scope.goBack = function() {
	 $state.go('dashboard.homeScreen');
    }
})