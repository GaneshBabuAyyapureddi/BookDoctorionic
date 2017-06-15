//var appTheme = "#11c1f3";
var app = angular.module('bookDoctor')
.controller("HomeController",function ($scope, $state,$ionicPopover, $ionicModal,$compile,uiCalendarConfig,$http,$filter,$cordovaSQLite,$rootScope,$ionicPopup) {
$rootScope.appTheme ="#11c1f3";
var showAppointmentDetails;
/*Add appointment modal view*/
var specialityArray = ["E.N.T", "Pediatrician", "Cardialogist","Phyciatrist",
"Neurologist","General Physician"];
var doctorsArray = [["Dr.George","Dr.Donald","Dr.Gilbert","Dr.Henry Aldrich","Dr.Edwin Arnold","Dr. Jane Austen"],
["Dr. Jane Austen","Dr.Edwin Arnold","Dr.Gilbert","Dr.Donald","Dr.Henry Aldrich","Dr.George"],
["Dr.Edwin Arnold","Dr. Jane Austen","Dr.Thomas Amory","Dr.Henry Aldrich","Dr.Jane Austen","Dr.George"],
["Dr.Jane Austen","Dr.Gilbert","Dr. Henry Aldrich","Dr.Donald","Dr.George","Dr.Edwin Arnold"],
["Dr.Edwin Arnold","Dr.Gilbert","Dr.Henry Aldrich","Dr. John Austin","Dr.Jane Austen","Dr.Thomas Amory"],
["Dr.Jane Austen","Dr.Edwin Arnold","Dr.Donald","Dr.Gilbert","Dr. John Austin","Dr.Henry Aldrich"]];

    $scope.options1 = specialityArray;
    $scope.options2 = []; // we'll get these later
    $scope.getOptions2 = function(option1){
        // just some silly stuff to get the key of what was selected since we are using simple arrays.
        console.log('Option1 selected:'+option1);
        var key = $scope.options1.indexOf(option1);
        // Here you could actually go out and fetch the options for a server.
        var myNewOptions = doctorsArray[key];
        // Now set the options.
        // If you got the results from a server, this would go in the callback
        $scope.options2 = myNewOptions;
    };

/*Date Picker*/

//$scope.todayDate = $filter("date")(Date.now(), 'yyyy-MM-dd');
//$scope.date = $filter("date")(Date.now(), 'yyyy-MM-dd');

$scope.date = new Date();
$scope.appointmentTitle = "Book Appointment";
$scope.specialityShow = true;
$scope.doctorShow = true;

/*Date Picker*/
var todayDate = new Date();
var year = todayDate.getFullYear();
var month = todayDate.getMonth()+1;
if (month<10){
  month = "0" + month;
};
var day = todayDate.getDate();
$scope.todayDate = year + "-" + month + "-" + day;



$scope.timeNow=new Date();
var hour = $scope.timeNow.getHours();
var minutes = $scope.timeNow.getMinutes();
$scope.timeNow.setHours(hour,minutes,0,0);



// var seld;var selm;var sely;
// var selectedDate = new Date(Date.parse($scope.date)) ;
// console.log(selectedDate.getDate());
// console.log(selectedDate.getMonth()+1);
// console.log(selectedDate.getFullYear());
// seld = selectedDate.getDate();
// selm = selectedDate.getMonth()+1;
// sely = selectedDate.getFullYear();

/* add custom event*/
//var appointment = {title: 'Appointment',start: new Date(sely,selm,seld)}
$scope.addAppointment = function(dateobj,timeObj,doctorName) {
  var date = dateobj;
  var time = timeObj;
  var doctor = doctorName;
 
  $scope.events.push(
    {
      title: 'You have an Appointment with ' + doctorName,
      start: new Date(dateobj.getFullYear(), dateobj.getMonth(), dateobj.getDate(),timeObj.getHours(),timeObj.getMinutes(),0),
      end: new Date(dateobj.getFullYear(), dateobj.getMonth(), dateobj.getDate(),timeObj.getHours(),timeObj.getMinutes(),0)
  });
   $scope.insertAppointment(date,time,doctor);
};

/* Insert appointment into DB*/
 $scope.insertAppointment =  function(dateobj,timeObj,doctorName){
    //$scope.alertStatus = 'Insert Prescription done';
    var confirmPopup = $ionicPopup.alert({
              title: 'BookDoctor!',
               template: 'Insert Prescription done!'
            });

            confirmPopup.then(function(res) {
                if(res) {
                   $scope.closeModal();
                 } else {
                    console.log('Not sure!');
                  }
            });
     var db;
      try {
        db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});
      } catch (error) {
        alert(error);
      }
        
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Appointments (patient_id TEXT, appointment_title TEXT, doctorName TEXT,speciality TEXT, startYear TEXT, startMonth TEXT, startDay TEXT, startHour TEXT, startMin TEXT)');
    var month = dateobj.getMonth();
    var day = dateobj.getDate();
    var year = dateobj.getFullYear();
    var hour = timeObj.getHours();
    var min = timeObj.getMinutes();

    $cordovaSQLite.execute(db, 'INSERT INTO Appointments(patient_id, appointment_title, doctorName, speciality, startYear, startMonth, startDay, startHour, startMin ) VALUES (?,?,?,?,?,?,?,?,?)',
      ["100","You Have Appointnment with",doctorName,"ent",year,month,day,hour,min])
              .then(function(result) {
                  $scope.fetchAppointments();
              }, function(error) {
                   $scope.alertStatus = "Error on saving: " + error.message;
              })

    alert($scope.alertStatus);
    $scope.alertStatus = "Insert Appointment done";
  }

