<template>
    <div
>
        <div class="app-content content ">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper container-xxl p-0">
                <div class="content-header row">
                </div>
                <div class="content-body">
                    <div class="breadcrumb-wrapper">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link class="d-flex align-items-center" to="/">
                                    Home
                                </router-link>
                            </li>
                            <li class="breadcrumb-item">
                                Recruitment
                            </li>
                        </ol>
                    </div>
                    <div class="row my-4">
                        <div class="col-md-3 col-sm-6  ">
                            <div class=" custumcard card" data-bs-target="#viewposts" data-bs-toggle="modal"
                                 style="cursor:pointer;">
                                <div class="card-body">
<div class="d-flex justify-content-between">
    <h4 class="cardstext my-2">Total Posts</h4>
    <div class="cardlogo">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
  <path d="M0.34416 0.352184C0.123795 0.577756 9.15048e-07 0.883656 9.01106e-07 1.20261C8.87164e-07 1.52157 0.123795 1.82747 0.34416 2.05305L6.16269 8.00726L0.344159 13.9615C0.130041 14.1883 0.0115608 14.4922 0.0142387 14.8076C0.0169166 15.123 0.140538 15.4247 0.358479 15.6477C0.576418 15.8707 0.871239 15.9972 1.17944 16C1.48764 16.0027 1.78457 15.8815 2.00626 15.6623L8.65584 8.85769C8.87621 8.63212 9 8.32622 9 8.00726C9 7.6883 8.87621 7.3824 8.65584 7.15683L2.00626 0.352184C1.78583 0.126681 1.4869 -3.28408e-07 1.17521 -3.42032e-07C0.863521 -3.55657e-07 0.564591 0.126681 0.34416 0.352184Z" fill="#232323"/>
</svg>
    </div>
  
</div>

                                        <h2 class="cardsamount my-2 " v-if="postsct<10 && postsct!=0">0{{ postsct }}</h2>
                                        <h2 class="fw-bolder cardsamount " v-else>{{ postsct }}</h2>


                                        <h2 class="cardsfooter " >Interviews</h2>


                                   
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 ">
                            <div class="custumcard card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
    <h4 class="cardstext my-2">Total Applications</h4>
    <div class="cardlogo">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
  <path d="M0.34416 0.352184C0.123795 0.577756 9.15048e-07 0.883656 9.01106e-07 1.20261C8.87164e-07 1.52157 0.123795 1.82747 0.34416 2.05305L6.16269 8.00726L0.344159 13.9615C0.130041 14.1883 0.0115608 14.4922 0.0142387 14.8076C0.0169166 15.123 0.140538 15.4247 0.358479 15.6477C0.576418 15.8707 0.871239 15.9972 1.17944 16C1.48764 16.0027 1.78457 15.8815 2.00626 15.6623L8.65584 8.85769C8.87621 8.63212 9 8.32622 9 8.00726C9 7.6883 8.87621 7.3824 8.65584 7.15683L2.00626 0.352184C1.78583 0.126681 1.4869 -3.28408e-07 1.17521 -3.42032e-07C0.863521 -3.55657e-07 0.564591 0.126681 0.34416 0.352184Z" fill="#232323"/>
</svg>
    </div>
  
</div>
<h2 class="cardsamount my-2 " v-if="candsct<10 && candsct!=0">0{{ candsct }}</h2>

<h2 class="fw-bolder cardsamount my-2" v-else>{{ candsct}}</h2>



                                        <h2 class="cardsfooter " >Applications</h2>
                                    
                                
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 ">
                            <div class="custumcard card">
                               
                                <div class="card-body">
<div class="d-flex justify-content-between">

    <h4 class="cardstext my-2">Total Interviews</h4>

    <div class="cardlogo">

        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
  <path d="M0.34416 0.352184C0.123795 0.577756 9.15048e-07 0.883656 9.01106e-07 1.20261C8.87164e-07 1.52157 0.123795 1.82747 0.34416 2.05305L6.16269 8.00726L0.344159 13.9615C0.130041 14.1883 0.0115608 14.4922 0.0142387 14.8076C0.0169166 15.123 0.140538 15.4247 0.358479 15.6477C0.576418 15.8707 0.871239 15.9972 1.17944 16C1.48764 16.0027 1.78457 15.8815 2.00626 15.6623L8.65584 8.85769C8.87621 8.63212 9 8.32622 9 8.00726C9 7.6883 8.87621 7.3824 8.65584 7.15683L2.00626 0.352184C1.78583 0.126681 1.4869 -3.28408e-07 1.17521 -3.42032e-07C0.863521 -3.55657e-07 0.564591 0.126681 0.34416 0.352184Z" fill="#232323"/>
