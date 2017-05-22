angular.module('bookDoctor')

.controller("doctorSearchController",function ($scope, $state, $ionicHistory, $ionicPopover) {
   $scope.specialist = "";

   $scope.goBack = function() {
    // $ionicHistory.goBack();
    $state.go('dashboard.homeScreen');
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
      "specialist":"Radiology",
      "specialityDescription":[{"title":"Oncology,"},{"title":"Body and cardiovascular MRI/CT imaging"}],
      "ratings":"3",
      "awards":[{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention:","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]},{"title":"Primary healthcare in challenging circumstances", "data":"For saving lives or improving health indicators of a population in difficult conditions:","awardsList":[{"key":"Jawadhi Hills Health and Development Project, Tamil Nadu (Anuradha Rose)"},{"key":"Morbidity control of lymphatic filariasis using integrative treatment, Kerala (Saravu R Narahari)"}]},{"title":"Excellence in medical education", "data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":"Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"}]},{"title":"Quality improvement in healthcare", "data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Paediatric cardiac unit, Amrita Institute of Medical Sciences, Kochi (Krishna Kumar)"},{"key":"Accreditation programme, National Neonatology Forum of India, New Delhi (Vikram Datta)"}]},{"title":"Surgical team of the year", "data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"}]},{"title":"Innovation in healthcare technology", "data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":"Bhattacharjee pupil expansion ring, Kolkata (Suven Bhattacharjee)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Ethan",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR George is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
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
   }]
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
      "ratings":"5",
      "specialityDescription":[{"title":"Endoscopy both Laparoscopy and Hysteroscopy"},{"title":"Thermal Ablation"},{"title":"Intrauterine Insemination"},{"title":"Colposcopy"}],
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO452",
      "patientName":"Arthur",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO451",
      "patientName":"Gilbert",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Donald is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Robert",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO455",
      "patientName":"Martin",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Henry Aldrich",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   }]
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
      "ratings":"3",
      "specialityDescription":[{"title":"Interventional cardiology – Coronary and non-Coronary"},{"title":"Interventional cardiology grown up congenital heart disease"},{"title":"Pacemaker"},{"title":"Involved in DNB cardiology training programs"}],
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Edwin Arnold",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Gilbert is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Jane Austen",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO455",
      "patientName":"Williams",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Michael",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Shamim Azad",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   }]
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
      "specialityDescription":[{"title":"Endoscopy both Laparoscopy and Hysteroscopy"},{"title":"Thermal Ablation"},{"title":"Intrauterine Insemination"},{"title":"Colposcopy"}],
      "ratings":"5",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   
   {  
      "patientID":"DO452",
      "patientName":"Benjamin",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO451",
      "patientName":"Charles",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Arthur is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Andrew",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO455",
      "patientName":"John Austin",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Ben Carson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   }]
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
       "specialityDescription":[{"title":"Toxicology"},{"title":"Resuscitation"},{"title":"Trauma and Administration"},{"title":"Critical care"}],
      "ratings":"2",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO452",
      "patientName":"Lady Marshall",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Masan Mackay",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO455",
      "patientName":"Lanny Lewis",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Stuart Lyman",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO451",
      "patientName":"Lesli King",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Robert is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   }]
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
      "specialityDescription":[{"title":"Brain Surgery"},{"title":"Electroconvulsive Therapy"},{"title":"Hemispherectomy"},{"title":"Transcutaneous Electrical Nerve Stimulation"}],
      "ratings":"2",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Delilah Knox",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Henry Aldrich is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Camden Duran",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO452",
      "patientName":"Phylis Jones",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO454",
      "patientName":"Lesli King",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Hannah Langdon",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "ratings":"5",
      "specialityDescription":[{"title":"Endo Urology / Laparoscopy Advanced / Robotics"},{"title":"Renal Transplantation (Lap Donor Nephrectomy)"},{"title":"Vascular Access Surgery"},{"title":"Pediatric Urology"}],
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   
   {  
      "patientID":"DO452",
      "patientName":"Shirley Ogdon",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Briyana Sanderson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO451",
      "patientName":"Lanny Lewis",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Martin is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO454",
      "patientName":"Stefan Simpson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Fiona Roberts",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialityDescription":[{"title":"Haematooncology"},{"title":"Solid tumor"},{"title":"Bone Marrow Transplant"},{"title":"Neurological Cancer"}],
      "ratings":"1",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
    {  
      "patientID":"DO455",
      "patientName":"Lincoln",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO452",
      "patientName":"Clara Litte",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Sadie Richards",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO451",
      "patientName":"Alexander Allio",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Edwin Arnold is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO454",
      "patientName":"Paige Howell",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   }]
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
      "specialist":"Pediatrics",
      "specialityDescription":[{"title":"Asthma & Management"}],
      "ratings":"4",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Kate Smith",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Shamim Azad is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Jennifer Smith",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Leo Rockwald",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO455",
      "patientName":"Brennan Pulson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },{  
      "patientID":"DO454",
      "patientName":"Pierce Cohen",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   }]
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
      "specialityDescription":[{"title":"Corrective jaw surgeries"},{"title":"Dental implant logy"},{"title":"Maxillofacial pathology"},{"title":"Third molar surgery Aesthetic dentistry"}],
      "ratings":"5",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO452",
      "patientName":"Brok Jhonson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO451",
      "patientName":"Gerald Duffy",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Jane Austen is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO454",
      "patientName":"Laila Castro",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Peter",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO455",
      "patientName":"Lily Wright",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialityDescription":[{"title":"Cosmetic Dermatology"},{"title":"Dermatosurgery"},{"title":"Systemic Dermatology"},{"title":"Lasers"}],
      "ratings":"3",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO452",
      "patientName":"Monica",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Axel Elliot",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO451",
      "patientName":"Elias Grant",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Michael is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO454",
      "patientName":"Fernandez",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Ruby Nichols",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialityDescription":[{"title":"Corrective jaw surgeries"},{"title":"Dental implant logy"},{"title":"Maxillofacial pathology"},{"title":"Third molar surgery Aesthetic dentistry"}],
      "ratings":"4",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
 
   {  
      "patientID":"DO452",
      "patientName":"Ashton Ryder",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Victoria Reed",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
     {  
      "patientID":"DO451",
      "patientName":"Valeria Gardner",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Williams is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Clark Garcia",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Samuel Evans",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   }]
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
       "specialityDescription":[{"title":"Medically unexplained symptoms/ chronic pain"},{"title":"Neuro psychiatric conditions"},{"title":"Depression / Anxiety/OCD/ Bipolar Disorder"},{"title":"Smoking cessation/ alcohol de-addiction and other addictions"}],
      "ratings":"2",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Prince Wright",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Charles is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
  
   {  
      "patientID":"DO453",
      "patientName":"Aaron Barton",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Issac Clarke",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Hampton",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }, {  
      "patientID":"DO452",
      "patientName":"Martin Robinson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   }]
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
      "specialist":"ENT",
      "specialityDescription":[{"title":"Paediatric ENT"},{"title":"Head & Neck Surgery"}],
      "ratings":"5",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
  
   {  
      "patientID":"DO452",
      "patientName":"Sadie Harrington",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Diane Kerr",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
    {  
      "patientID":"DO451",
      "patientName":"Liliana French",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Benjamin is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO454",
      "patientName":"Sandra FitzPatrick",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Dirk Jenkins",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialist":"NeuroScience",
      "specialityDescription":[{"title":"Endoscopic skull base and Endoscopic intracranial surgery"},{"title":"Cerebrovascular surgery and cerebello-pontine angle tumor surgery"}],
      "ratings":"1",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
  
   {  
      "patientID":"DO452",
      "patientName":"Dyen Myers",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"London Gordon",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Jaxon Washington",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
    {  
      "patientID":"DO451",
      "patientName":"Brenda Hawkins",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Andrew is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Gabriel Miller",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialist":"Ophthalmology",
      "specialityDescription":[{"title":"Anterior Segment especially Phaco Surgery & Medical Retina"},{"title":"Diabetic Retinopathy"},{"title":"LASER Surgery"},{"title":"Neuroophthalmology"}],
      "ratings":"5",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   
   {  
      "patientID":"DO452",
      "patientName":"Caroline Tucker",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO451",
      "patientName":"Tristen Freeman",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Ben Carson is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
    {  
      "patientID":"DO454",
      "patientName":"Jean Adams",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Eilana Vargas",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO455",
      "patientName":"Ginna Collins",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialityDescription":[{"title":"Inflammatory bowel disease"},{"title":"Small bowel disease"},{"title":"Pancreatitis"},{"title":"Therapeutic ERCP"}],
      "ratings":"4",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[
        {  
      "patientID":"DO453",
      "patientName":"Emma Franklin",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO451",
      "patientName":"Fae Davis",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR John Austin is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Jae Parkler",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO454",
      "patientName":"Jacob Soto",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Alden Watson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialist":"Plastic Surgery",
      "specialityDescription":[{"title":"Hand Surgery"},{"title":"Microvascular Surgery"},{"title":"Craniofacial Surgery"}],
      "ratings":"4",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Mason Jenson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Thomas Amory is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Olivia Garret",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO452",
      "patientName":"Shophia",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO454",
      "patientName":"Aiden Day",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Sean Hughes",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "education":"DMRD, DNB",
      "specialist":"Radiology",
      "specialityDescription":[{"title":"Oncology,"},{"title":"Body and cardiovascular MRI/CT imaging"}],
      "ratings":"4",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Alcot Maccoy",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Jacob is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   
   {  
      "patientID":"DO453",
      "patientName":"Cory Myers",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Janet Gray",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Aileen King",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO455",
      "patientName":"Gene Hughes",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "ratings":"1",
      "specialityDescription":[{"title":"Endoscopy both Laparoscopy and Hysteroscopy"},{"title":"Thermal Ablation"},{"title":"Intrauterine Insemination"},{"title":"Colposcopy"}],
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[ 
        {  
      "patientID":"DO453",
      "patientName":"Robin Reynolds",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO451",
      "patientName":"Max Parker",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Gabriel is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Joel Cooper",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO454",
      "patientName":"Garret Jenkins",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Galen Foster",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "ratings":"2",
      "specialityDescription":[{"title":"Interventional cardiology – Coronary and non-Coronary"},{"title":"Interventional cardiology grown up congenital heart disease"},{"title":"Pacemaker"},{"title":"Involved in DNB cardiology training programs"}],
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Daniel Hicks",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Samuel is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   
   {  
      "patientID":"DO453",
      "patientName":"Mira Jones",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Tammy Mullins",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Sara Pender",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO455",
      "patientName":"Brooklyn Ellis",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialityDescription":[{"title":"Endoscopy both Laparoscopy and Hysteroscopy"},{"title":"Thermal Ablation"},{"title":"Intrauterine Insemination"},{"title":"Colposcopy"}],
      "ratings":"4",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Ellie Reynolds",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Ethan is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Grace West",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Maya Russell",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO455",
      "patientName":"Aileen King",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Peyton Woods",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   }
   ]
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
       "specialityDescription":[{"title":"Toxicology"},{"title":"Resuscitation"},{"title":"Trauma and Administration"},{"title":"Critical care"}],
      "ratings":"4",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO452",
      "patientName":"Stan Ward",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
    {  
      "patientID":"DO451",
      "patientName":"Renee Ellington",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Madison is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Charise Phillips",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Aimee Green",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Sebastian",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialityDescription":[{"title":"Brain Surgery"},{"title":"Electroconvulsive Therapy"},{"title":"Hemispherectomy"},{"title":"Transcutaneous Electrical Nerve Stimulation"}],
      "ratings":"3",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Isaac Alexander",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Jayden is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Charlie Butler",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
    {  
      "patientID":"DO452",
      "patientName":"Evan Washington",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO454",
      "patientName":"Easten Warren",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Robertson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "ratings":"1",
       "specialityDescription":[{"title":"Endo Urology / Laparoscopy Advanced / Robotics"},{"title":"Renal Transplantation (Lap Donor Nephrectomy)"},{"title":"Vascular Access Surgery"},{"title":"Pediatric Urology"}],
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Robertson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Jose is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Max Hunt",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO455",
      "patientName":"Kaitlyn Holmes",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Ellie Palmer",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   }]
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
      "specialityDescription":[{"title":"Haematooncology"},{"title":"Solid tumor"},{"title":"Bone Marrow Transplant"},{"title":"Neurological Cancer"}],
      "ratings":"2",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[ 
   {  
      "patientID":"Landon Matthews",
      "patientName":"Olivia",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Nicholas",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
    {  
      "patientID":"DO451",
      "patientName":"Tyler Lane",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Harper is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO454",
      "patientName":"Ryder Ray",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Staneley",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialist":"Endocrinology",
      "specialityDescription":[{"title":"Corrective jaw surgeries"},{"title":"Dental implant logy"},{"title":"Maxillofacial pathology"},{"title":"Third molar surgery Aesthetic dentistry"}],
      "ratings":"5",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO452",
      "patientName":"Toby Young",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Adan Thompson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO451",
      "patientName":"Wyatt James",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR Ryan is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO454",
      "patientName":"Edmund Watson ",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Prince Wright",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialist":"Pediatrics",
      "specialityDescription":[{"title":"Neonatology"}],
      "ratings":"1",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Anthony",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR David is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
  
   {  
      "patientID":"DO453",
      "patientName":"Mia Martin",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
    {  
      "patientID":"DO452",
      "patientName":"Elijah Lee",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO454",
      "patientName":"Derrick",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Kathy Webster",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialityDescription":[{"title":"Cosmetic Dermatology"},{"title":"Dermatosurgery"},{"title":"Systemic Dermatology"},{"title":"Lasers"}],
      "ratings":"5",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Smith",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR George is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO453",
      "patientName":"Tricia Berry",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO452",
      "patientName":"Trista Avery",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO454",
      "patientName":"Miles Fleming",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Milly Ellison",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialityDescription":[{"title":"Corrective jaw surgeries"},{"title":"Dental implant logy"},{"title":"Maxillofacial pathology"},{"title":"Third molar surgery Aesthetic dentistry"}],
      "ratings":"1",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Joseph",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR MILLER is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   
   {  
      "patientID":"DO453",
      "patientName":"Lily Wright",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Natalie Hill",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Grace Mitchell",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO455",
      "patientName":"Vivian Gill ",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
       "specialityDescription":[{"title":"Medically unexplained symptoms/ chronic pain"},{"title":"Neuro psychiatric conditions"},{"title":"Depression / Anxiety/OCD/ Bipolar Disorder"},{"title":"Smoking cessation/ alcohol de-addiction and other addictions"}],
      "ratings":"5",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Hoffman",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR TAYLOR is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Audrey Rowe",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO454",
      "patientName":"Quinn Chapman",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Leah Norman",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO453",
      "patientName":"Tyler Deleon",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   }]
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
      "specialist":"ENT",
      "specialityDescription":[{"title":"Paediatric ENT"},{"title":"Head & Neck Surgery"}],
      "ratings":"3",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Molly Larson",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR ANDERSON is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"Maria Dunn",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Harrison",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO455",
      "patientName":"Daniel Hicks",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },{  
      "patientID":"DO454",
      "patientName":"Cameron",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   }]
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
      "specialist":"NeuroScience",
      "specialityDescription":[{"title":"Endoscopic skull base and Endoscopic intracranial surgery"},{"title":"Cerebrovascular surgery and cerebello-pontine angle tumor surgery"}],
      "ratings":"2",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO451",
      "patientName":"Philip Goodwin",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR CLARK is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Mira Jones",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO452",
      "patientName":"Eliot Malone",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Tmmy Mullins",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Max Bolivar",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   }
   ]
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
      "specialist":"Ophthalmology",
      "specialityDescription":[{"title":"Anterior Segment especially Phaco Surgery & Medical Retina"},{"title":"Diabetic Retinopathy"},{"title":"LASER Surgery"},{"title":"Neuroophthalmology"}],
      "ratings":"4",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO454",
      "patientName":"Robert Winkler",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO451",
      "patientName":"Vincent",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR ROBINSON is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO452",
      "patientName":"WALIMBE AMIT",
      "profilePic":"img/doctor_round.jpg",
      "comments":"My uncle went to him to to get treatment for sprain in the ankles. He was surprised to see the doctor's attitude. The doctor without even asking said to place the leg on the table and twisted it. My uncle's pain went even worse. After he scolded the doctor, the doctor then did the treatment by band-aiding him properly.",
      "ratings":"3"
   },
   {  
      "patientID":"DO453",
      "patientName":"Alexander",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO454",
      "patientName":"Craig Paul",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
      "ratings":"4"
   },
   {  
      "patientID":"DO455",
      "patientName":"Jordyn Compos",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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
      "specialityDescription":[{"title":"Inflammatory bowel disease"},{"title":"Small bowel disease"},{"title":"Pancreatitis"},{"title":"Therapeutic ERCP"}],
      "ratings":"2",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[
        {  
      "patientID":"DO455",
      "patientName":"Madison",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   },
   {  
      "patientID":"DO451",
      "patientName":"Ethan",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR NELSON is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
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
   }
   ]
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
      "specialist":"Plastic Surgery",
      "specialityDescription":[{"title":"Hand Surgery"},{"title":"Microvascular Surgery"},{"title":"Craniofacial Surgery"}],
      "ratings":"3",
      "awards":[{"title":"Surgical team of the year","data":"For a team whose project has measurably improved surgical care:","awardsList":[{"key":"Transplant Surgery Unit at Apollo Hospitals, New Delhi (Karan Thakur)"},{"key":"Centre for Liver and Biliary Sciences, Indraprastha Apollo Hospital, New Delhi (Subash Gupta)"},{"key":"Robotic spine surgery team, Apollo Hospitals, New Delhi (Ravinder Uberoi)"}]},{"title":"Medical team of the year","data":"For a project that has improved medical care for either patients or their carers or that has had a population-wide effect:","awardsList":[{"key":"Clinical haematology service, City Hospital, New Delhi (Anupama Jaggia)"},{"key":"Antibiotic review programme, Fortis Hospital, Mumbai (Supriya Amey)"},{"key":" Diabetes team, Max Healthcare, New Delhi (Sujeet Jha)"}]},{"title":"Innovation in healthcare technology","data":"For innovation that has improved the outcomes and experience of patients:","awardsList":[{"key":"Novel rapid test kits for visceral leishmaniasis, All India Institute of Medical Sciences, New Delhi (Sarman Singh)"},{"key":" A novel intraosseous device for emergency vascular access, Stanford-India Biodesign Center, All India Institute of Medical Sciences, New Delhi (Sandeep Singh)"}]},{"title":"Excellence in medical education","data":"For outstanding innovation in educating Indian healthcare professionals and improving performance:","awardsList":[{"key":" Improving research aptitude of trainees in a neurology programme, Postgraduate Institute of Medical Education and Research, Chandigarh (Dheeraj Khurana)"},{"key":"Certificate course in evidence based diabetes management, Public Health Foundation of India, New Delhi (Sandeep Bhalla)"}]},{"title":"Quality improvement in healthcare","data":"For a specific initiative that has significantly improved healthcare quality:","awardsList":[{"key":"Reducing caesarean section rates in a non-profit hospital in urban India, Sitaram Bhartia Institute of Science and Research, New Delhi (Rinku Sengupta Dhar)"},{"key":" Reducing readmission rates in the hospital through integrated care cycle, Apollo Gleneagles Hospitals, Kolkata (Sujoy Kar)"}]},{"title":"Excellence in preventive health","data":"For demonstrable success in health promotion or secondary prevention","awardsList":[{"key":"Billion Hearts Beating Foundation, Apollo Hospitals Group (Ravinder Uberoi)"},{"key":"Cardiovascular disease prevention and management programme—a rural model, Karnataka (Gift Norman)"}]}],
      "reviewsAndratings":[  
   {  
      "patientID":"DO453",
      "patientName":"Jacob",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I am having a horrible experience with LifeForce Homeopathy clinic, Vashi, Navi Mumbai. Once these people have taken huge money as their fee, they don't listen to patients at all. I tried to call on their all phone and mobile numbers. I sent emails as well related to my disease status update and getting clinical suggestions but they never respond back. I will never recommend people to go for LifeForce Homeopathy clinic treatment. This is commercial way for earning money.",
      "ratings":"5"
   },
   {  
      "patientID":"DO451",
      "patientName":"Ethan",
      "profilePic":"img/doctor_round.jpg",
      "comments":"DR ADAMS is one of the greatest and intelligent personality .He is fantastic in pain management.The sign and symbol of humanity.He is the right selection of your abnormality. His attittudes are positive .When you face with him you will feel perfect .He writes only those lab tests which is required without that he is not a business man.He writes high quality drugs with low prices or low cost.After visiting him you might feel healthy after a few days .",
      "ratings":"4"
   },
   {  
      "patientID":"DO454",
      "patientName":"James Wyatt",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was having eczema for past one year. I saw Dr. Rajesh Shah's successful treatment of eczema and went for diagnosis. He diagnosed me with his homeopathic medicines. It cured my eczema and my skin looks way much better than before. I am so glad that I took treatment from Dr. Rajesh Shah. Other doctors were very much costly and not sure for 100% cure. I will suggest other patients like me to take treatment from Dr. Rajesh Shah.",
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
      "patientID":"DO455",
      "patientName":"Madison",
      "profilePic":"img/doctor_round.jpg",
      "comments":"I was noticing hair fall problem since the past 6-8 months. To find a solution to this I had joined a couple of facebook groups and read many blogs as well. But nothing worked out. One day I saw a post in a facebook group which was about Dr. Shah's treatment and then searched about it on google. I had approached Dr. Shah 2 months back for treatment and within 2 months my hair fall has reduced tremendously. I must say Dr. Shah's treatment is really good with quick results.",
      "ratings":"5"
   }]
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

        $scope.doctorSelected = function(doctorObject) {
         $state.go('doctorProfile', {"doctorProfile":doctorObject});
      }

})