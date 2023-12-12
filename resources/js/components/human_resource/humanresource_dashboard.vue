<template>
    <div
>
        <div class="app-content content ">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper container-xxl p-0">
                <div class="content-header row">
                    <div class="breadcrumb-wrapper">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active">
                                HR Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="content-body">
<div class="row-birthday">

</div>



                <div class="row-attendance">
                    <div class="head-text">
                    Today's Employee Attendance
                    </div>
                    <div class="emp-attendance my-4">
                        <div class="col-md-2 attendenceSession">
                            <div class="total-emp">
                               <div class="total-no">
                                0{{ att_daily_count.total }}
                               </div>
                               <div class="total-text">
                                Total Employees
                               </div>
                            </div>
                        </div>
                       <div class="col-md-2 attendenceSession">
                        <div class="present-emp">
                            <div class="present-no">
                               0{{ att_daily_count.present }}
                            </div>
                            <div class="present-text">
                                Present
                            </div>
                        </div>
                       </div>
                       <div class="col-md-2 attendenceSession">
                        <div class="late-emp">
                            <div class="late-no">
                              0{{ att_daily_count.late }}
                            </div>
                            <div class="late-text">
                                Late
                            </div>
                        </div>
                       </div>
                       <div class="col-md-2 attendenceSession">
                        <div class="absent-emp">
                            <div class="absent-no">
                               0{{ att_daily_count.absent }}
                            </div>
                            <div class="absent-text">
                                Absent
                            </div>
                        </div>
                       </div>
                       <div class="col-md-2 attendenceSession">
                        <div class="leave-emp">
                            <div class="leave-no">
                               0{{ att_daily_count.leave }}
                            </div>
                            <div class="absent-text">
                                Leave
                            </div>
                        </div>
                       </div>
                    </div>
                </div>

                <div class="row">
<div class="col-md-5 employee-composition">
    <div class="head-text my-4">
        Employee Composition
                    </div>
                    <div class="d-flex">
  
                    <div class="donut-chart">
                            <!-- <apexchart width="500" type="bar" :options="chartOptionsbar" :series="chartSeriesbar"></apexchart> -->

                            <apexchart class="" width="350" height="310" type="donut" :options="chartOptionsdonut" :series="chartSeriesdonut"></apexchart>
                     
                   
                           
                       
                        </div>
<div class="malefemale">
    <div>
    <span class="countgraph">{{ this.emp_count.males ?  this.emp_count.males : 0 }}</span>

</div>
<div>
    <span class="countgraph">{{ this.emp_count.females ? this.emp_count.females : 0 }}</span>

</div>


</div>
</div>

</div>


<div class="col-md-7 employee-detail">
    
<div class="d-flex justify-content-between">
<div class="detail-count">
    <div class="head-text my-4">
        Employee Details
                    </div>
                    <div class="details-count">
                        <div class=" d-flex justify-content-between radialcount ">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-regular fa-circle text-primary "></i>
                                                    <span class="fw-bold countsgraphtext ms-75">Total Employees</span>
                                                </div>
                                                <!-- <span>{{ (Math.floor(this.count_users.all_users)).toLocaleString() }}</span> -->
                                                <span class="countgraph">{{ this.count_users.all_users ? this.count_users.all_users.toLocaleString() : 0 }}</span>

                                            </div>

                                            <div class="d-flex justify-content-between radialcount ">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-regular fa-circle text-success"></i>
                                                    <span class="fw-bold countsgraphtext ms-75">Registered</span>
                                                </div>
                                                <span class="countgraph">{{ this.count_users.active_users ?(Math.floor(this.count_users.active_users)).toLocaleString() : 0 }}</span>
                                            </div>
                                            <div class="d-flex justify-content-between radialcount ">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-regular fa-circle text-warning"></i>
                                                    <span class="fw-bold countsgraphtext ms-75">Contractual</span>
                                                </div>
                                                <span class="countgraph">{{ this.count_users.contractual_users ?(Math.floor(this.count_users.contractual_users)).toLocaleString() : 0 }}</span>
                                            </div>

                                            <div class="d-flex justify-content-between radialcount">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-regular fa-circle text-danger"></i>
                                                    <span class="fw-bold countsgraphtext ms-75">Terminated</span>
                                                </div>
                                                <span class="countgraph">{{ this.count_users.terminated_users ?(this.count_users.terminated_users).toLocaleString()  : 0}}</span>
                                            </div>
                                            <div class="d-flex justify-content-between radialcount">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-regular fa-circle text-secondary"></i>
                                                    <span class="fw-bold countsgraphtext ms-75">Resigned</span>
                                                </div>
                                                <span class="countgraph">{{this.count_users.inactive_users ? (this.count_users.inactive_users).toLocaleString() : 0 }}</span>
                                            </div>
                                            <div class="d-flex justify-content-between radialcount  ">
                                                <div class="d-flex align-items-center">
                                                    <i class="fa-regular fa-circle text-info    "></i>
                                                    <span class="fw-bold countsgraphtext ms-75">Suspended</span>
                                                </div>
                                                <span class="countgraph">{{this.count_users.suspended_users ? (this.count_users.suspended_users).toLocaleString(): 0 }}</span>
                                            </div>
                    </div>
  