</svg>
    </div>
  
</div>

                                        
                                        <h2 class="fw-bolder cardsamount my-2" v-if="ct_ong_int<10 && ct_ong_int!=0">
                                            0{{ ct_ong_int }}</h2>
                                        <h2 class="fw-bolder cardsamount my-2" v-else>{{ ct_ong_int }}</h2>


                                        <h2 class="cardsfooter " >Ongoing interviews</h2>


                                   
                                </div>
                            </div>
                                   
                               
                        </div>
                        <div class="col-md-3  col-sm-6 ">
                            <div class="custumcard card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">

<h4 class="cardstext my-2">Total Short listed</h4>

<div class="cardlogo">

    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
<path d="M0.34416 0.352184C0.123795 0.577756 9.15048e-07 0.883656 9.01106e-07 1.20261C8.87164e-07 1.52157 0.123795 1.82747 0.34416 2.05305L6.16269 8.00726L0.344159 13.9615C0.130041 14.1883 0.0115608 14.4922 0.0142387 14.8076C0.0169166 15.123 0.140538 15.4247 0.358479 15.6477C0.576418 15.8707 0.871239 15.9972 1.17944 16C1.48764 16.0027 1.78457 15.8815 2.00626 15.6623L8.65584 8.85769C8.87621 8.63212 9 8.32622 9 8.00726C9 7.6883 8.87621 7.3824 8.65584 7.15683L2.00626 0.352184C1.78583 0.126681 1.4869 -3.28408e-07 1.17521 -3.42032e-07C0.863521 -3.55657e-07 0.564591 0.126681 0.34416 0.352184Z" fill="#232323"/>
</svg>
</div>

</div>

                                    
                                    

                                    <!-- <h2 class="fw-bolder cardsamount my-2" v-if="slcandsct<10 && slcandsct!=0">
                                            0{{ slcandsct }}</h2> -->
                                        <h2 class="fw-bolder cardsamount my-2" >{{ slcandsct }}</h2>


                                    <h2 class="cardsfooter " >Short listed</h2>
                                  
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row my-5">
                        <div class="bar-charts card  ">
                            <div class="card-header" >
                                    <h4 class=" activePost-text">Last 5 Weeks Hiring </h4>
                                </div>
            
                            <apexchart width="800" height="320" type="bar" :options="chartOptionsbar" :series="chartSeriesbar"></apexchart>
                        
                   
                           
                       
                        </div>

                        <div class="donut-charts card">
                            <!-- <apexchart width="500" type="bar" :options="chartOptionsbar" :series="chartSeriesbar"></apexchart> -->

                            <apexchart class="my-4" width="400" height="480" type="donut" :options="chartOptionsdonut" :series="chartSeriesdonut"></apexchart>
                     
                    <div class=" d-flex my-4 ">
                        <div class="d-flex mx-2">
                            <div class="greenboxes mx-2">   </div>
                            <div>
                                <h4 class="cardstext">Total Candidate </h4>
                                <h4 class="cardstext mx-5">{{ chartSeriesdonut[1] }}</h4>

                            </div>
                        </div>
                       
                      <div class="d-flex">
                        <div class="blueboxes mx-2">   </div>
                        <div>
                            <h4 class="cardstext">Hired Candidate</h4>

                                <h4 class="cardstext mx-5">{{ chartSeriesdonut[0] }}</h4>

                            </div>
                      </div>
                    </div>
                           
                       
                        </div>
                    </div>


<div class="row">
    <div class="col-md-4">
    <div class=" card-hires-source">
                                <div class="card-header" >
                                    <h4 class=" activePost-text">Hires by source</h4>
                                </div>
                                <div class="card-body mx-3 py-2">
                                <div class="py-2 d-flex justify-content-between ">
