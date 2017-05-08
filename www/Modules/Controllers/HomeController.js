angular.module('bookDoctor')

.controller("homeController",function ($scope, $state) {

$scope.goToDoctorProfile = function() {
    $state.go('doctorProfileScreen');
  }

$scope.goToProfile = function() {
    $state.go('generalProfile');
}

})