</div>

    <div class="ridial-bars" id="chart">
                                                <apexchart type="radialBar" height="320" width='320' :options="chartOptions2"
                                                           :series="series2"></apexchart>
                                            </div>

</div>



</div>
</div>
<div class="row">
    <div class="row-Departmentattendance">
                    <div class="Departmentattendance-head">
                        <h3 class="head-text mx-4">
                            Department-wise Today's attendence 

                        </h3>
                        <h3 class="text-viewall " data-bs-toggle="modal" data-bs-target="#departmentemployeeattendence">
                           viewall

                        </h3>
                    </div>
                    <div class="Departmentattendence-Tabel">
                        <table class="tabelclass">
                        <thead class="my-3">
                            <tr class="tabel-tr">

                                <th class="tabel-th total-text col-md-2">Departments</th>
                                <th class="tabel-th  total-text col-md-2">Employees</th>
                                <th class="tabel-th present-text col-md-2">Present</th>
                                <th class="tabel-th absent-text col-md-2">Absent </th>
                                <th class="tabel-th late-text col-md-2">Late</th>
                                <th class="tabel-th absent-text col-md-2">Leave</th>

                            </tr>
                        </thead>
                        <tbody class="tabel-body">
                            <tr  v-for="attendance1 in attendance" class="body-tr">

                                <td class="departmentsclass col-md-2 my-3">
                                    {{ attendance1.Department }}
                                   
                                </td>
                                <td class="departmentsclass col-md-2 my-3">
                                    {{ attendance1.TotalEmployee }}
                                </td>
                                <td class="departmentsclass col-md-2 my-3">
                                    {{ attendance1.Present }}
                                </td>
                                <td class="departmentsclass col-md-2" >
                                    {{ attendance1.Absent }}
                                </td>
                                <td class="departmentsclass col-md-2">
                                    {{ attendance1.Late }}
                                </td>
                                <td class="departmentsclass col-md-2">
                                    {{ attendance1.Leave }}
                                </td>

                            </tr>
                            <tr class="body-tr">

<td class="departmentsclass col-md-2 my-3">
    Development
   
</td>
<td class="departmentsclass col-md-2 my-3">
    54
</td>
<td class="departmentsclass col-md-2 my-3">
    65
</td>
<td class="departmentsclass col-md-2" >
    67
</td>
<td class="departmentsclass col-md-2">
    09
</td>
<td class="departmentsclass col-md-2">
    09
</td>

</tr>
                        </tbody>
                    </table>
                    </div>
                   
                     
                </div>
</div>
              
<div class="row">
  <div class="monthy-employee-chart">
            
                <div class="card-header">
                                    <h4 class=" head-text">Month-wise Employees Report</h4>
                                </div>
                                <div class="card-body ">
                                    <apexchart type="bar" ref="charts" height="300" :options="options" :series="series"></apexchart>
                                </div>
               </div>
                               
                           
               
