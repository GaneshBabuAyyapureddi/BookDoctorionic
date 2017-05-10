angular.module('bookDoctor')
.controller("newPrescriptionController", function($scope, $state,$ionicModal,$stateParams,$cordovaSQLite,$ionicHistory){
  $scope.profileObject = $stateParams.patientProfile;
  $scope.medicineArray = [];
  $ionicModal.fromTemplateUrl('my-modal.html', {
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
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
  $scope.addDrugToPrescription = function(drugName,morningChecked,noonChecked,nightChecked) {
    var medicineObject = {'drugName':drugName, 'morning':morningChecked, 'noon':noonChecked, 'night':nightChecked};
    $scope.medicineArray.push(medicineObject);
  }
  $scope.goBack =  function(){
   // $state.go('patientProfile',{"patientProfile":$scope.profileObject});
   $ionicHistory.goBack();
  }

  $scope.goToPatientPrescDate =  function(profileprescObject,medicineArray){
    $scope.alertStatus = 'Insert Prescription done';
     var db;
      try {
        db = $cordovaSQLite.openDB({name:"myapp.db",location:'default'});
      } catch (error) {
        alert(error);
      }
        
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS NewPrescriptionDetails (patient_id TEXT , patient_name TEXT, presc_date TEXT, Age TEXT, drugName TEXT, Morning TEXT, Afternoon TEXT, Evening TEXT )');
    var month = ('0' + (profileprescObject.patientprescDate.getMonth() + 1)).slice(-2); //months from 1-12
    var day = ('0' + (profileprescObject.patientprescDate.getDate())).slice(-2);
    var year = profileprescObject.patientprescDate.getFullYear();
    var selectedDate = year + "/" + month + "/" + day;

    for (var i = 0; i < medicineArray.length; i++) {
      $cordovaSQLite.execute(db, 'INSERT INTO NewPrescriptionDetails(patient_id, patient_name, presc_date, Age, drugName, Morning, Afternoon, Evening ) VALUES (?,?,?,?,?,?,?,?)', [profileprescObject.patientID, profileprescObject.patientName, selectedDate, "age",medicineArray[i].drugName,medicineArray[i].morning,medicineArray[i].noon,medicineArray[i].night])
              .then(function(result) {
                  $scope.loadData();
              }, function(error) {
                   $scope.alertStatus = "Error on saving: " + error.message;
              })
    }
    alert($scope.alertStatus);
    $scope.alertStatus = "Insert Prescription done";
  }

   // $scope.persons = [{"src":"img/LabResult1.jpg", "date":"19/10/2017"},
   //    {"src":"img/LabResult2.jpg", "date":"19/10/2017"}, 
   //    {"src":"img/LabResult3.jpg", "date":"19/10/2017"},
   //    {"src":"img/LabResult1.jpg", "date":"19/10/2017"},
   //    {"src":"img/LabResult1.jpg", "date":"19/10/2017"},
   //    {"src":"img/LabResult2.jpg", "date":"19/10/2017"}, 
   //    {"src":"img/LabResult3.jpg", "date":"19/10/2017"},
   //    {"src":"img/LabResult1.jpg", "date":"19/10/2017"},
   //    {"src":"img/LabResult1.jpg", "date":"19/10/2017"},
   //    {"src":"img/LabResult2.jpg", "date":"19/10/2017"}, 
   //    {"src":"img/LabResult3.jpg", "date":"19/10/2017"},
   //    {"src":"img/LabResult1.jpg", "date":"19/10/2017"}];

  $scope.loadData = function() {
    var db;

        try {
            db = $cordovaSQLite.openDB({name:"myapp.db",location:'default'});   
        } catch (error) {
            alert(error);
        }
        
        // Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, 'SELECT * FROM NewPrescriptionDetails')
                  .then(
                function(res) {
                  var arr = [];
                    if (res.rows.length > 0) {
                        for (var i =0; i < res.rows.length; i++) {
                          arr.push(res.rows.item(i));
                        }
                        $scope.persons = arr;                        
                    }
                },
                function(error) {
                    // window.alert(error.message);
                }
            );
  }
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
