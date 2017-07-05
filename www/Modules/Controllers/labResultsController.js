angular.module('bookDoctor')
.controller("labResultsController", function($scope, $state,$ionicModal,$ionicHistory,$cordovaPrinter, $http){
    $scope.goBack = function() {
     $ionicHistory.goBack();
    }

     $ionicModal.fromTemplateUrl('labResultModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.passwordModal = modal;
      });

      $scope.openLabResultModal = function(imageSource) {
        $scope.passwordModal.show();
      };

      $scope.closeLabResultModal = function() {
         $scope.passwordModal.hide();
      };

    $scope.openLabResult = function(imageSource) {
      console.log(imageSource);
      $scope.selectedResultSource = imageSource;
      $scope.openLabResultModal (imageSource);
    }

    $scope.print = function(src) {
        if($cordovaPrinter.isAvailable()) {
            $cordovaPrinter.print(src);
        } else {
            alert("Printing is not available on device");
        }
    }

    $scope.$on('$ionicView.enter', function(){
    $http.get('assets/LabReportPaths.json')
    .success(function(data) {
     $scope.labReportPaths = data;
      console.log($scope.labReportPaths);

      })
    .error(function(error) {
      console.log('could not find notifications.json'+error);
      alert("ERROR!");
        });
  });

   
})