</div>
              
                <div class="row">
                    <div class="row-Departmentattendance">
                    <div class="Departmentattendance-head">
                        <h3 class="head-text mx-4">
                            Department-wise Employee Status 

                        </h3>
                        <h3 class="text-viewall " data-bs-toggle="modal" data-bs-target="#departmentemployeeststus">
                           viewall

                        </h3>
                    </div>
                    <div class="Departmentattendence-Tabel">
                        <table class="tabelclass">
                        <thead class="my-3">
                            <tr class="tabel-tr ">

                                <th class="tabel-th total-text col-md-1">Departments</th>
                                <th class="tabel-th  total-text col-md-1">Employees</th>
                                <th class="tabel-th present-text col-md-1">Registered</th>
                                <th class="tabel-th contracts-text col-md-1">Contracts </th>
                                <th class="tabel-th late-text col-md-1">Probation</th>
                                <th class="tabel-th absent-text col-md-1">Resigned</th>
                                <th class="tabel-th absent-text col-md-1">Terminated</th>


                            </tr>
                        </thead>
                        <tbody class="tabel-body">
                            <tr v-for="(dept_data, index) in Department_data" class="body-tr" v-if="index < 4">

                                <td class="departmentsclass col-md-1 my-3">
                                    {{ dept_data.Department }}
                                   
                                </td>
                                <td class="departmentsclass col-md-1 my-3">
                                    {{ dept_data.TotalEmp }}
                                </td>
                                <td class="departmentsclass col-md-1 my-3">
                                    {{ dept_data.RegisteredCount }}
                                </td>
                                <td class="departmentsclass col-md-1" >
                                    {{ dept_data.TerminatedCount }}
                                </td>
                                <td class="departmentsclass col-md-1">
                                    {{ dept_data.TerminatedCount }}
                                </td>
                                <td class="departmentsclass col-md-1">
                                    {{ dept_data.ResignedCount }}
                                </td>
                                <td class="departmentsclass col-md-1">
                                    {{ dept_data.TerminatedCount }}
                                </td>
                            </tr>
             
                        </tbody>
                    </table>
                    </div>
                   
                     
                </div>
                </div>
               
                <div class="row">
                    <div class="col-lg-8">
                        <div class="employejob-status">
                    <div class="Departmentattendance-head">
                        <h3 class="head-text mx-4">
                            Employee Job status/Expiry details

                        </h3>
                        <h3 class="text-viewall "  data-bs-toggle="modal" data-bs-target="#employeejobststus">
                           view all

                        </h3>
                    </div>
                    <div class="Departmentattendence-Tabel">
                        <table class="tabelclass">
                        <thead class="my-3">
                            <tr class="tabel-tr ">

                                <th class="tabel-th total-text col-md-1">Employee Name</th>
                                <th class="tabel-th  total-text col-md-1">Department</th>
                                <th class="tabel-th total-text col-md-1">Position</th>
                                <th class="tabel-th total-text col-md-1">Status Expiry Date </th>
                             
                            </tr>
                        </thead>
                        <tbody class="tabel-body">
                            <tr class="body-tr">

<td class="departmentsclass col-md-2 my-3">
    Nauman
   
</td>
<td class="departmentsclass col-md-2 my-3">
    Bussiness
</td>
<td class="departmentsclass col-md-2 my-3">
    Intership
</td>
<td class="departmentsclass col-md-2" >
    11/12/23
</td>

</tr>
<tr class="body-tr">

<td class="departmentsclass col-md-2 my-3">
    Nauman
   
</td>
<td class="departmentsclass col-md-2 my-3">
    Bussiness
</td>
<td class="departmentsclass col-md-2 my-3">
    Intership
</td>
<td class="departmentsclass col-md-2" >
    11/12/23
</td>

</tr>
<tr class="body-tr">

<td class="departmentsclass col-md-2 my-3">
    Nauman
   
</td>
<td class="departmentsclass col-md-2 my-3">
    Bussiness
</td>
<td class="departmentsclass col-md-2 my-3">
    Intership
</td>
<td class="departmentsclass col-md-2" >
    11/12/23
</td>

</tr>
<tr class="body-tr">

<td class="departmentsclass col-md-2 my-3">
    Nauman
   
</td>
<td class="departmentsclass col-md-2 my-3">
    Bussiness
</td>
<td class="departmentsclass col-md-2 my-3">
    Intership
</td>
<td class="departmentsclass col-md-2" >
    11/12/23
</td>

</tr>
<tr class="body-tr">

<td class="departmentsclass col-md-2 my-3">
    Nauman
   
</td>
<td class="departmentsclass col-md-2 my-3">
    Bussiness
</td>
<td class="departmentsclass col-md-2 my-3">
    Intership
</td>
<td class="departmentsclass col-md-2" >
    11/12/23
</td>

</tr>
<tr class="body-tr">

<td class="departmentsclass col-md-2 my-3">
    Nauman
   
