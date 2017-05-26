var app = angular.module('bookDoctor')
.controller("forgotPasswordController", function($scope, $state,$ionicHistory){
  $scope.regEx="/^[0-9]{10,10}$/;"

    $scope.submitForgotPassword = function(form,data) {

if (form.mobile.$valid) {
 //$scope.fetchPassword();
 	 alert("You will receive a message shortly, with the password change link to the mobile number " +data.mobile);    
}else if(form.email.$valid){
	alert("You will receive a mail shortly, with the password change link to the email-Id " +data.email);  
}
//this has to be changed. Time being to resolve the error sent aslike
// else{
// 	alert("Provide your email or mobile number" );
// }

  }
    $scope.goBackToHome = function() {
    //$state.go('loginPage');
    $ionicHistory.goBack();
  }


  /* Read all appointment from DB*/
    $scope.fetchPassword = function() {
    var db;

        try {
            db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});   
        } catch (error) {
            alert(error);
        }
        
        // Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, 'SELECT * FROM signUpPatientDetails')
                  .then(
                function(res) {
                  var arr = [];
                    if (res.rows.length > 0) {
                        for (var i =0; i < res.rows.length; i++) {
                          arr.push(res.rows.item(i));
                        }
                        console.log(arr);                        
                    }
                },
                function(error) {
                    // window.alert(error.message);
                }
            );
  }


})

app.directive('validateEmail', function() {
  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return {
    link: function(scope, elm) {
      elm.on("keyup",function(){
            var isMatchRegex = EMAIL_REGEXP.test(elm.val());
            if( isMatchRegex&& elm.hasClass('warning') || elm.val() == ''){
              elm.removeClass('warning');

            }else if(isMatchRegex == false && !elm.hasClass('warning')){
              elm.addClass('warning');

            }
      });
    }
  }
});






