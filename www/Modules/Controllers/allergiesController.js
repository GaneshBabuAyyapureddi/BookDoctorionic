angular.module('bookDoctor')
.controller("allergiesController", function($scope, $state,$stateParams,$ionicHistory){
 //  $scope.profileObject = $stateParams.patientProfile;
  $scope.profileObject = 
   {  
      "patientID":"PE458",
      "patientName":"Peter",
      "dateOfBirth":"01-May-1985",
      "age":"31",
      "street": "Downtown",
      "city":"Atlanta",
      "address":"No 8, abc Avenue, Houston-12",
      "profilePic":"img/Mark.jpeg",
      "gender":"Male",
      "bloodGroup":"B+",
      "mobileNumber":5551234567,
      "emailID":"peter@doctorapp.com"
   };
   console.log($scope.profileObject.patientID);
  $scope.goBack = function() {
    //$state.go('patientProfile',{"patientProfile":$scope.profileObject});
    $ionicHistory.goBack();
  }

  $scope.submitAllergies = function(allergiesDetails) {
      
      var db;
         try {
            db = $cordovaSQLite.openDB({name:"myapp.db",location:'default'});
        } catch (error) {
            alert(error);
        }
        
      $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS enterAllergiesDetail (patientID TEXT, complaint TEXT, history TEXT, environment TEXT, familyHistory TEXT, reviewSystems TEXT, physicalExaminations TEXT, allergen TEXT, impression TEXT, recommendations TEXT)');

      $cordovaSQLite.execute(db, 'INSERT INTO enterAllergiesDetail(patientID, complaint, history, environment, familyHistory, reviewSystems, physicalExaminations, allergen, impression, recommendations ) VALUES (?,?,?,?,?,?,?,?,?,?)', [$scope.profileObject.patientID, allergiesDetails.complaint,allergiesDetails.history,allergiesDetails.environment,allergiesDetails.familyHistory,allergiesDetails.reviewSystems,allergiesDetails.mobile,allergiesDetails.allergen,allergiesDetails.impression,allergiesDetails.recommendations])
 
            .then(function(result) {
                 alert("Added successfully");
            }, function(error) {
                 alert("Details not submitted, try again");
            })
  }

  
  $scope.persons = [
    {
      "data": "1.  The patient appears to be having some anxiety and panic now.  It is hard to say whether this started with some mild asthma symptoms as a result of his immunotherapy or if this is purely an anxiety issue.<br>2.  Allergic asthma.<br>3.  Allergic rhinitis.",
      "date": "20-04-17", 
      "time": "4.20 pm"
    }, {
      "data": "1.  Allergy to cashew, milk, peanut, egg and green peas. Worsening eczema after sweet potato, but no correlation on skin test. <br>2.  Atopic dermatitis. <br>3.  History of an anaphylactic reaction to peanut.<br>4.  Intolerance to soy formula with vomiting and constipation. ",
      "date": "21-04-17",
      "time": "5.30 pm"
    }, {
      "data": "1.  Abdominal pain for 8 months, intermittent and crampy, possibly related to constipation. There is no other evidence of any serious underlying medical problems based on testing done by Dr. Doe. It is possible this could be due to constipation. <br>2.  Allergic rhinitis. He has significant dust mite allergy. ",
      "date": "22-04-17",
      "time": "1.10 pm"
    },
    {
      "data": "1.  The patient appears to be having some anxiety and panic now.  It is hard to say whether this started with some mild asthma symptoms as a result of his immunotherapy or if this is purely an anxiety issue.<br>2.  Allergic asthma.<br>3.  Allergic rhinitis.",
      "date": "20-04-17", 
      "time": "4.20 pm"
    }, {
      "data": "1.  Allergy to cashew, milk, peanut, egg and green peas. Worsening eczema after sweet potato, but no correlation on skin test. <br>2.  Atopic dermatitis. <br>3.  History of an anaphylactic reaction to peanut.<br>4.  Intolerance to soy formula with vomiting and constipation. ",
      "date": "21-04-17",
      "time": "5.30 pm"
    }, {
      "data": "1.  Abdominal pain for 8 months, intermittent and crampy, possibly related to constipation. There is no other evidence of any serious underlying medical problems based on testing done by Dr. Doe. It is possible this could be due to constipation. <br>2.  Allergic rhinitis. He has significant dust mite allergy. ",
      "date": "22-04-17",
      "time": "1.10 pm"
    },
    {
      "data": "1.  The patient appears to be having some anxiety and panic now.  It is hard to say whether this started with some mild asthma symptoms as a result of his immunotherapy or if this is purely an anxiety issue.<br>2.  Allergic asthma.<br>3.  Allergic rhinitis.",
      "date": "20-04-17", 
      "time": "4.20 pm"
    }, {
      "data": "1.  Allergy to cashew, milk, peanut, egg and green peas. Worsening eczema after sweet potato, but no correlation on skin test. <br>2.  Atopic dermatitis. <br>3.  History of an anaphylactic reaction to peanut.<br>4.  Intolerance to soy formula with vomiting and constipation. ",
      "date": "21-04-17",
      "time": "5.30 pm"
    }, {
      "data": "1.  Abdominal pain for 8 months, intermittent and crampy, possibly related to constipation. There is no other evidence of any serious underlying medical problems based on testing done by Dr. Doe. It is possible this could be due to constipation. <br>2.  Allergic rhinitis. He has significant dust mite allergy. ",
      "date": "22-04-17",
      "time": "1.10 pm"
    },
    {
      "data": "1.  The patient appears to be having some anxiety and panic now.  It is hard to say whether this started with some mild asthma symptoms as a result of his immunotherapy or if this is purely an anxiety issue.<br>2.  Allergic asthma.<br>3.  Allergic rhinitis.",
      "date": "20-04-17", 
      "time": "4.20 pm"
    }, {
      "data": "1.  Allergy to cashew, milk, peanut, egg and green peas. Worsening eczema after sweet potato, but no correlation on skin test. <br>2.  Atopic dermatitis. <br>3.  History of an anaphylactic reaction to peanut.<br>4.  Intolerance to soy formula with vomiting and constipation. ",
      "date": "21-04-17",
      "time": "5.30 pm"
    }, {
      "data": "1.  Abdominal pain for 8 months, intermittent and crampy, possibly related to constipation. There is no other evidence of any serious underlying medical problems based on testing done by Dr. Doe. It is possible this could be due to constipation. <br>2.  Allergic rhinitis. He has significant dust mite allergy. ",
      "date": "22-04-17",
      "time": "1.10 pm"
    }
  ];
  
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