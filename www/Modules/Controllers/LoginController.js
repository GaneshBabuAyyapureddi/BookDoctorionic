angular.module('bookDoctor')

.controller("loginController",function ($scope,$cordovaSQLite, $state,$rootScope) {
  $rootScope.appTheme = "#11c1f3";
  
 console.log("rootScope in loginController.........."+ $rootScope.appTheme);
  $scope.goToHomeScreen = function() {
    $state.go('dashboard.homeScreen');
  }
  
  $scope.goToSignup = function() {
    $state.go('signupScreen');
  }

  $scope.goToForgotPassword = function() {
    $state.go('forgotPassword');
  }
   $scope.loadguestPage = function() {
    $state.go('guestUserScreen');
  }



    $scope.load = function(username,pass) {
    	if(username === "demouser")
    	{
    		  $state.go('dashboard.homeScreen');
    	}
    	else
    	{
      // $scope.showSpinner = true;
		var db;

         try {
            db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});
   
        } catch (error) {
            alert(error);
        }
                   // Execute SELECT statement to load message from database.
           //        db, "SELECT ? AS amount, ? AS salary", [var_amount, var_salary])
        $cordovaSQLite.execute(db, "SELECT * FROM signUpPatientDetails where name = ?",[username])
                  .then(
                function(res) {

                    if (res.rows.length > 0) {

                        $scope.newMessage = res.rows.item(0).name;
                        for (var i =0; i < res.rows.length; i++) {
                            console.log('result array'+ res.rows.item(i).name);
                      
                      if (pass === res.rows.item(i).password) {
                        $rootScope.myusername = res.rows.item(0).name;
                        $scope.statusMessage = "Message loaded successful, cheers!"+res.rows.item(0).name;
                        window.alert("Logged in successfully, cheers "+res.rows.item(0).name+' !');
                          $state.go('dashboard.homeScreen');
                      }else
                      {
                         window.alert("Invalid password");
                      }
                    }
                    }
                    else
                      {
                         window.alert("Invalid username");
                      }
                },
                function(error) {
                    $scope.statusMessage = "Error on loading: " + error.message;
                                          // $scope.goToPatientSearch(username);
                                          window.alert("Invalid username/password");
                }
            );
}
}

})