<div class="source-logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M36 31C36 33.762 33.762 36 31 36H5C2.239 36 0 33.762 0 31V5C0 2.238 2.239 0 5 0H31C33.762 0 36 2.238 36 5V31Z" fill="#0288D1"/>
  <path d="M6 13H11V30H6V13ZM8.485 11H8.457C6.965 11 6 9.888 6 8.499C6 7.08 6.995 6 8.514 6C10.035 6 10.972 7.08 11 8.499C11 9.887 10.035 11 8.485 11ZM30 30H25V20.901C25 18.703 23.775 17.203 21.808 17.203C20.307 17.203 19.495 18.215 19.101 19.193C18.957 19.543 19 20.511 19 21V30H14V13H19V15.616C19.721 14.5 20.85 13 23.738 13C27.316 13 29.999 15.25 29.999 20.274L30 30Z" fill="white"/>
</svg>
</div>
<div class="source-text mx-3">
    <h4 class=" activePost-text">Linked In</h4>

</div>
 

                                </div>
                                <div class="  d-flex justify-content-between ">
<div class="source-logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M20.8125 2.25C12.0938 2.25 6.75 12.6562 6.75 18C6.75 18 10.4062 4.5 21.375 4.5C25.4531 4.5 28.125 6.75 28.125 6.75C28.125 6.75 27 2.25 20.8125 2.25ZM19.6875 7.875C18.6432 7.875 17.6417 8.28984 16.9033 9.02827C16.1648 9.76669 15.75 10.7682 15.75 11.8125C15.75 12.8568 16.1648 13.8583 16.9033 14.5967C17.6417 15.3352 18.6432 15.75 19.6875 15.75C20.7318 15.75 21.7333 15.3352 22.4717 14.5967C23.2102 13.8583 23.625 12.8568 23.625 11.8125C23.625 10.7682 23.2102 9.76669 22.4717 9.02827C21.7333 8.28984 20.7318 7.875 19.6875 7.875ZM22.5 18C22.5 18 21.375 19.125 16.875 19.125V30.9375C16.875 32.4911 18.1339 33.75 19.6875 33.75C21.2411 33.75 22.5 32.4911 22.5 30.9375V18Z" fill="black"/>
</svg>
</div>
<div class="source-text mx-3">
    <h4 class=" activePost-text">Indeed</h4>

</div>

                                </div>
                                <div class="  d-flex justify-content-between ">
<div class="source-logo">
  
</div>
<div class="source-text mx-3">
    <h4 class=" activePost-text">Others</h4>

</div>

                                </div>
                                </div>
                            </div>
</div>
   
    <div class="col-md-8 ">
                            <div class="activePost-card card">
                                <div class="card-body"  style=" overflow-y: auto; ">
    <h4 class="activePost-text my-2">Active Posts</h4>

    <div  class=" my-4 mx-2 d-flex justify-content-between" v-for="(jobData,jobTitle) in Activejobcount">
        <div class="col-md-3">
            <h4 class="Posttitle-text my-2 ">{{ jobTitle }}</h4>

        </div>
        <div class="col-md-3">
            <div class="inbox-activepost" style="color: #0070F2;"> 
                <h6 class="inbox-activepost-text mx-5"  >{{ jobData.total_applicants }} Application

                </h6>
            </div>
        </div>
        <div class="col-md-3">
            <div class="interview-activepost"> 
                <h6 class="interview-activepost-text" >{{ jobData.ongoing_interviews }} inerview

                </h6>
        </div>
      
                               
                                 
                                </div>

                                <div class="col-md-3">
            <div class="hired-activepost"> 
                <h6 class="hired-activepost-text" >{{ jobData.persons_hired }} hired

                </h6>
        </div>

    </div>
</div>




