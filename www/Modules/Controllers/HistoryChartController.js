angular.module('bookDoctor')

.controller("HistoryChartController", function($scope, $state, $ionicModal, $stateParams,$ionicHistory){
 // $scope.profileObject = $stateParams.patientProfile; 
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
  $ionicModal.fromTemplateUrl('create-patientReportModal.html', {
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
  $scope.goToPatientProfile = function(){
    $state.go('patientProfile');
  }
 
  $scope.goBack = function() {
   // $state.go('patientSearch');
    $ionicHistory.goBack();
  }
 $scope.goToLabResultsScreen = function(profileObject){
    $state.go('labResults', {"patientProfile":profileObject});
  }
  $scope.goToPrescriptionScreen = function(profileObject) {
    $state.go('newPrescription', {"patientProfile":profileObject});
  }
  $scope.goToAllergiesScreen = function(profileObject) {
    $state.go('allergies', {"patientProfile":profileObject});
  }
  $scope.goToImmunizationScreen = function(profileObject) {
    $state.go('immunization', {"patientProfile":profileObject});
  }
  $scope.goToDiagnosisScreen = function(profileObject) {
    $state.go('diagnosis', {"patientProfile":profileObject});
  }
  $scope.goToVisitsScreen = function(profileObject) {
    $state.go('visits', {"patientProfile":profileObject});
  }

 $scope.persons = [{"name":"Heart Rate", "date":"Feb22, 2:14 PM", "value":"99", "description":"beats/min"},
  {"name":"Blood Pressure", "date":"Feb22, 2:14 PM", "value":"113/76", "description":"mmahg"},
  {"name":"Blood Glucose","date":"Feb22, 2:14 PM", "value":"76", "description":"mmhol"},
  {"name":"Body Weight", "date":"Oct20, 2016 11.27 AM", "value":"58", "description":"Kg"},
  {"name":"BMI", "date":"Feb22, 2:14 PM", "value":"95", "description":"BMI"},
   {"name":"Body Fat Percentage", "date":"Oct20, 2016", "value":"28", "description":"%"}];
  //Chart related methods
  $scope.heartlabels = ["", "", "", "", "", "", ""];
    //$scope.series = ['Average Spent Effort', 'Average Estimated Effort', 'Average Remainning Effort'];
    $scope.heartdata = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
     //$scope.heartdohnutdata = [65, 59, 80, 81, 56, 55, 40]; 

    $scope.heartcolors = ['#68071d'];

     $scope.bplabels = ["", "", "", "", "", "", ""];
    //$scope.series = ['Average Spent Effort', 'Average Estimated Effort', 'Average Remainning Effort'];
    $scope.bpdata = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];   

    $scope.bpcolors = ['#7aa74d', '#164af9'];

     $scope.bglabels = ["", "", "", "", "", "", ""];
    //$scope.series = ['Average Spent Effort', 'Average Estimated Effort', 'Average Remainning Effort'];
    $scope.bgdata = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
    
    //$scope.heartdohnutdata = [65, 59, 80, 81, 56, 55, 40]; 

    $scope.bgcolors = ['#164af9'];
      $scope.bwlabels = ["", "", "", "", "", "", ""];
    //$scope.series = ['Average Spent Effort', 'Average Estimated Effort', 'Average Remainning Effort'];
    $scope.bwdata = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
    
    //$scope.heartdohnutdata = [65, 59, 80, 81, 56, 55, 40]; 

    $scope.bwcolors = ['#f0c141'];

    $scope.bmilabels = ["", "", "", "", "", "", ""];
    //$scope.series = ['Average Spent Effort', 'Average Estimated Effort', 'Average Remainning Effort'];
    $scope.bmidata = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
    
    $scope.dohnutdata = [65, 59, 80, 81, 56, 55, 40];
    $scope.piedata = [65, 59, 80, 81, 56, 55, 40];
    $scope.polardata = [65, 59, 80, 81, 56, 55, 40];    

    $scope.colors = ['#f0c141', '#ff6384', '#ff8e72', '#f0c141'];
    

    $scope.bfplabels = ["", "", "", "", "", "", ""];
    //$scope.series = ['Average Spent Effort', 'Average Estimated Effort', 'Average Remainning Effort'];
    $scope.bfpdata = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
    
     //Globals
    $scope.myChartOptions = {
        // Boolean - Whether to animate the chart
        animation: true,

        // Number - Number of animation steps
        animationSteps: 60,

        // String - Animation easing effect
        animationEasing: "easeOutQuart",

        // Boolean - If we should show the scale at all
        showScale: true,

        // Boolean - If we want to override with a hard coded scale
        scaleOverride: false,

        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: null,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: null,
        // Number - The scale starting value
        scaleStartValue: null,

        // String - Colour of the scale line
        scaleLineColor: "rgba(0,0,0,.1)",

        // Number - Pixel width of the scale line
        scaleLineWidth: 1,

        // Boolean - Whether to show labels on the scale
        scaleShowLabels: true,

        // Interpolated JS string - can access value
        scaleLabel: "<%=value%>",

        // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
        scaleIntegersOnly: true,

        // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: false,

        // String - Scale label font declaration for the scale label
        scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Scale label font size in pixels
        scaleFontSize: 12,

        // String - Scale label font weight style
        scaleFontStyle: "normal",

        // String - Scale label font colour
        scaleFontColor: "#666",

        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: true,

        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: false,

        // Array - Array of string names to attach tooltip events
        tooltipEvents: ["mousemove", "touchstart", "touchmove"],

        // String - Tooltip background colour
        tooltipFillColor: "rgba(0,0,0,0.8)",

        // String - Tooltip label font declaration for the scale label
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip label font size in pixels
        tooltipFontSize: 14,

        // String - Tooltip font weight style
        tooltipFontStyle: "normal",

        // String - Tooltip label font colour
        tooltipFontColor: "#fff",

        // String - Tooltip title font declaration for the scale label
        tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip title font size in pixels
        tooltipTitleFontSize: 14,

        // String - Tooltip title font weight style
        tooltipTitleFontStyle: "bold",

        // String - Tooltip title font colour
        tooltipTitleFontColor: "#fff",

        // Number - pixel width of padding around tooltip text
        tooltipYPadding: 6,

        // Number - pixel width of padding around tooltip text
        tooltipXPadding: 6,

        // Number - Size of the caret on the tooltip
        tooltipCaretSize: 8,

        // Number - Pixel radius of the tooltip border
        tooltipCornerRadius: 6,

        // Number - Pixel offset from point x to tooltip edge
        tooltipXOffset: 10,

        // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

        // String - Template string for single tooltips
        multiTooltipTemplate: "<%= value %>",

        // Function - Will fire on animation progression.
        onAnimationProgress: function(){},

        // Function - Will fire on animation completion.
        onAnimationComplete: function(){}
    };     
})
