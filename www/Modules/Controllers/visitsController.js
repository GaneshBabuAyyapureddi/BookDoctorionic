angular.module('bookDoctor')
.controller("visitsController", function($scope, $state, $ionicModal,$stateParams, $cordovaSQLite,$ionicHistory){
  $scope.patientVisits = [];
  $scope.profileObject = $stateParams.patientProfile;
  $scope.goBack = function() {
    //$state.go('patientProfile',{"patientProfile":$scope.profileObject});
    $ionicHistory.goBack();
  }
   $ionicModal.fromTemplateUrl('create-patientVisits.html', {
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

  $scope.submitVisitsData = function(visitReason) {
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

        var visitedTime = hours + ':' + minutes.substr(-2) +' ' + ampm;

      $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS visitTable (patientID TEXT, visitReason TEXT, visitedDate TEXT, visitedTime TEXT)');

      $cordovaSQLite.execute(db, 'INSERT INTO visitTable(patientID, visitReason, visitedDate, visitedTime) VALUES (?,?,?,?)', [$scope.profileObject.patientID, visitReason, createdDateStr, visitedTime])
 
            .then(function(result) {
                 alert("Visit added successfully");
                 $scope.readVisitsData();
            }, function(error) {
                 alert("Visit details not submitted, try again");
            })
  }

  $scope.readVisitsData = function(){
        var db;

         try {
            db = $cordovaSQLite.openDB({name:"myapp.db",location:'default'});
   
        } catch (error) {
            alert(error);
        }
        
        // Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, 'SELECT * FROM visitTable WHERE patientID = ?',[$scope.profileObject.patientID])
                  .then(
                function(res) {
                  var arr = [];
                    if (res.rows.length > 0) {
                        for (var i =0; i < res.rows.length; i++) {
                          console.log(res.rows.item(i).visitReason + res.rows.item(i).visitedTime+ res.rows.item(i).visitedDate);
                          arr.push(res.rows.item(i));
                        }
                        $scope.patientVisits = arr;
                    }
                },
                function(error) {
                    // $scope.statusMessage = "Error on loading: " + error.message;
                    // window.alert(error.message);
                }
            );
  }

 })