</div>
                        </div>
                            </div>

                          
                        <!--/ Hired candidate Card -->
                        <!--  hired candidate  -->
                        <div class="modal fade" id="viewhiredcandidate" tabindex="-1" aria-labelledby="addNewCardTitle"
                             aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header bg-transparent">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body px-sm-5 mx-50 pb-5">
                                        <!-- User Card -->

                                        <div class="user-avatar-section">
                                            <div class="d-flex align-items-center flex-column">
                                                <img class="img-fluid rounded mt-3 mb-2"
                                                     src="public/app-assets/images/portrait/small/avatar-s-2.jpg"
                                                     height="110" width="110" alt="User avatar"/>
                                                <div class="user-info text-center">
                                                    <h4>Gertrude Barton</h4>
                                                    <span class="badge bg-light-secondary">Author</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-around my-2 pt-75">
                                            <div class="d-flex align-items-start me-2">
                                                <span class="badge bg-light-primary p-75 rounded">
                                                    <i data-feather="check" class="font-medium-2"></i>
                                                </span>
                                                <div class="ms-75">
                                                    <h4 class="mb-0">1.23k</h4>
                                                    <small>Tasks Done</small>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-start">
                                                <span class="badge bg-light-primary p-75 rounded">
                                                    <i data-feather="briefcase" class="font-medium-2"></i>
                                                </span>
                                                <div class="ms-75">
                                                    <h4 class="mb-0">568</h4>
                                                    <small>Projects Done</small>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 class="fw-bolder border-bottom pb-50 mb-1">Details</h4>
                                        <div class="info-container">
                                            <ul class="list-unstyled">
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Username:</span>
                                                    <span>violet.dev</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Billing Email:</span>
                                                    <span>vafgot@vultukir.org</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Status:</span>
                                                    <span class="badge bg-light-success">Active</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Role:</span>
                                                    <span>Author</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Tax ID:</span>
                                                    <span>Tax-8965</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Contact:</span>
                                                    <span>+1 (609) 933-44-22</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Language:</span>
                                                    <span>English</span>
                                                </li>
                                                <li class="mb-75">
                                                    <span class="fw-bolder me-25">Country:</span>
                                                    <span>Wake Island</span>
                                                </li>
                                            </ul>
                                            <div class="d-flex justify-content-center pt-2">
                                                <a href="javascript:;" class="btn btn-primary me-1"
                                                   data-bs-target="#editUser" data-bs-toggle="modal">
                                                    Edit
                                                </a>
                                                <a href="javascript:;" class="btn btn-outline-danger suspend-user">Suspended</a>
                                            </div>
                                        </div>

                                        <!-- /User Card -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>