</td>
<td class="departmentsclass col-md-2 my-3">
    Bussiness
</td>
<td class="departmentsclass col-md-2 my-3">
    Intership
</td>
<td class="departmentsclass col-md-2" >
    11/12/23
</td>

</tr>
                        </tbody>
                    </table>
                    </div>
                   
                     
                </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                            <div class="annual-leave">
                                <div class="card-header ">
                                    <h4 class="head-text">Yearly Leaves Data</h4>
                                <hr>
                                </div>
                            <div class="anual-leave-chart">
                                <apexchart type="bar" height="400" :options="chartOptions5"
                                           :series="series5"></apexchart>
                            </div>
                            </div>
                           
                        </div>
                </div>
               
               
               
                 
                    <!-- <div class="row match-height">
                    
                        <div class="col-xl-4 col-md-6 col-12">
                            <div class="card card-developer-meetup">
                                <div class="meetup-img-wrapper rounded-top text-center">
                                    <img src="public/app-assets/images/illustration/email.svg" alt="Meeting Pic"
                                         height="170">
                                </div>
                                <div class="card-body" style="height:200px; overflow-y:scroll;">
                                    <div class="meetup-header d-flex align-items-center">
                                        <div class="meetup-day">
                                            <h6 class="mb-0">THU</h6>
                                            <h3 class="mb-0">24</h3>
                                        </div>
                                        <div class="my-auto">
                                            <h4 class="card-title mb-25">HR Events</h4>
                                            <p class="card-text mb-0">View your scheduled events</p>
                                        </div>
                                    </div>
                                    <div class="mt-0" style="margin-bottom:10px; cursor:pointer;"
                                         v-for="events1 in events" data-bs-toggle="modal" data-bs-target="#viewevents">
                                        <div class="avatar float-start bg-light-primary rounded me-1"
                                             @click="fetch_events(events1.event_id)">
                                            <div class="avatar-content">
                                                <i class="fa-solid fa-calendar"></i>
                                            </div>
                                        </div>
                                        <div class="more-info" @click="fetch_events(events1.event_id)">
                                            <h6 class="mb-0">{{ events1.title }}</h6>
                                            <small>{{ events1.start | formatDate }} <label
                                                v-if="events1.start_time !=null">(</label>{{ events1.start_time }}
                                                <label v-if="events1.end_time !=null">to</label><label v-else> </label>
                                                {{ events1.end_time }}<label v-if="events1.start_time !=null">)</label></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                    </div> -->
                 
                </div>
                <div class="row match-height">
                    <!-- Company Table Card -->
                   
                  
                        <div class="monthy-employee-chart">
            
            <div class="card-header">
                                <h4 class=" head-text">Employees Age Wise Data</h4>
                            </div>
                            <div class="card-body ">
                                <apexchart type="bar" ref="chart" height="300" :options="chartOptions" :series="chartSeries1"></apexchart>
                            </div>
           </div>

                   
                </div>
            </div>
        </div>

        <div class="modal fade" id="departmentemployeeattendence" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-edit-user">
                <div class="modal-content">
                    <div class="modal-header bg-transparent">
                        <h3 class="head-text mx-4">
                            Department-wise Today's attendence 

                        </h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pb-5 px-sm-5 pt-50">
                        <div class="text-center mb-2">
                            <div class="Departmentattendence-Tabel">
                        <table class="tabelclass">
                        <thead class="my-3">
                            <tr class="tabel-tr">

                                <th class="tabel-th total-text col-md-2">Departments</th>
                                <th class="tabel-th  total-text col-md-2">Employees</th>
                                <th class="tabel-th present-text col-md-2">Present</th>
                                <th class="tabel-th absent-text col-md-2">Absent </th>
                                <th class="tabel-th late-text col-md-2">Late</th>
                                <th class="tabel-th absent-text col-md-2">Leave</th>

                            </tr>
                        </thead>
                        <tbody class="tabel-body">
                            <tr  v-for="attendance1 in attendance" class="body-trr">

                                <td class="departmentsclass col-md-2 my-3">
                                    {{ attendance1.Department }}
                                   
                                </td>
                                <td class="departmentsclass col-md-2 my-3">
                                    {{ attendance1.TotalEmployee }}
                                </td>
                                <td class="departmentsclass col-md-2 my-3">
                                    {{ attendance1.Present }}
                                </td>
                                <td class="departmentsclass col-md-2" >
                                    {{ attendance1.Absent }}
                                </td>
                                <td class="departmentsclass col-md-2">
                                    {{ attendance1.Late }}
                                </td>
                                <td class="departmentsclass col-md-2">
                                    {{ attendance1.Leave }}
                                </td>

                            </tr>
                            <tr class="body-trr">

