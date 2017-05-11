angular.module('bookDoctor')
.controller("DoctorProfileController",function ($scope, $state) {
  $scope.goBack = function() {
    $state.go('homeScreen');
  }
  
  $scope.speciality = ""+
  "<li>Anesthesiologist, a doctor who gives anaesthesia to patients</li>"+
  "<li>Ophthalmologist, a doctor who specialises in treating eyes</li>"+
  "<li>Podiatrist, a doctor who specialises in treating feet</li>"+
  "<li>Surgeon, a doctor who performs surgery</li>";  

  $scope.educationInfo = "Dr Randal A Aaberg completed her MBBS, New York City and underwent training in ECHO from "+
  "Chicago, Illinois. Before joining SIMS Hospital, she worked in various hospital like Cartersville Medical Center "+
  "and Effingham Hospital <br> <h5>Professional Competencies of your Doctor:</h5>"+
  "<li>Training PG students at National Board Cardiology</li>"+
  "<li>Training BSc cardiac Technology at MGR University</li>"+
  "<li>Assisting PG students for Dissertations and paper presentation</li>";

  $scope.awardList = [
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
  }];
 
  $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  4,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };

      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
      };

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