<div class="row">
    <div class="col-lg-4 col-md-3 activity-row">
                            <div class="card card-employee-task">
                                <div class="card-header" >
                                    <h4 class=" activePost-text">Hired this month</h4>
                                </div>
                                <div class="card-body" style="height:308px; overflow:auto;">
                                    <div class="employee-task d-flex justify-content-between align-items-center"
                                         v-for="mnth_hir1 in mnth_hir" data-bs-target="#viewhiredcandidate"
                                         data-bs-toggle="modal" style="cursor:pointer;">
                                        <div class="d-flex flex-row">
                                            <div class="avatar me-75" style="height:max-content">
                                                <img :src="mnth_hir1.Photo"
                                                     class="rounded" width="42" height="42" alt="Avatar"/>
                                            </div>
                                            <div class="my-auto">
                                                <h6 class="Candidatename-text mb-0">{{ mnth_hir1.CandName }}</h6>
                                                <small>{{ mnth_hir1.PostTitle }}</small>
                                            </div>
                                        </div>
                                        <div class="d-flex" style="float: right; max-width: 25%; ">
                                            <small class="Candidatename-text me-75"
                                                   style=" font-size:11px; ">{{ mnth_hir1.updatedOn }}</small>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            </div>
                        </div>
    <div class="col-md-8">
        <div class="card Activity-performed">
                                <div class="card-header d-flex justify-content-between ">
                            
                                    <h4 class="activePost-text">Performed Activities</h4>
                                    <h4 class="activePost-seall " data-bs-target="#viewactivityperformed"
                                         data-bs-toggle="modal">see all</h4>
                                </div>
                                <div class="card-body" style="height: 500px; overflow: hidden;">
                                    <ul class="timeline" v-for="recs1 in recs">
                                    <li class="timeline-item" style="border-left-color: #c1c1c180 !important ">
                                        <span class="timeline-point timeline-point-success timeline-point-indicator"
                                              v-if="recs1.EventStatus=='Interview scheduled' || recs1.EventStatus=='Candidate added'"></span>
                                        <span class="timeline-point timeline-point-success"
                                              v-else-if="recs1.EventStatus=='Candidate shortlisted'">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 class="feather feather-user"><path
                                                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12"
                                                                                                             cy="7"
                                                                                                             r="4"></circle></svg>
                                        </span>
                                        <span class="timeline-point timeline-point-success"
                                              v-else-if="recs1.EventStatus=='Candidate hired'">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                                 class="bi bi-person-check-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                <path
                                                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                        </span>
                                        <span class="timeline-point timeline-point-warning timeline-point-indicator"
                                              v-else></span>
                                        <div class="timeline-event">
                                            <div
                                                class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                                <h6 class="mb-50">{{ recs1.EventStatus }}</h6>
                                                <span class="timeline-event-time">{{ recs1.ActivityTime }}</span>
                                            </div>
                                            <p>{{ recs1.Description }}</p>
                                            <hr/>
                                        </div>
                                    </li>
                                </ul>

                                    <hr/>
                                </div>
                               

                            </div>
    </div>




    <div class="modal fade" id="viewactivityperformed" tabindex="-1" aria-labelledby="addNewCardTitle"
                             aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header bg-transparent">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body px-sm-5 mx-50 pb-5">
                                        <!-- User Card -->
                                        <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Activities Performed</h4>
                            </div>
                            <div class="card-body" style="height: 500px; overflow: scroll;">
                                <ul class="timeline" v-for="recs1 in recs">
                                    <li class="timeline-item" style="border-left-color: #c1c1c180 !important ">
                                        <span class="timeline-point timeline-point-success timeline-point-indicator"
                                              v-if="recs1.EventStatus=='Interview scheduled' || recs1.EventStatus=='Candidate added'"></span>
                                        <span class="timeline-point timeline-point-success"
                                              v-else-if="recs1.EventStatus=='Candidate shortlisted'">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 class="feather feather-user"><path
                                                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12"
                                                                                                             cy="7"
                                                                                                             r="4"></circle></svg>
                                        </span>
                                        <span class="timeline-point timeline-point-success"
                                              v-else-if="recs1.EventStatus=='Candidate hired'">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                                 class="bi bi-person-check-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                <path
                                                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                        </span>
                                        <span class="timeline-point timeline-point-warning timeline-point-indicator"
                                              v-else></span>
                                        <div class="timeline-event">
                                            <div
                                                class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                                <h6 class="mb-50">{{ recs1.EventStatus }}</h6>
                                                <span class="timeline-event-time">{{ recs1.ActivityTime }}</span>
                                            </div>
                                            <p>{{ recs1.Description }}</p>
                                            <hr/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                                      

                                        <!-- /User Card -->
                                    </div>
                                </div>
                            </div>
                        </div>