/* Read all appointment from DB*/
    $scope.fetchAppointments = function() {
    var db;

        try {
            db = $cordovaSQLite.openDB({name:"myapp_patient.db",location:'default'});   
        } catch (error) {
            alert(error);
        }
        
        // Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, 'SELECT * FROM Appointments')
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


/* Add appointment modal view */
$ionicModal.fromTemplateUrl('Modules/Templates/AddAppointmentModalView.html', {
    scope: $scope
    }).then(function(modal) {
      $scope.addAppointmentModal = modal;
    });
    $scope.openModal = function() {
        $scope.addAppointmentModal.show();
    };

    $scope.closeModal = function() {
        $scope.addAppointmentModal.hide();
    };


    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    $scope.$on('modal.hidden', function() {
        // Execute action
    });

    $scope.$on('modal.removed', function() {
        // Execute action
    });


/*Notification popover*/
$ionicPopover.fromTemplateUrl('Modules/Templates/NotificationView.html', {
      scope: $scope
   }).then(function(popOver) {
  $scope.notificationPopOver = popOver;
});;

 $scope.openNotif = function($event) {
    $http.get('assets/notifications.json')
    .success(function(data) {
    $scope.Notifications = data;
    $scope.notificationPopOver.show($event);
    })
    .error(function(error) {
      console.log('could not find notifications.json'+error);
    });
 };

 $scope.closeNotif = function() {
    $scope.notificationPopOver.hide();
 };

 //Cleanup the popover when we're done with it!
 $scope.$on('$destroy', function() {
    $scope.popover.remove();
 });

 // Execute action on hide popover
 $scope.$on('popover.hidden', function() {
    // Execute action
 });

 // Execute action on remove popover
 $scope.$on('popover.removed', function() {
    // Execute action
 });


 $ionicModal.fromTemplateUrl('Modules/Templates/AppointmentDetailsModalView.html', {
    scope: $scope
    }).then(function(modal) {
      $scope.AppointmentDetailsModal = modal;
    });
$scope.openAppointmentDetails = function(date, jsEvent, view) {
    $scope.data = date;
    console.log($scope.data)
    $scope.AppointmentDetailsModal.show();
};
 $scope.closeAppointmentDetails = function() {
    $scope.AppointmentDetailsModal.hide();
};
//Cleanup the popover when we're done with it!
 $scope.$on('$destroy', function() {
    $scope.popover.remove();
 });

 // Execute action on hide popover
 $scope.$on('popover.hidden', function() {
    // Execute action
 });

 // Execute action on remove popover
 $scope.$on('popover.removed', function() {
    // Execute action
 });




/* Home Calendar */
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

$scope.changeTo = 'Hungarian';
/* event source that pulls from google.com */
$scope.eventSource = {
        url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
        className: 'gcal-event',           // an option!
        currentTimezone: 'America/Chicago' // an option!
};
/* event source that contains custom events on the scope */
$scope.events = [

  // {title: 'You have an appointmentment with Dr.Edwin Arnold',start: new Date(y, m, 1,10,0,0),allDay: false},
  // {title: 'Physiotherapy appointment with Dr.Donald',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
  // {title: 'You have an appointmentment with Dr. John Austin',start: new Date(y, m, d - 3, 16, 0),allDay: false},
  // {title: 'You have an appointmentment with Dr.Henry Aldrich',start: new Date(y, m, d + 4, 16, 0),allDay: false},
  // {title: 'You have an appointmentment with Dr. John Austin',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
  // {title: 'You have an appointmentment with Dr.Thomas Amory',start: new Date(y, m, 28),end: new Date(y, m, 29)}

  {title: 'Dr.Edwin Arnold Appointment',start: new Date(y, m, 1,10,0,0),allDay: false, backgroundColor:$rootScope.combinationTheme,borderColor:$rootScope.combinationTheme},
  {title: 'Physiotherapy appointment with Dr.Donald',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2), backgroundColor:$rootScope.combinationTheme,borderColor:$rootScope.combinationTheme},
  {title: 'Dr.John Appointment',start: new Date(y, m, d - 3, 16, 0),allDay: false, backgroundColor:$rootScope.combinationTheme,borderColor:$rootScope.combinationTheme},
  {title: 'Dr.Henry Appointment',start: new Date(y, m, d + 4, 16, 0),allDay: false, backgroundColor:$rootScope.combinationTheme,borderColor:$rootScope.combinationTheme},
  {title: 'Dr.Austin Appointment',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false, backgroundColor:$rootScope.combinationTheme,borderColor:$rootScope.combinationTheme},
  {title: 'Dr.Thomas Amory Appointment',start: new Date(y, m, 28),end: new Date(y, m, 29), backgroundColor:$rootScope.combinationTheme,borderColor:$rootScope.combinationTheme}

];
/* event source that calls a function on every view switch */
$scope.eventsF = function (start, end, timezone, callback) {
  var s = new Date(start).getTime() / 1000;
  var e = new Date(end).getTime() / 1000;
  var m = new Date(start).getMonth();
  var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
  callback(events);
};