<td class="departmentsclass col-md-2 my-3">
    Development
   
</td>
<td class="departmentsclass col-md-2 my-3">
    54
</td>
<td class="departmentsclass col-md-2 my-3">
    65
</td>
<td class="departmentsclass col-md-2" >
    67
</td>
<td class="departmentsclass col-md-2">
    09
</td>
<td class="departmentsclass col-md-2">
    09
</td>

</tr>
                        </tbody>
                    </table>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="departmentemployeeststus" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-edit-user">
                <div class="modal-content">
                    <div class="modal-header bg-transparent">
                        <h3 class="head-text mx-4">
                            Department-wise Employee Status 

                        </h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pb-5 px-sm-5 pt-50">
                        <div class="text-center mb-2">
                            <div class="Departmentattendence-Tabel">
                        <table class="tabelclass">
                        <thead class="my-3">
                            <tr class="tabel-tr ">

                                <th class="tabel-th total-text col-md-1">Departments</th>
                                <th class="tabel-th  total-text col-md-1">Employees</th>
                                <th class="tabel-th present-text col-md-1">Registered</th>
                                <th class="tabel-th contracts-text col-md-1">Contracts </th>
                                <th class="tabel-th late-text col-md-1">Probation</th>
                                <th class="tabel-th absent-text col-md-1">Resigned</th>
                                <th class="tabel-th absent-text col-md-1">Terminated</th>


                            </tr>
                        </thead>
                        <tbody class="tabel-body">
                            <tr v-for="(dept_data, index) in Department_data" class="body-trr" >

                                <td class="departmentsclass col-md-1 my-3">
                                    {{ dept_data.Department }}
                                   
                                </td>
                                <td class="departmentsclass col-md-1 my-3">
                                    {{ dept_data.TotalEmp }}
                                </td>
                                <td class="departmentsclass col-md-1 my-3">
                                    {{ dept_data.RegisteredCount }}
                                </td>
                                <td class="departmentsclass col-md-1" >
                                    {{ dept_data.TerminatedCount }}
                                </td>
                                <td class="departmentsclass col-md-1">
                                    {{ dept_data.TerminatedCount }}
                                </td>
                                <td class="departmentsclass col-md-1">
                                    {{ dept_data.ResignedCount }}
                                </td>
                                <td class="departmentsclass col-md-1">
                                    {{ dept_data.TerminatedCount }}
                                </td>
                           
                            </tr>
                       
                        </tbody>
                    </table>
                    </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="employeejobststus" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
                <div class="modal-content">
                    <div class="modal-header bg-transparent">
                     
                        <h3 class="head-text mx-4">
                            Employee Job status/Expiry details

                        </h3>
                     
                  
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pb-5 px-sm-5 pt-50">
                        <div class="text-center mb-2">
                            <div class="Departmentattendence-Tabel">
                        <table class="tabelclass">
                        <thead class="my-3">
                            <tr class="tabel-tr ">

                                <th class="tabel-th total-text col-md-1">Employee Name</th>
                                <th class="tabel-th  total-text col-md-1">Department</th>
                                <th class="tabel-th total-text col-md-1">Position</th>
                                <th class="tabel-th total-text col-md-1">Status Expiry Date </th>
                             
                            </tr>
                        </thead>
                        <tbody class="tabel-body">
                            <tr class="body-trr">

<td class="departmentsclass col-md-2 my-3">
    Nauman
   
</td>
<td class="departmentsclass col-md-2 my-3">
    Bussiness
</td>
<td class="departmentsclass col-md-2 my-3">
    Intership
</td>
<td class="departmentsclass col-md-2" >
    11/12/23
</td>

