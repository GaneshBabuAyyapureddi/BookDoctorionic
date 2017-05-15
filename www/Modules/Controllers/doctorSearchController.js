angular.module('bookDoctor')

.controller("doctorSearchController",function ($scope, $state, $ionicHistory, $ionicPopover) {
   $scope.specialist = "";

   $scope.goBack = function() {
    // $ionicHistory.goBack();
    $state.go('dashboard.homeScreen');
  }
 $scope.goToDoctorProfileScreen = function() {
   $state.go('doctorProfile');
 }
 $scope.getCurrentSpecialist = function(result) {
      if(result == 'ShowAll'){
         $scope.specialist = '';
         $scope.popover.hide();
      }
      else{
         $scope.specialist = result;
         $scope.popover.hide();
      }
}
 $scope.doctorsList = [  
   {  
      "doctorID":"DO458",
      "doctorName":"George",
      "age":"31",
      "address":"200 E MAIN ST,PHOENIX AZ, 85123, USA",
      "profilePic":"img/DoctorImage1.jpg",
      "gender":"Male",
      "mobileNumber":5551234567,
      "emailID":"george@bookdoctor.com",
      "education":"M.D(Doctor of Medicine)",
      "specialist":"Immunology",
      "ratings":"3"
   },
    {  
      "doctorID":"DO459",
      "doctorName":"Donald",
      "age":"32",
      "address":"300 BOYLSTON AVE E, SEATTLE WA 98102, USA",
      "profilePic":"img/DoctorImage2.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"donald@bookdoctor.com",
      "education":"M.D(Doctor of Medicine)",
      "specialist":"Obstetrics and gynecology",
      "ratings":"5"
   },
    {  
      "doctorID":"DO460",
      "doctorName":"Gilbert",
      "age":"37",
      "address":"2050 Bamako Place, Washington, DC 20521-2050",
      "profilePic":"img/DoctorImage3.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"gilbert@bookdoctor.com",
      "education":"Doctor of Medicine (M.D.)",
      "specialist":"Cardiology",
      "ratings":"3"
   },
   {  
      "doctorID":"DO461",
      "doctorName":"Arthur",
      "age":"39",
      "address":"P.O. Box 283 8562 Fusce Rd, Frederick Nebraska 20620(372) 587-2335",
      "profilePic":"img/DoctorImage4.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"arthur@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Gynecology",
      "ratings":"5"
   },
   {  
      "doctorID":"DO462",
      "doctorName":"Robert",
      "age":"40",
      "address":"P.O. Box 147 2546 Sociosqu Rd, Bethlehem Utah 02913, (939) 353-1107",
      "profilePic":"img/DoctorImage5.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"robert@bookdoctor.com",
      "education":"M.D(Doctor of Medicine)",
      "specialist":"General surgery",
      "ratings":"2"
   },
   {  
      "doctorID":"DO463",
      "doctorName":"Henry Aldrich",
      "age":"42",
      "address":"Nicholas Desmond Simon Graham,P.O. Box 1230 Georgetown,Cayman Islands B. W. I.",
      "profilePic":"img/DoctorImage6.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"henryaldrich@bookdoctor.com",
      "education":"Doctor of Osteopathic Medicine (DO)",
      "specialist":"Neurology",
      "ratings":"2"
   },
   {  
      "doctorID":"DO464",
      "doctorName":"Martin",
      "age":"38",
      "address":"No 123, 6th St, Melbourne, FL 32904",
      "profilePic":"img/DoctorImage7.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"martin@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Urology",
      "ratings":"5"
   },
   {  
      "doctorID":"DO465",
      "doctorName":"Edwin Arnold",
      "age":"31",
      "address":"Ap #285-7193 Ullamcorper Avenue, Amesbury HI 93373, (302) 259-2375",
      "profilePic":"img/DoctorImage8.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"edwinarnold@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Oncologist",
      "ratings":"1"
   },
    {  
      "doctorID":"DO466",
      "doctorName":"Shamim Azad",
      "age":"32",
      "address":"No 71, Pilgrim Avenue, Chevy Chase, MD 20815",
      "profilePic":"img/DoctorImage9.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"shamimazad@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Epidemiologist",
      "ratings":"4"
   },
    {  
      "doctorID":"DO467",
      "doctorName":"Jane Austen",
      "age":"36",
      "address":"No 226 E, Fee Ave, Melbourne FL 32901 ",
      "profilePic":"img/DoctorImage10.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"janeausten@bookdoctor.com",
      "education":"Doctor of Osteopathic Medicine (D.O.)",
      "specialist":"Endocrinologist",
      "ratings":"5"
   },
    {  
      "doctorID":"DO468",
      "doctorName":"Michael",
      "age":"30",
      "address":"No 514, S. Magnolia St, Orlando, FL 32806",
      "profilePic":"img/DoctorImage11.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"michael@bookdoctor.com",
      "education":"D.O(Doctor of Osteopathic Medicine)",
      "specialist":"Dermatologist",
      "ratings":"3"
   },
   {  
      "doctorID":"DO469",
      "doctorName":"Williams",
      "age":"33",
      "address":"No 33, Brookside Avenue, Centreville, VA 20120",
      "profilePic":"img/DoctorImage12.jpg",
      "gender":"Male",
      "mobileNumber":442071838750,
      "emailID":"williams@bookdoctor.com",
      "education":"BDS(Bachelor of Dental Surgery)",
      "specialist":"Dentist",
      "ratings":"4"
   },
   {  
      "doctorID":"DO470",
      "doctorName":"Charles",
      "age":"32",
      "address":"No 761, Branch St, Leland, NC 28451",
      "profilePic":"img/DoctorImage13.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"charles@bookdoctor.com",
      "education":"Doctor of Medicine (M.D.)",
      "specialist":"Psychiatrist",
      "ratings":"2"
   },
   {  
      "doctorID":"DO471",
      "doctorName":"Benjamin",
      "age":"34",
      "address":"No 228, West Country Club St, Morganton, NC 28655",
      "profilePic":"img/DoctorImage14.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"benjamin@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Pathologist",
      "ratings":"5"
   },
   {  
      "doctorID":"DO472",
      "doctorName":"Andrew",
      "age":"32",
      "address":"No 264, Berkshire Rd, Shirley, NY 11967",
      "profilePic":"img/DoctorImage15.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"andrew@bookdoctor.com",
      "education":"Fellowship of the Royal College of Surgeons (F.R.C.S.)",
      "specialist":"Neurosurgeon",
      "ratings":"1"
   },
   {  
      "doctorID":"DO473",
      "doctorName":"Ben Carson",
      "age":"37",
      "address":"No 73, Park Drive Berwyn, IL 60402",
      "profilePic":"img/DoctorImage16.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"bencarson@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Nephrologist",
      "ratings":"5"
   },
   {  
      "doctorID":"DO474",
      "doctorName":"John Austin",
      "age":"33",
      "address":"No 248 E. Alderwood Lane Dearborn, MI 48124",
      "profilePic":"img/DoctorImage17.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"johnaustin@bookdoctor.com",
      "education":"Doctor of Osteopathic Medicine (D.O.)",
      "specialist":"Gastroenterologist",
      "ratings":"4"
   },
   {  
      "doctorID":"DO475",
      "doctorName":"Thomas Amory",
      "age":"32",
      "address":"No 19, Hillcrest Road West Deptford, NJ 08096",
      "profilePic":"img/DoctorImage18.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"thomasamory@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Ophthalmologist",
      "ratings":"4"
   },
   {  
      "doctorID":"DO476",
      "doctorName":"Jacob",
      "age":"36",
      "address":"200 E MAIN ST,PHOENIX AZ, 85123, USA",
      "profilePic":"img/DoctorImage2.jpg",
      "gender":"Male",
      "mobileNumber":5551234567,
      "emailID":"jacob@bookdoctor.com",
      "education":"PhD(Doctor of Philosophy)",
      "specialist":"Immunology",
      "ratings":"4"
   },
   {  
      "doctorID":"DO477",
      "doctorName":"Gabriel",
      "age":"35",
      "address":"300 BOYLSTON AVE E, SEATTLE WA 98102, USA",
      "profilePic":"img/DoctorImage3.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"gabriel@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Obstetrics and gynecology",
      "ratings":"1"
   },
   {  
      "doctorID":"DO478",
      "doctorName":"Samuel",
      "age":"31",
      "address":"2050 Bamako Place, Washington, DC 20521-2050",
      "profilePic":"img/DoctorImage4.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"samuel@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Cardiology",
      "ratings":"2"
   },
   {  
      "doctorID":"DO479",
      "doctorName":"Ethan",
      "age":"39",
      "address":"P.O. Box 283 8562 Fusce Rd, Frederick Nebraska 20620(372) 587-2335",
      "profilePic":"img/DoctorImage5.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"ethan@bookdoctor.com",
      "education":"MD",
      "specialist":"Gynecology",
      "ratings":"4"
   },
   {  
      "doctorID":"DO480",
      "doctorName":"Madison",
      "age":"40",
      "address":"P.O. Box 147 2546 Sociosqu Rd, Bethlehem Utah 02913, (939) 353-1107",
      "profilePic":"img/DoctorImage6.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"madison@bookdoctor.com",
      "education":"MBBS",
      "specialist":"General surgery",
      "ratings":"4"
   },
   {  
      "doctorID":"DO481",
      "doctorName":"Jayden",
      "age":"42",
      "address":"Nicholas Desmond Simon Graham,P.O. Box 1230 Georgetown,Cayman Islands B. W. I.",
      "profilePic":"img/DoctorImage7.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"jayden@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Neurology",
      "ratings":"3"
   },
   {  
      "doctorID":"DO482",
      "doctorName":"Jose",
      "age":"38",
      "address":"No 123, 6th St, Melbourne, FL 32904",
      "profilePic":"img/DoctorImage8.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"jose@bookdoctor.com",
      "education":"MD",
      "specialist":"Urology",
      "ratings":"1"
   },
   {  
      "doctorID":"DO483",
      "doctorName":"Harper",
      "age":"31",
      "address":"Ap #285-7193 Ullamcorper Avenue, Amesbury HI 93373, (302) 259-2375",
      "profilePic":"img/DoctorImage9.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"harper@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Oncologist",
      "ratings":"2"
   },
    {  
      "doctorID":"DO484",
      "doctorName":"Ryan",
      "age":"32",
      "address":"No 71, Pilgrim Avenue, Chevy Chase, MD 20815",
      "profilePic":"img/DoctorImage10.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"ryan@bookdoctor.com",
      "education":"PhD",
      "specialist":"Epidemiologist",
      "ratings":"5"
   },
    {  
      "doctorID":"DO485",
      "doctorName":"David",
      "age":"36",
      "address":"No 226 E, Fee Ave, Melbourne FL 32901 ",
      "profilePic":"img/DoctorImage11.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"david@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Endocrinologist",
      "ratings":"1"
   },
    {  
      "doctorID":"DO486",
      "doctorName":"Smith",
      "age":"30",
      "address":"No 514, S. Magnolia St, Orlando, FL 32806",
      "profilePic":"img/DoctorImage12.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"smith@bookdoctor.com",
      "education":"M.D(Doctor of Medicine)",
      "specialist":"Dermatologist",
      "ratings":"5"
   },
   {  
      "doctorID":"DO487",
      "doctorName":"MILLER",
      "age":"33",
      "address":"No 33, Brookside Avenue, Centreville, VA 20120",
      "profilePic":"img/DoctorImage13.jpg",
      "gender":"Male",
      "mobileNumber":442071838750,
      "emailID":"miller@bookdoctor.com",
      "education":"DMS(Doctor of Dental Medicine)",
      "specialist":"Dentist",
      "ratings":"1"
   },
   {  
      "doctorID":"DO488",
      "doctorName":"TAYLOR",
      "age":"32",
      "address":"No 761, Branch St, Leland, NC 28451",
      "profilePic":"img/DoctorImage14.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"taylor@bookdoctor.com",
      "education":"PhD",
      "specialist":"Psychiatrist",
      "ratings":"5"
   },
   {  
      "doctorID":"DO489",
      "doctorName":"ANDERSON",
      "age":"34",
      "address":"No 228, West Country Club St, Morganton, NC 28655",
      "profilePic":"img/DoctorImage15.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"anderson@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Pathologist",
      "ratings":"3"
   },
   {  
      "doctorID":"DO490",
      "doctorName":"CLARK",
      "age":"32",
      "address":"No 264, Berkshire Rd, Shirley, NY 11967",
      "profilePic":"img/DoctorImage16.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"clark@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Neurosurgeon",
      "ratings":"2"
   },
   {  
      "doctorID":"DO491",
      "doctorName":"ROBINSON",
      "age":"37",
      "address":"No 73, Park Drive Berwyn, IL 60402",
      "profilePic":"img/DoctorImage17.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"robinson@bookdoctor.com",
      "education":"MD",
      "specialist":"Nephrologist",
      "ratings":"4"
   },
   {  
      "doctorID":"DO492",
      "doctorName":"NELSON",
      "age":"33",
      "address":"No 248 E. Alderwood Lane Dearborn, MI 48124",
      "profilePic":"img/DoctorImage18.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"nelson@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Gastroenterologist",
      "ratings":"2"
   },
   {  
      "doctorID":"DO493",
      "doctorName":"ADAMS",
      "age":"32",
      "address":"No 19, Hillcrest Road West Deptford, NJ 08096",
      "profilePic":"img/DoctorImage1.jpg",
      "gender":"Male",
      "mobileNumber":4441234568,
      "emailID":"adams@bookdoctor.com",
      "education":"MBBS",
      "specialist":"Ophthalmologist",
      "ratings":"3"
   }
];

      $scope.doctorsList.forEach(function(x){
      x.rating= {
      iconOn: 'ion-ios-star',    
      iconOff: 'ion-ios-star-outline',  
      iconOnColor:"#d62304", 
      /*iconOnColor: 'rgb(255, 215, 0)', */ 
      iconOffColor: "#ffa4a3",
       // 'rgb(224, 224, 224)',   
      rating: x.ratings, 
      minRating: 0,    
      readOnly: true, // Set to true so user cannot edit rating
      callback: function(rating) {    //Mandatory
        // do nothing as read only stars 
      }
   }
   })
     
      $scope.ratingsCallback = function(rating, index) {
        console.log('Selected rating is : ', rating, ' and the index is : ', index);
      };

       $ionicPopover.fromTemplateUrl('templates/popover.html', {
            scope: $scope,
        }).then(function(popover) {
            $scope.popover = popover;
        });

        $scope.specialistLists=["ShowAll","Immunology","Obstetrics and gynecology", "Cardiology", "Gynecology"
        , "General surgery", "Neurology", "Urology", "Oncologist", "Epidemiologist", "Endocrinologist"
        , "Dermatologist", "Dentist", "Endocrinologist", "Dermatologist", "Nephrologist", "Psychiatrist"
        , "Pathologist", "Neurosurgeon", "Gastroenterologist", "Ophthalmologist"];

})