$scope.calEventsExt = {
   color: '#f00',
   textColor: 'yellow',
   events: [ 
      {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
      {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
      {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ]
};
/* alert on eventClick */
$scope.alertOnEventClick = function( date, jsEvent, view){
    $scope.alertMessage = (date.title + ' was clicked ');
};
/* alert on Drop */
 $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
   $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
};
/* alert on Resize */
$scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
   $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
};
/* add and removes an event source of choice */
$scope.addRemoveEventSource = function(sources,source) {
  var canAdd = 0;
  angular.forEach(sources,function(value, key){
    if(sources[key] === source){
      sources.splice(key,1);
      canAdd = 1;
    }
  });
  if(canAdd === 0){
    sources.push(source);
  }
};


/* add custom event*/
$scope.addEvent = function() {
  $scope.events.push({
    title: 'Appointtment with',
    start: new Date(y, m, 10),
    end: new Date(y, m, 10)
  });
};

/* remove event */
$scope.remove = function(index) {
  $scope.events.splice(index,1);
};
/* Change View */
$scope.changeView = function(view,calendar) {
  uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
};
/* Change View */
$scope.renderCalender = function(calendar) {
  if(uiCalendarConfig.calendars[calendar]){
    uiCalendarConfig.calendars[calendar].fullCalendar('render');
  }
};
 /* Render Tooltip */
$scope.eventRender = function( event, element, view ) { 
    element.attr({'tooltip': event.title,
                 'tooltip-append-to-body': true});
    $compile(element)($scope);
};
/* config object */
$scope.uiConfig = {
  calendar:{
    height: 450,
    editable: true,
    header:{
      left: 'title',
      center: '',
      right: 'today prev,next'
    },
    eventClick: $scope.openAppointmentDetails,
    eventDrop: $scope.alertOnDrop,
    eventResize: $scope.alertOnResize,
    eventRender: $scope.eventRender

  }
};

$scope.changeLang = function() {
  if($scope.changeTo === 'Hungarian'){
    $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
    $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
    $scope.changeTo= 'English';
  } else {
    $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    $scope.changeTo = 'Hungarian';
  }
};  





/* event sources array*/
$scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
$scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];


    myDate: String = new Date().toISOString();
});