</tr>

                        </tbody>
                    </table>
                    </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- View loan Modal -->
        <div class="modal fade" id="viewevents" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
                <div class="modal-content">
                    <div class="modal-header bg-transparent">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pb-5 px-sm-5 pt-50">
                        <div class="text-center mb-2">
                            <center>
                                <div class="col-md-12">
                                    <h2 style="text-align:center;"> Details of event</h2>
                                    <table style="width:100%;">
                                        <thead>
                                        <tr>
                                            <th style="width:25%;">Event ID:</th>
                                            <td style="width:25%;">{{ event_id }}</td>
                                            <th style="width:25%;">Start date:</th>
                                            <td style="width:25%;">{{ start_date | formatDate }}</td>
                                        </tr>
                                        <tr>
                                            <th>Event title:</th>
                                            <td>{{ ev_title }}</td>
                                            <th>End date:</th>
                                            <td>{{ end_date }}</td>
                                        </tr>
                                        <tr>
                                            <th>Description:</th>
                                            <td> {{ ev_description }}</td>
                                            <th>Start time:</th>
                                            <td>{{ start_time }}</td>
                                        </tr>
                                        <tr>
                                            <th>URL:</th>
                                            <td> {{ ev_url }}</td>
                                            <th>End time:</th>
                                            <td> {{ end_time }}</td>
                                        </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="col-12 text-center">
                                    <button type="reset" class="btn btn-outline-secondary mt-2" data-bs-dismiss="modal"
                                            aria-label="Close">
                                        Close
                                    </button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ View loan Modal -->

    </div>
</template>

<script>

import moment from 'moment';
import VueApexCharts from 'vue-apexcharts';

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(String(value)).format('ddd MMM DD,YYYY')
    }
})