</div>
                 
                   
                </div>
                <!-- view posts modal -->
                <div class="modal fade" id="viewposts" tabindex="-1" aria-labelledby="pricingModalTitle"
                     aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content">
                            <div class="modal-header bg-transparent">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div class="modal-body px-sm-5 mx-50 pb-5">
                                <div id="pricing-plan">
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-6 col-md-6" v-for="jobs3 in jobs">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <span><span v-if="jobs3.JobNumber<2">Only</span><span v-else>Total</span> {{ jobs3.JobNumber }} <span
                                                            v-if="jobs3.JobNumber<2">vacancy</span><span v-else>vacancies</span></span>
                                                        <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                                                            <li class="avatar avatar-sm pull-up"
                                                                v-for="candidates3 in candidates"
                                                                v-if="candidates3.JobID==jobs3.JobID">
                                                                <img class="rounded-circle"
                                                                     src="public/app-assets/images/avatars/2.png"
                                                                     alt="Avatar"/>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div
                                                        class="d-flex justify-content-between align-items-end mt-1 pt-25">
                                                        <div class="role-heading">
                                                            <h4 class="fw-bolder">{{ jobs3.PostTitle }}</h4>
                                                        </div>
                                                    </div>

                                                    <small class="fw-bolder" style="color: #b9b9c3">
                                                        <cite title="View applications"> Last date to apply is: <label>{{ jobs3.EndDate }}</label></cite>
                                                    </small>
                                                    <small class="fw-bolder" style="float:right;">
                                                        <router-link class="align-items-center" style="color:dimgray"
                                                                     to="">
                                                            <i data-feather='edit' style="width: 25px;"></i>
                                                        </router-link>

                                                        <router-link class="align-items-center" style="color:dimgray"
                                                                     to="">
                                                            <i data-feather='trash' style="width: 20px;"></i>
                                                        </router-link>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/ view posts modal -->
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components:{
        apexchart: VueApexCharts,
    },
    data() {
        return {

            chartOptionsbar: {
    chart: {
        type: 'bar',
        // stacked: true,
    },
    xaxis: {
        categories: ['01 Week', '02 Week', '03 Week', '04 Week', '05 Week'],
    },
    yaxis: {
        max: 10,
    },
},
chartSeriesbar: [
        ],
            chartOptionsdonut: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
              breakpoint: 300,
            }],
            labels: ['Total Candidates', 'Hired Candidates'],
            },

            chartSeriesdonut: [0, 0],
            a: 1,
            b: 1,
            c: 1,
            value: 0,
            postsct: '',
            candsct: '',
            slcandsct: '',
            ct_ong_int: '',
            top_counters: {},

            count: 1,
            mnth_hir: {},
            candidates: {},
            Activejobcount:{},
            recs: {},
            jobs: {},
            cnd_hir: '',
            rel_int_ct: '',
            interview: {},
        }
    },
    methods: {
     
    },
    mounted() {

        axios.get('top_counters') //Count top list of dashboard
            .then(data => {
                this.top_counters = data.data;
                this.postsct = this.top_counters.jobs_count;
                this.candsct = this.top_counters.applications;
                this.ct_ong_int = this.top_counters.ongoing_interview;
                this.slcandsct = this.top_counters.short_listed;
            })
            .catch(error => {
            });

        axios.get('job_detail2')  //Get all posts
            .then(data => this.jobs = data.data)
            .catch(error => {
            });

        axios.get('rel_cand_count') //Count relevent job interviews
            .then(data => this.interview = data.data)
            .catch(error => {
            });

        axios.get('mnth_hired')  //Get hired candidates of last 30 days
            .then(data => this.mnth_hir = data.data)
            .catch(error => {
            });

        axios.get('cnd_hired')  //Count hired candidates
            .then(data => this.cnd_hir = data.data)
            .catch(error => {
            });

        axios.get('rec_activities')  //Recruitment activities
            .then(data => this.recs = data.data)
            .catch(error => {
            });

        axios.get('candidate_detail2') // Get all candidates
            .then(data => this.candidates = data.data)
            .catch(error => {
            });
            axios.get('Activejobscount') // Get all candidates
            .then(data =>
            {
                console.log(data.data)
                 this.Activejobcount = data.data
            
            })
            .catch(error => {
            });
            axios.get('hiringgraphdata')
        .then(response => {
            const data = response.data;
            this.chartSeriesdonut = [data.hired_candidates, data.total_candidates];
            console.log(this.chartSeriesdonut)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });


        axios.get('weeklygraphdata')
  .then(response => {
    const data = response.data;
    console.log('API Response:', data);
    this.weeklydata = data;
    // Get all keys except 'week_number'
    const valueKeys = Object.keys(this.weeklydata[0]).filter(key => key !== 'week_number');
console.log(valueKeys)
    // Map each key to a series
    this.chartSeriesbar = valueKeys.map((key, index) => {
      return {
        name: key.replace('_', ' '), // Use key as series name
        data: this.weeklydata.map(item => item[key]),
      };
    });
console.log(this.chartSeriesbar)
    // Update x-axis categories
    this.chartOptionsbar.xaxis.categories = this.weeklydata.map(item => `${item.week_number}`);
console.log(this.chartOptionsbar.xaxis.categories)
})
  .catch(error => {
    console.error('API Error:', error);
    // Handle errors
  });
    }
}
</script>
<style>
.custumcard{
    max-width: 249px;
    max-height: 139px;
flex-shrink: 0;
border-radius: 20px;
border: 10px;
border-color: black;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}

