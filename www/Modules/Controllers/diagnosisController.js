angular.module('bookDoctor')
.controller("diagnosisController", function($scope, $state, $ionicModal, $stateParams, $cordovaSQLite,$ionicHistory){
  $scope.profileObject = $stateParams.patientProfile;
  $scope.diagnosisData = [];
  $scope.goBack = function() {
    // $state.go('patientProfile',{"patientProfile":$scope.profileObject});
    $ionicHistory.goBack();
  }
  $ionicModal.fromTemplateUrl('create-patientDiagnosisModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

 $scope.submitDiagnosis = function(diagnosisComments) {
         var db;
         try {
            db = $cordovaSQLite.openDB({name:"myapp.db",location:'default'});
          } catch (error) {
            alert(error);
         }

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd<10){
          dd='0'+dd;
        } 
        if(mm<10){
          mm='0'+mm;
        } 
        var createdDateStr = dd+'/'+mm+'/'+yyyy;

        var hours = today.getHours();
        var minutes = "0" + today.getMinutes();
        
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;

        var addedTime = hours + ':' + minutes.substr(-2) +' ' + ampm;
        
       $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS diagnosisDetails (patientID TEXT, diagnosisComments TEXT, addedDate TEXT, addedTime TEXT)');
       $cordovaSQLite.execute(db, 'INSERT INTO diagnosisDetails(patientID, diagnosisComments, addedDate, addedTime) VALUES (?,?,?,?)', [$scope.profileObject.patientID,diagnosisComments,createdDateStr,addedTime])
            .then(function(result) {
                 alert("Diagnosis submitted successfully!");
                 $scope.readDiagnosisData();
            }, function(error) {
                 alert("Diagnosis detail not submitted, try again");
            })
  }

  $scope.readDiagnosisData = function(){
        var db;

         try {
            db = $cordovaSQLite.openDB({name:"myapp.db",location:'default'});
   
        } catch (error) {
            alert(error);
        }
        
        // Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, 'SELECT * FROM diagnosisDetails WHERE patientID = ?',[$scope.profileObject.patientID])
                  .then(
                function(res) {
                  var arr = [];
                    if (res.rows.length > 0) {
                        for (var i =0; i < res.rows.length; i++) {
                          arr.push(res.rows.item(i));
                        }
                        $scope.diagnosisData = arr;
                    }
                },
                function(error) {
                    //window.alert(error.message);
                }
            );
  }

})