export default {

    components: {
        apexchart: VueApexCharts,
    },
    data: function () {
        return {
            Department_data: {},
            series2: [],
            count_users: {},
            att_daily_count: {},
            attendance: {},
            emp_count: {},
            exp_emp: {},
            exp_cnic: {},

            events: {},
            chartSeriesdonut: [],
            chartOptionsdonut: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
              breakpoint: 300,
            }],
            labels: ['Male', 'Female'],
            },
            chartOptions2: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total Employee',
                                formatter: function (w) {

                                    return w.globals.series[0];
                                }
                            }
                        }
                    }
                },
                colors: [ '#0084ff','#1FC048', '#ffc107', '#dc3545', '#6c757d', '#0dcaf0'],
                labels: [ "Total Employee",'Registered', 'Contractual', 'Terminated', 'Resigned', 'Suspended'],
            },
            series5: [{
                name: '',
                data: [28, 10, 8, 62, 8, 41]
            }],
            EmpAge: {},

            event_id: '',
            start_date: '',
            ev_title: '',
            end_date: '',
            start_time: '',
            end_time: '',
            ev_description: '',
            ev_url: '',

            chartSeries: [
                {
                    name: '',
                    data: []
                }
            ],
            chartOptions: {
                chart: {
                    type: 'bar',
                },
                xaxis: {
                    categories: ['0-20', '21-30', '31-40', '41-50', '51+'],
                    title: {
                        text: 'Age Group'
                    }

                },
                yaxis: {
                    title: {
                        text: 'Employees Count'
                    },
            //   max:'',
                },

            },
            chartSeries1: [],
            chartDataLoaded: false,

            dde: [],
            ddf: [],
            chartOptions5: {
                chart: {
                    type: 'bar',
                    height: 400
                },
                labels: ['Annual', 'Casual', 'Sick', 'Maternity', 'Paternity', 'Hajj/Ziarat'],
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: ['Annual', 'Casual', 'Sick', 'Maternity', 'Paternity', 'Hajj/Ziarat'],
                },

            },

            options: {
                chart: {
                    id: 'vuechart-example',
                    height: 150,
                
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                yaxis: {
                    title: {
                        text: 'Employees Count'
                    },
    },
            },
            series: [{
                name: 'Hiring',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                name: 'Firing',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },

            ]
        }
    },

    methods: {
        fetchChartData() {
            axios.get('CompanyWise_EmpAge')
                .then(response => {
                    const responseData = response.data.ageGroups;
        const ageGroups = responseData.map(item => item.AgeGroup);
        const employeeCounts = responseData.map(item => parseInt(item.EmployeeCount, 10));
        const totalEmployees = employeeCounts.reduce((acc, count) => acc + count, 0);
console.log(totalEmployees);
        // Update your chartOptions
        // this.chartOptions.xaxis.categories = ageGroups;
        // this.chartOptions.yaxis.max =totalEmployees ;
        this.$refs.chart.updateOptions({
            yaxis: {
                max: totalEmployees,
            },
        });
        // Update your chart series
        this.chartSeries1 = [
            {
                name: 'Employee Count',
                data: employeeCounts,
            },
        ];
 
        this.chartDataLoaded = true;
                })
                .catch(error => {
                    console.error('Error fetching chart data:', error);
                });
        },

        fetch_events(id) {
            axios.get('fetch_this_event/' + id)
                .then(responce => {

                    this.ev_title = responce.data[0].title;
                    this.event_id = responce.data[0].event_id;
                    this.start_date = responce.data[0].start;
                    this.end_date = responce.data[0].end;
                    this.start_time = responce.data[0].start_time;
                    this.end_time = responce.data[0].end_time;
                    this.ev_description = responce.data[0].description;
                    this.ev_url = responce.data[0].url;
                })
        },

 
    },

    mounted() {
        this.fetchChartData();

        axios.get('./count_employees')
            .then(response => {
                this.count_users = response.data.data
// console.log(this.count_users());
                //Registered                                                //Contractual                                                                                                                                                                                  //Terminated
                this.series2 = [
                 
                    ((this.count_users.all_users / this.count_users.all_users) * 100).toFixed(2),
   
                ((this.count_users.active_users / this.count_users.all_users) * 100).toFixed(2),
                 ((this.count_users.contractual_users / this.count_users.all_users) * 100).toFixed(2),
                  ((this.count_users.terminated_users / this.count_users.all_users) * 100).toFixed(2),
                   ((this.count_users.inactive_users / this.count_users.all_users) * 100).toFixed(2),
                    ((this.count_users.suspended_users / this.count_users.all_users) * 100).toFixed(2)
            ]

            })
            .catch(error => {
            });
        axios.get('./fetch_event_thisweek')
            .then(data => this.events = data.data)
            .catch(error => {
            });

        axios.get('./get_count_dailyatt/')
            .then(response => {
                this.att_daily_count = response.data;
            })

        axios.get('./count_hiring_d/')
            .then(response => {
                this.dde = response.data;
                axios.get('./count_firing_d/')
                    .then(data => {
                        this.ddf = data.data;
                        const totalHiring = this.dde.reduce((sum, count) => sum + count, 0);

// Find the maximum value in this.dde
const maxHiring = Math.max(...this.dde);

// Use the maximum value as the y-axis max value
const yAxisMaxValue = maxHiring + 5;


                        this.series = [
                            {
                                name: 'Hiring',
                                data: this.dde
                            },
                            {
                                name: 'Firing',
                                data: this.ddf
                            },
                        ]
                        this.$refs.charts.updateOptions({
                    yaxis: {
                        max: yAxisMaxValue,
                    },
                });
                    })
            })


        axios.get('DepartmentWise_EmpStatus')
            .then(response => {
                this.Department_data = response.data;

            })
            .catch(error => {
            });
        axios.get('./session_att')
            .then(data => this.attendance = data.data)
            .catch(error => {
            });

        axios.get('./hrdb_employee_count')
            .then(data => {
                this.emp_count = data.data
                this.chartSeriesdonut = [
            this.emp_count.males,
            this.emp_count.females,
        ];
           
         
      
            
            })
            .catch(error => {
            });

        axios.get('./job_exp_employee')
            .then(data => this.exp_emp = data.data)
            .catch(error => {
            });

        axios.get('./cnic_exp_employee')
            .then(data => this.exp_cnic = data.data)
            .catch(error => {
            });

    }
}
</script>
<style>
.row-birthday{
    width: 100%;
height: 80px;
flex-shrink: 0;
border-radius: 16px;
background: #BAD8FB;
margin-bottom: 10px;
}
.row-attendance{
    margin-bottom: 20px;
    max-width: 100%;
    max-height: 200px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    padding: 10px;

}
.head-text{
    color: #000;
    font-family: 'Poppins',sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.2px;
    padding: 5px;
}
.emp-attendance{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.attendenceSession{
    width: 180px;
height: 120px;
flex-shrink: 0;
border-radius: 14px;
background: #F9F9F9;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
/* text-align: center; */
display: flex;
align-items: center;
justify-content: center;
}
.total-emp{
    max-width: 120%;
    max-height: 120px;
    flex-shrink: 0;
    /* border-radius: 14px; */
    /* background: #F9F9F9; */
    /* box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15); */
    /* padding: 10px;
    margin: 10px; */
}
.total-no{
    color: #000;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.28px;
    padding: 5px;
}
.total-text{
    color: #000;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
    
}
.present-emp{
    max-width: 120%;
    max-height: 120px;
    flex-shrink: 0;
    /* border-radius: 14px;
    background: #F9F9F9;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    padding: 10px;
    margin: 10px; */
}
.present-no{
    color: #1FC048;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.28px;
    padding: 5px;
}
.present-text{
    color: #1FC048;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
}
.late-emp{
    max-width: 120%;
    max-height: 120px;
    flex-shrink: 0;
    /* border-radius: 14px;
    background: #F9F9F9;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    padding: 10px;
    margin: 10px; */
}
.late-no{
    color: #0070F2;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.28px;
    padding: 5px;
}
.late-text{
    color: #0070F2;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
}
.absent-emp{
    max-width: 120%;
    max-height: 120px;
    /* flex-shrink: 0;
    border-radius: 14px;
    background: #F9F9F9;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    padding: 10px;
    margin: 10px; */
}
.absent-no{
    color: #DC0000;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.28px;
    padding: 5px;
}
.absent-text{
    color: #DC0000;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
}
.leave-emp{
    max-width: 120%;
    max-height: 120px;
    /* flex-shrink: 0;
    border-radius: 14px;
    background: #F9F9F9;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    padding: 10px;
    margin: 10px; */
}
.leave-no{
    color: #FF6900;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.28px;
    padding: 5px;

}
.leave-text{
    color: #FF6900;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
}
.contracts-text{
    color: #FE6900;
text-align: center;
font-family: 'Poppins',sans-serif;

font-size: 19px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.16px;
}
.row-Departmentattendance{

margin-top: 20px;
margin-bottom: 20px;
width: 100%;
height: 353px;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}

.Departmentattendance-head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
height: 60px;
border-radius: 14px 14px 0px 0px;
background: #FFF;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
}
.donut-chart{
    height: 220px;
    width: 330px;
}
.text-viewall{
    color: #000;
font-family: 'Poppins',sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.12px;
margin-right: 20px;
cursor: pointer;
}