.cardstext{
    color: #343434;
    font-family: 'Poppins',sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.16px;
}
.cardsamount{
    color: #232323;
    font-family: 'Poppins',sans-serif;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.28px;
}
.cardsfooter{
    color: #949494;
font-family: 'Poppins',sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.14px;
}
.cardlogo{
    max-width: 16px;
    max-height: 9px;
/* transform: rotate(90deg); */
flex-shrink: 0;
}
.activePost-card{

    max-width: 822px;
    max-height: 420px;
flex-shrink: 0;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}
.activePost-text{
    max-width: 600px;
    max-height: 32px;
flex-shrink: 0;
color: #000;
font-family: 'Poppins',sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.2px;
}
.Posttitle-text{
    color: #949494;
font-family: 'Poppins',sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.16px;
}
.inbox-activepost{
    max-width: 77px;
    max-height: 21px;
flex-shrink: 0;
border-radius: 4px;
opacity: 0.8;
text-align: center;
display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; /* Set the height of the parent div to 100% */
background: #37bce0;
}

.interview-activepost{
    max-width: 77px;
    max-height: 21px;
flex-shrink: 0;
border-radius: 4px;
opacity: 0.8;
text-align: center;
display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; /* Set the height of the parent div to 100% */
background: #FF6900;
}
.hired-activepost{
    max-width: 77px;
    max-height: 21px;
flex-shrink: 0;
border-radius: 4px;
opacity: 0.8;
text-align: center;
display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; /* Set the height of the parent div to 100% */
background: #1FC048;
}
.inbox-activepost-text{
    color: #ffffff;
    /* width: 77px;
height: 21px; */
flex-shrink: 0;
font-family:'Poppins',sans-serif;
font-size: 12px;
font-style: normal;
opacity: 1.2;
font-weight: 400;
line-height: normal;
letter-spacing: 0.12px;
text-align: center; /* If you want to center the text horizontally */
    margin-top: 10px;
}
.interview-activepost-text{
    color: #fdfdfd;
    /* width: 77px;
height: 21px; */
flex-shrink: 0;
font-family:'Poppins',sans-serif;
font-size: 12px;
font-style: normal;
opacity: 1.2;
font-weight: 400;
line-height: normal;
letter-spacing: 0.12px;
text-align: center; /* If you want to center the text horizontally */
    margin-top: 10px;
}
.hired-activepost-text{
    color: #f7f7f7;
    /* width: 77px;
height: 21px; */
flex-shrink: 0;
font-family:'Poppins',sans-serif;
font-size: 12px;
font-style: normal;
opacity: 1.2;
font-weight: 400;
line-height: normal;
letter-spacing: 0.12px;
text-align: center; /* If you want to center the text horizontally */
    margin-top: 10px;
}
.card-employee-task{
    width: 400px;
height: 402px;
flex-shrink: 0;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}
.Candidatename-text{
    color: #000;
    font-family:'Poppins',sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.14px;
}
.activity-row{
    position: relative;
    top: -180px;
}
.Activity-performed{
    max-width: 820px;
    max-height: 370px;
flex-shrink: 0;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
/* margin-top: 50px; */
}
.activePost-seall{
    color: #000;
    font-family:'Poppins',sans-serif;
cursor: pointer;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.12px;
}
.card-hires-source{
    max-width: 400px;
    max-height: 230px;
flex-shrink: 0;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);


}
.source-logo{
    max-width: 36px;
    max-height: 36px;
flex-shrink: 0;
}
.source-text{
    color: #000;
font-family: 'Poppins',sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.14px;
}
.donut-charts{
    max-width: 400px;
    max-height: 370px;
flex-shrink: 0;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}
.greenboxes{
    /* margin-top: 20px; */
    max-width: 16px;
    max-height: 16px;
/* flex-shrink: 0; */
border-radius: 2px;
background-color: rgb(0, 227, 150)
}
.blueboxes{
    /* margin-top: 20px; */
    max-width: 16px;
    max-height: 16px;

border-radius: 2px;
background-color: rgb(0, 143, 251)
}
.bar-charts{
    margin-right: 50px;
    max-width: 822px;
max-height: 370px;
flex-shrink: 0;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>






