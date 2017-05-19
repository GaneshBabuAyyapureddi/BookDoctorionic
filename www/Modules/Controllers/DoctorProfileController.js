angular.module('bookDoctor')
.controller("DoctorProfileController",function ($scope, $state, $stateParams) {
  
  $scope.$on('$ionicView.beforeEnter', function(){
  $scope.profileObject = $stateParams.doctorProfile;

  $scope.ratings = $scope.profileObject.ratings;
  $scope.doctorName = $scope.profileObject.doctorName;
  $scope.education = $scope.profileObject.education;
  $scope.patientList = $scope.profileObject.reviewsAndratings;
  $scope.awardList = $scope.profileObject.awards;
  console.log($scope.patientList);
  $scope.patientList.forEach(function(x){
      x.rating= {
      iconOn: 'ion-ios-star',    
      iconOff: 'ion-ios-star-outline',   
      // iconOnColor: 'rgb(255, 215, 0)',  
      // iconOffColor:  'rgb(224, 224, 224)',   
      iconOnColor:"#d62304", 
      iconOffColor: "#ffa4a3",
      rating: x.ratings, 
      minRating: 0,    
      readOnly: true, // Set to true so user cannot edit rating
      callback: function(rating) {    //Mandatory
        // do nothing as read only stars 
      }
    }
   });
  });
  $scope.goBack = function() {
    $state.go('doctorSearch');
  }
  
  $scope.speciality = ""+
  "<li>Anesthesiologist, a doctor who gives anaesthesia to patients</li>"+
  "<li>Ophthalmologist, a doctor who specialises in treating eyes</li>"+
  "<li>Podiatrist, a doctor who specialises in treating feet</li>"+
  "<li>Surgeon, a doctor who performs surgery</li>";  

  $scope.educationInfo = "Dr "+ $scope.doctorName +" completed his "+$scope.education+", New York City and underwent training in ECHO from "+
  "Chicago, Illinois. Before joining SIMS Hospital, she worked in various hospital like Cartersville Medical Center "+
  "and Effingham Hospital <br> <h5>Professional Competencies of your Doctor:</h5>"+
  "<li>Training PG students at National Board Cardiology</li>"+
  "<li>Training BSc cardiac Technology at MGR University</li>"+
  "<li>Assisting PG students for Dissertations and paper presentation</li>";

  /*$scope.awardList = [
  {
    "title":"Excellence in preventive health", "data":"For demonstrable success in health promotion or secondary prevention:<br>"+
    "<li> Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)</li>"+
    "<li>Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)</li>"
  },
    {
    "title":"Primary healthcare in challenging circumstances", "data":"For saving lives or improving health indicators of a population in difficult conditions:<br>"+
    "<li>Jawadhi Hills Health and Development Project, Tamil Nadu (Anuradha Rose)</li>"+
    "<li>Morbidity control of lymphatic filariasis using integrative treatment, Kerala (Saravu R Narahari)</li>"
  },  
  {
    "title":"Excellence in medical education", "data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:<br>"+
    "<li> Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)</li>"
  },
  {
    "title":"Quality improvement in healthcare", "data":"For a specific initiative that has significantly improved healthcare quality:<br>"+
    "<li>Paediatric cardiac unit, Amrita Institute of Medical Sciences, Kochi (Krishna Kumar)</li>"+
    "<li>Accreditation programme, National Neonatology Forum of India, New Delhi (Vikram Datta)</li>"
  },
    {
    "title":"Surgical team of the year", "data":"For a team whose project has measurably improved surgical care:<br>"+
    "<li>Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)</li>"+
    "<li>Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)</li>"
  },
  {
    "title":"Innovation in healthcare technology", "data":"For innovation that has improved the outcomes and experience of patients:<br>"+
    "<li>Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)</li>"+
    "<li>Bhattacharjee pupil expansion ring, Kolkata (Suven Bhattacharjee)</li>"
  }];*/
 
  $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        // iconOnColor: 'rgb(255, 215, 0)',  
        // iconOffColor:  'rgb(224, 224, 224)',   
        iconOnColor:"#d62304", 
        iconOffColor: "#ffa4a3",        
        rating:  $scope.ratings,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };
 
      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
      };

  /*$scope.patientList = [  
   {  
      "patientID":"DO451",
      "patientName":"Ethan",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Mahboob Khan is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Olivia",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Jacob",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"James Wyatt",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Madison",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }];*/   

   
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