.tabelclass{
    align-items: center;
    margin-top:20px;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 20px;
}

.tabel-tr{
    text-align: center;
}
.departmentsclass{
    color: #000;
    font-family: 'Poppins',sans-serif;

font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.14px;
}

.tabel-body{
    text-align: center;
    margin-top: 150px;
}
.tabel-body .body-trr td {
    height: 34px;
        border-right: 1px solid #020202; /* Add a vertical border between td elements */
        padding-right: 10px; /* Adjust padding for better spacing */
        
    }
    .tabel-body .body-tr td {
    height: 34px;
    border-right: 1px solid #020202; /* Add a vertical border between td elements */
    padding-right: 10px; /* Adjust padding for better spacing */
    
}
    .tabel-body .body-tr td:last-child {
        border-right: none;
    }
    .tabel-body .body-trr td:first-child{
        border-left: 1px solid #020202;
        padding-left: 10px;
    }
    .tabelclass .thead .tr{
        margin-bottom: 20px;
    }
    .annual-leave{
        width: 420px;
height: 521px;
flex-shrink: 0;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    }
    .employejob-status{
        width: 870px;
height: 521px;
flex-shrink: 0;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
margin-bottom: 20px;
    }
    .monthy-employee-chart{
        width: 100%;
height: 421px;
flex-shrink: 0;
border-radius: 16px;
background: #FFF;
box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);

    }
    .employee-composition{
        width: 450px;
height: 295px;
flex-shrink: 0;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
margin-right: 30px;
    }
    .employee-detail{
        width: 850px;
height: 295px;
flex-shrink: 0;
border-radius: 14px;
background: #FFF;
box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
    }
    .details-count{
        margin-left: 80px;
        height: 200px;
        width:400px;
    }
    .ridial-bars{
        margin-right: 50px;
    }
    .radialcount{
        margin-bottom: 14px;
        width: 250px;
        height: 20px;
    }
    .countsgraphtext{
        color: #000;
        font-family: 'Poppins',sans-serif;

font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.16px;
    }
    .countgraph{
        color: #000;
text-align: right;
font-family: 'Poppins',sans-serif;

font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.16px;
    }
    .body-trr td {
        border-bottom: 1px solid #000000;
        border-top: 1px solid #000000;
    }
    .malefemale{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-top: 27px;
    }
</style>