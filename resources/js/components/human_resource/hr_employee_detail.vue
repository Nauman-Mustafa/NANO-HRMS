<template>
    <div >
        <div class="app-content content ">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper container-xxl p-0">
                <div class="content-header row">
                    <div class="breadcrumb-wrapper">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link style="text-decoration: none;" to="/hr/dashboard">Dashboard</router-link>
                            </li>
                            <li class="breadcrumb-item active">
                                Employees Detail
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="content-body">
                <!-- users list start -->
                <section class="app-user-list">
<div class="employeedetailcountrow d-flex align-items-center justify-content-between my-2 ">
<div class=" col-md-6   ">
 
<div class="row my-4 mx-3">
    <div class="col-md-4">
<div class="employedetailcountcard ">
    <h3 class="employedetailtoalemployee" style="color: #27C66E;">Total </h3>
                                        <h3 class="employedetailcount">{{ count_users.all_users }}</h3>
</div>  
                    </div>

                    <div class="col-md-4">
<div class="employedetailcountcard ">
    <h3 class="employedetailtoalemployee" style="color: #7267EF;">Registered </h3>
                                        <h3 class="employedetailcount">{{ count_users.active_users }}</h3>
</div>
                    </div>
                    <div class="col-md-4">
<div class="employedetailcountcard ">
    <h3 class="employedetailtoalemployee" style="color: #7367EF;">Contractual </h3>
                                        <h3 class="employedetailcount">{{ count_users.contractual_users }}</h3>
</div>
                    </div>
</div>
<div class="row  mx-3">
    <div class="col-md-4">
<div class="employedetailcountcard ">
    <h3 class="employedetailtoalemployee" style="color: #FD9F43;">Suspended </h3>
                                        <h3 class="employedetailcount">{{ count_users.suspended_users }}</h3>
</div>
                    </div>

                    <div class="col-md-4">
<div class="employedetailcountcard ">
    <h3 class="employedetailtoalemployee" style="color: #EA5455;">Terminated </h3>
                                        <h3 class="employedetailcount">{{ count_users.terminated_users }}</h3>
</div>
                    </div>
                    <div class="col-md-4">
<div class="employedetailcountcard ">
    <h3 class="employedetailtoalemployee" style="color: #82858A;">Resigned </h3>
                                        <h3 class="employedetailcount">{{ count_users.inactive_users }}</h3>
</div>
                    </div>
</div>            
                
</div>
<div class=" col-md-6  d-flex justify-content-center align-item-center">
    <div class="ridial-bars" id="chart">
                                                <apexchart type="radialBar" height="320" width='320' :options="chartOptions2"
                                                           :series="series2"></apexchart>
                                            </div>
</div>

</div>


               
                    <div class="card employedetailscards">
                        <div class="card-body border-bottom">
                            <div class="row">
                                <div class="col-md-2 user_status">
                                    <label class="form-label">  
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 3H5C3.586 3 2.879 3 2.44 3.412C2 3.824 2 4.488 2 5.815V6.505C2 7.542 2 8.061 2.26 8.491C2.52 8.921 2.993 9.189 3.942 9.723L6.855 11.363C7.491 11.721 7.81 11.9 8.038 12.098C8.512 12.509 8.804 12.993 8.936 13.588C9 13.872 9 14.206 9 14.873V17.543C9 18.452 9 18.907 9.252 19.261C9.504 19.616 9.952 19.791 10.846 20.141C12.725 20.875 13.664 21.242 14.332 20.824C15 20.407 15 19.452 15 17.542V14.872C15 14.206 15 13.872 15.064 13.587C15.1896 13.0042 15.5059 12.4798 15.963 12.097C16.19 11.9 16.509 11.721 17.145 11.362L20.058 9.722C21.006 9.189 21.481 8.922 21.74 8.492C22 8.062 22 7.542 22 6.504V5.814C22 4.488 22 3.824 21.56 3.412C21.122 3 20.415 3 19 3Z" stroke="#263238" stroke-width="1.5"/>
</svg>  Department</label>
                                    <multiselect class="mutiselect" id="FilterTransaction" v-model="department"
                                                 :options="options2" :show-labels="false"
                                                 placeholder="All Departments"
                                                 style="margin-right: 10px; font-size: 12px;">
                                    </multiselect>
                                </div>
                                <div class="col-md-3 user_role">
                                    <label class="form-label"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 3H5C3.586 3 2.879 3 2.44 3.412C2 3.824 2 4.488 2 5.815V6.505C2 7.542 2 8.061 2.26 8.491C2.52 8.921 2.993 9.189 3.942 9.723L6.855 11.363C7.491 11.721 7.81 11.9 8.038 12.098C8.512 12.509 8.804 12.993 8.936 13.588C9 13.872 9 14.206 9 14.873V17.543C9 18.452 9 18.907 9.252 19.261C9.504 19.616 9.952 19.791 10.846 20.141C12.725 20.875 13.664 21.242 14.332 20.824C15 20.407 15 19.452 15 17.542V14.872C15 14.206 15 13.872 15.064 13.587C15.1896 13.0042 15.5059 12.4798 15.963 12.097C16.19 11.9 16.509 11.721 17.145 11.362L20.058 9.722C21.006 9.189 21.481 8.922 21.74 8.492C22 8.062 22 7.542 22 6.504V5.814C22 4.488 22 3.824 21.56 3.412C21.122 3 20.415 3 19 3Z" stroke="#263238" stroke-width="1.5"/>
</svg>  Designation</label>
                                    <multiselect class="mutiselect" id="UserRole" v-model="designation"
                                                 :options="options" :show-labels="false"
                                                 placeholder="All Designations"
                                                 style="margin-right: 10px; font-size: 15px;">
                                    </multiselect>
                                </div>
                                <div class="col-md-2 user_plan">
                                    <label class="form-label"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 3H5C3.586 3 2.879 3 2.44 3.412C2 3.824 2 4.488 2 5.815V6.505C2 7.542 2 8.061 2.26 8.491C2.52 8.921 2.993 9.189 3.942 9.723L6.855 11.363C7.491 11.721 7.81 11.9 8.038 12.098C8.512 12.509 8.804 12.993 8.936 13.588C9 13.872 9 14.206 9 14.873V17.543C9 18.452 9 18.907 9.252 19.261C9.504 19.616 9.952 19.791 10.846 20.141C12.725 20.875 13.664 21.242 14.332 20.824C15 20.407 15 19.452 15 17.542V14.872C15 14.206 15 13.872 15.064 13.587C15.1896 13.0042 15.5059 12.4798 15.963 12.097C16.19 11.9 16.509 11.721 17.145 11.362L20.058 9.722C21.006 9.189 21.481 8.922 21.74 8.492C22 8.062 22 7.542 22 6.504V5.814C22 4.488 22 3.824 21.56 3.412C21.122 3 20.415 3 19 3Z" stroke="#263238" stroke-width="1.5"/>
</svg>  Location</label>
                                    <multiselect class="mutiselect" id="UserPlan" v-model="location"
                                                 :options="options1" :show-labels="false"
                                                 placeholder="All Locations"
                                                 style="margin-right: 10px; font-size: 15px;">
                                    </multiselect>
                                </div>
                                <div class="col-md-2 user_status">
                                    <label class="form-label"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 3H5C3.586 3 2.879 3 2.44 3.412C2 3.824 2 4.488 2 5.815V6.505C2 7.542 2 8.061 2.26 8.491C2.52 8.921 2.993 9.189 3.942 9.723L6.855 11.363C7.491 11.721 7.81 11.9 8.038 12.098C8.512 12.509 8.804 12.993 8.936 13.588C9 13.872 9 14.206 9 14.873V17.543C9 18.452 9 18.907 9.252 19.261C9.504 19.616 9.952 19.791 10.846 20.141C12.725 20.875 13.664 21.242 14.332 20.824C15 20.407 15 19.452 15 17.542V14.872C15 14.206 15 13.872 15.064 13.587C15.1896 13.0042 15.5059 12.4798 15.963 12.097C16.19 11.9 16.509 11.721 17.145 11.362L20.058 9.722C21.006 9.189 21.481 8.922 21.74 8.492C22 8.062 22 7.542 22 6.504V5.814C22 4.488 22 3.824 21.56 3.412C21.122 3 20.415 3 19 3Z" stroke="#263238" stroke-width="1.5"/>
</svg>  Status</label>
                                    <multiselect class="mutiselect" id="accountPhoneNumber"
                                                 v-model="emp_status" :options="options3"
                                                 :show-labels="false"
                                                 placeholder="Employee Status"
                                                 style="margin-right: 10px; font-size: 15px;">
                                    </multiselect>
                                </div>
                                <div class="col-md-2">
                                    <button class="btn nanobutton"
                                            style="height: 40px !important; margin-top: 26px; width:100%"
                                            @click="getbyfilter()"> <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M20.75 19.6895L15.086 14.0255C16.4471 12.3914 17.1258 10.2956 16.981 8.17389C16.8361 6.05219 15.8789 4.06801 14.3084 2.6341C12.7379 1.2002 10.675 0.42697 8.54893 0.475279C6.42284 0.523588 4.39723 1.38971 2.89347 2.89347C1.38971 4.39723 0.523588 6.42284 0.475279 8.54893C0.42697 10.675 1.2002 12.7379 2.6341 14.3084C4.06801 15.8789 6.05219 16.8361 8.17389 16.981C10.2956 17.1258 12.3914 16.4471 14.0255 15.086L19.6895 20.75L20.75 19.6895ZM1.99996 8.74996C1.99996 7.41494 2.39585 6.1099 3.13754 4.99987C3.87924 3.88983 4.93345 3.02467 6.16685 2.51378C7.40025 2.00289 8.75745 1.86921 10.0668 2.12966C11.3762 2.39011 12.5789 3.03299 13.5229 3.97699C14.4669 4.921 15.1098 6.12373 15.3703 7.4331C15.6307 8.74248 15.497 10.0997 14.9862 11.3331C14.4753 12.5665 13.6101 13.6207 12.5001 14.3624C11.39 15.1041 10.085 15.5 8.74996 15.5C6.96036 15.498 5.24463 14.7862 3.97919 13.5207C2.71375 12.2553 2.00195 10.5396 1.99996 8.74996Z" fill="white"/>
</svg>  Search
                                    </button>

                                </div>
                                <div class="col-md-1">
                                    <a v-b-toggle.my-collapse title="Click to see extra search filters">
                                        <i aria-hidden="true" class="fa-solid fa-up-right-and-down-left-from-center"
                                           style="margin-top:30px"></i>
                                    </a>
                                </div>
                            </div>
                            <b-collapse id="my-collapse">
                                <div class="advanced" style="min-height: 80px;">
                                    <div class="container">
                                        <div class="row"
                                             style=" display: block; padding-top:10px;padding-bottom:10px">
                                            <div class="col-md-2" style="float:left">
                                                <label class="form-label">Job Status</label>
                                                <multiselect class="mutiselect" id="accountPhoneNumber"
                                                             v-model="status" :options="options4"
                                                             :show-labels="false"
                                                             placeholder="All Job Status"
                                                             style="margin-right: 10px; font-size: 15px;">
                                                </multiselect>
                                            </div>
                                            <div class="col-md-2" style="float:left">
                                                <label class="form-label">Minimum salary</label>
                                                <b-form-input id="inline-form-input-name"
                                                              v-model="min_price"
                                                              class="mb-2 mr-sm-2 mb-sm-0 mutiselect" min="0"
                                                              placeholder="Min Salary"
                                                              style="height: 40px !important;border-radius: 5px !important;"
                                                              type="number"></b-form-input>
                                            </div>
                                            <div class="col-md-2" style="float:left">
                                                <label class="form-label">Maximum salary</label>
                                                <b-form-input id="inline-form-input-name"
                                                              v-model="max_price"
                                                              class="mb-2 mr-sm-2 mb-sm-0 mutiselect" min="0"
                                                              placeholder="Max Salary"
                                                              style="height: 40px !important;border-radius: 5px !important;"
                                                              type="number"></b-form-input>
                                                <label v-if="min_price!='' && max_price!='' && max_price<=min_price"
                                                       style="color: #d93025; font-size:11px; text-align:justify;">Maximum
                                                    salary must be greater then minimum salary!</label>
                                            </div>
                                            <div class="col-md-2" style="float:left">
                                                <label class="form-label">CNIC</label>
                                                <masked-input  id="inline-form-input-name"
                                                              v-model="cnic"
                                                              class="form-control account-number-mask mutiselect    "
                                                              mask="11111-1111111-1"
                                                              placeholder="CNIC"
                                                              style="height: 40px !important;border-radius: 5px !important;"/>
                                            </div>
                                            <div class="col-md-2" style="float:left">
                                                <label class="form-label">Gender</label>
                                                <multiselect class="mutiselect" id="accountPhoneNumber"
                                                             v-model="gender" :options="options5"
                                                             :show-labels="false"
                                                             placeholder="All Ganders"
                                                             style="margin-right: 10px; font-size: 15px;">
                                                </multiselect>
                                            </div>
                                            <div class="col-md-2" style="float:left">
                                                <label class="form-label">Employee Code</label>
                                                <b-form-input id="inline-form-input-name"
                                                              v-model="emp_id"
                                                              class="mb-2 mr-sm-2 mb-sm-0 mutiselect" placeholder="Employee Code"
                                                              style="height: 40px !important;border-radius: 5px !important;"
                                                              type="number"></b-form-input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-collapse>
                        </div>
                        <div class="header-actions mx-2 row mt-75" style="margin-bottom:3px;">
                        
                                <div  class="dt-action-buttons  d-flex justify-content-between  ">
                                   
                                        <div class="col-md-5">
                                            <input id="keyword2" v-model="keyword2" class="form-control mutiselect " name="keyword2"
                                                   placeholder="Search By Employee Name / Code / CNIC / Mobile number"
                                                   type="text"/>
                                        </div>
                                        <div class="col-md-3 ">
                                            <router-link  class=" nanobutton dt-button add-new btn "
                                                         tabindex="0" to="/hr/create_employee"
                                                         type="button"><span>+ Add New Employee</span></router-link>
                                        </div>
                                </div>
                           
                        </div>

                        <div class="Departmentattendence-Tabel">
                        <table class="tabelclass">
                        <thead class="my-3">
                            <tr class="tabel-tr ">

                             
                                <!-- <th class="tabel-th total-text col-md-1">Sr. #</th> -->
                                    <th class="tabel-th total-text col-md-1">Emp.Code</th>
                                    <th class="tabel-th total-text col-md-1">Employee Name<br/>Departmrnt & Designation</th>
                                    <th class="tabel-th total-text col-md-1">Build Profile</th>
                                    <th class="tabel-th total-text col-md-1">Joining Date<br/>& Salary</th>
                                    <th class="tabel-th total-text col-md-1">Status</th>
                                    <th class="tabel-th total-text col-md-1" style="max-width: 50px;">View</th>
                             
                            </tr>
                        </thead>
                        <tbody class="tabel-body">
                            <tr v-for="(adsdata1, index) in adsdata.data" class="odd">
                                    <!-- <td class="td-center">{{ index + 1 + (15 * (page - 1)) }}</td> -->
                                    <td class="td-center">{{ adsdata1.EmployeeCode }}</td>
                                    <td class="td-left">
                                        <div class="d-flex justify-content-left align-items-center">
                                            <div class="avatar-wrapper">
                                                <div class="avatar  me-1">
                                                    <img v-if="adsdata1.Photo=='' || adsdata1.Photo==null"
                                                         alt="Avatar" height="32"
                                                         src="public/images/profile_images/pro.png" width="32">
                                                    <img v-else
                                                         alt="Avatar"
                                                         height="32"
                                                         v-bind:src="`public/images/profile_images/${adsdata1.Photo}`"
                                                         width="32">
                                                </div>
                                            </div>
                                            <div class="d-flex flex-column">
                                                <a class="user_name text-truncate text-body"><span
                                                    class="fw-bolder">{{ adsdata1.Name }} </span></a>
                                                <small class="emp_post text-muted">
                                                    {{ adsdata1.Department }} - {{ adsdata1.Designation }}
                                                </small>
                                            </div>
                                        </div>
                                    </td>
                                    <td style="position: relative; vertical-align: middle !important;">
                                        <div>
                                            <b-dropdown id="dropdown-left" text="Edit Profile" variant="Aquamarine" class="text-white m-2">
    <b-dropdown-item>  <router-link
                                            :to="{ name: 'update_employee_profile', params: { id: adsdata1.EmployeeID }}">
                                                <span v-if="adsdata1.Name==null || adsdata1.Name==''"
                                                      class="badge  rounded-pill badge-light-danger">Personal</span>
                                            <span v-else
                                                  class="badge  rounded-pill badge-light-primary">Personal</span>
                                        </router-link> </b-dropdown-item>
    <b-dropdown-item>  <router-link v-if="hasPermission('HRMS employees_detail update employee_employeement')"
                                                :to="{ name: 'create_employee_employeement', params: { id: adsdata1.EmployeeID }}">
                                                <span v-if="adsdata1.Status==null || adsdata1.Status==''"
                                                      class="badge rounded-pill badge-light-danger">Employement</span>
                                            <span v-else
                                                  class="badge rounded-pill badge-light-primary">Employement</span>
                                        </router-link></b-dropdown-item>
    <b-dropdown-item>        <router-link 
                                                v-if="hasPermission('HRMS employees_detail update employee_education') && adsdata1.EduStatus !=='Added' && adsdata1.EduStatus!=='skip' "
                                                :to="{ name: 'create_employee_education', params: { id: adsdata1.EmployeeID }}">
                                                <span v-if="adsdata1.EduStatus==null || adsdata1.EduStatus==''"
                                                      class="badge  rounded-pill badge-light-danger">Education</span>
                                                <span v-else
                                                      class="badge  rounded-pill badge-light-primary">Education</span>
                                            </router-link>
                                            <router-link v-else-if="hasPermission('HRMS employees_detail update employee_education') && adsdata1.EduStatus =='Added' || adsdata1.EduStatus=='skip'"
                                                         :to="{ name: 'update_education_profile', params: { id: adsdata1.EmployeeID }}">

                                                <span class="badge  rounded-pill badge-light-primary">Education</span>
                                            </router-link></b-dropdown-item>
    <!-- <b-dropdown-divider></b-dropdown-divider> -->
    <b-dropdown-item >             <router-link 
                                                v-if="hasPermission('HRMS employees_detail update employee_experience') && adsdata1.ExpStatus!=='skip'&& adsdata1.ExpStatus!=='Added' "
                                                :to="{ name: 'create_employee_experience', params: { id: adsdata1.EmployeeID }}">
                                                <span v-if="adsdata1.ExpStatus==null || adsdata1.ExpStatus==''"
                                                      class="badge  rounded-pill badge-light-danger">Experience</span>
                                                <span v-else
                                                      class="badge  rounded-pill badge-light-primary">Experience</span>
                                            </router-link>
                                            <router-link v-else-if="hasPermission('HRMS employees_detail update employee_experience')  && adsdata1.ExpStatus=='skip' || adsdata1.ExpStatus=='Added'"
                                                         :to="{ name: 'update_experience_profile', params: { id: adsdata1.EmployeeID }}">

                                            <span class="badge  rounded-pill badge-light-primary">Experience</span>
                                        </router-link></b-dropdown-item>
    <b-dropdown-item >                            <router-link  v-if="hasPermission('HRMS employees_detail  add_documents')"
                                                :to="{ name: 'create_documents', params: { id: adsdata1.EmployeeID }}">

                                                <span v-if="adsdata1.DocStatus==null || adsdata1.DocStatus==''"
                                                      class="badge rounded-pill badge-light-danger">Documents</span>
                                                <span v-else
                                                      class="badge rounded-pill badge-light-primary">Documents</span>
                                            </router-link></b-dropdown-item>
  </b-dropdown>
</div>
    <!-- <div class="edit-profile-btn" @click="toggleDropdown">
        Edit Profile
    </div>
    <div v-show="isDropdownOpen" class="dropdown-menu">
        <router-link
                                            :to="{ name: 'update_employee_profile', params: { id: adsdata1.EmployeeID }}">
                                                <span v-if="adsdata1.Name==null || adsdata1.Name==''"
                                                      class="badge  rounded-pill badge-light-danger">Personal</span>
                                            <span v-else
                                                  class="badge  rounded-pill badge-light-primary">Personal</span>
                                        </router-link>

                                            <router-link v-if="hasPermission('HRMS employees_detail update employee_employeement')"
                                                :to="{ name: 'create_employee_employeement', params: { id: adsdata1.EmployeeID }}">
                                                <span v-if="adsdata1.Status==null || adsdata1.Status==''"
                                                      class="badge rounded-pill badge-light-danger">Employement</span>
                                            <span v-else
                                                  class="badge rounded-pill badge-light-primary">Employement</span>
                                        </router-link>

                                            <router-link 
                                                v-if="hasPermission('HRMS employees_detail update employee_education') && adsdata1.EduStatus !=='Added' && adsdata1.EduStatus!=='skip' "
                                                :to="{ name: 'create_employee_education', params: { id: adsdata1.EmployeeID }}">
                                                <span v-if="adsdata1.EduStatus==null || adsdata1.EduStatus==''"
                                                      class="badge  rounded-pill badge-light-danger">Education</span>
                                                <span v-else
                                                      class="badge  rounded-pill badge-light-primary">Education</span>
                                            </router-link>
                                            <router-link v-else-if="hasPermission('HRMS employees_detail update employee_education') && adsdata1.EduStatus =='Added' || adsdata1.EduStatus=='skip'"
                                                         :to="{ name: 'update_education_profile', params: { id: adsdata1.EmployeeID }}">

                                                <span class="badge  rounded-pill badge-light-primary">Education</span>
                                            </router-link>
                                            <router-link 
                                                v-if="hasPermission('HRMS employees_detail update employee_experience') && adsdata1.ExpStatus!=='skip'&& adsdata1.ExpStatus!=='Added' "
                                                :to="{ name: 'create_employee_experience', params: { id: adsdata1.EmployeeID }}">
                                                <span v-if="adsdata1.ExpStatus==null || adsdata1.ExpStatus==''"
                                                      class="badge  rounded-pill badge-light-danger">Experience</span>
                                                <span v-else
                                                      class="badge  rounded-pill badge-light-primary">Experience</span>
                                            </router-link>
                                            <router-link v-else-if="hasPermission('HRMS employees_detail update employee_experience')  && adsdata1.ExpStatus=='skip' || adsdata1.ExpStatus=='Added'"
                                                         :to="{ name: 'update_experience_profile', params: { id: adsdata1.EmployeeID }}">

                                            <span class="badge  rounded-pill badge-light-primary">Experience</span>
                                        </router-link>

                                            <router-link  v-if="hasPermission('HRMS employees_detail  add_documents')"
                                                :to="{ name: 'create_documents', params: { id: adsdata1.EmployeeID }}">

                                                <span v-if="adsdata1.DocStatus==null || adsdata1.DocStatus==''"
                                                      class="badge rounded-pill badge-light-danger">Documents</span>
                                                <span v-else
                                                      class="badge rounded-pill badge-light-primary">Documents</span>
                                            </router-link>
    </div> -->
</td>

                                   
                                        <td class="td-center">
                                            {{ adsdata1.JoiningDate }}<br/>{{ Number(adsdata1.Salary).toLocaleString() }}
                                        </td>
                                        <td style=" text-align: center;">
                                            <div  class="d-flex align-item-center justify-content-center"  v-if="hasPermission('HRMS employees_detail update-Employee-status')">

                                         
                                            <span v-if="adsdata1.Status=='Registered'"
                                                  class="badge  employedetailstatus" style=" background: #32CD32;">{{ adsdata1.Status }}</span>
                                            <span v-else-if="adsdata1.Status=='Suspended'"
                                                  class="badge   employedetailstatus" style=" background: #FFD700;">{{ adsdata1.Status }}</span>
                                            <span v-else-if="adsdata1.Status=='Terminated'"
                                                  class="badge   employedetailstatus"  style=" background: #F00;">{{ adsdata1.Status }}</span>
                                            <span v-else-if="adsdata1.Status=='Resigned'"
                                                  class="badge  bg-secondary employedetailstatus">{{ adsdata1.Status }}</span>
                                            <span v-else
                                                  class="badge badge-glow bg-secondary employedetailstatus">{{ adsdata1.Status }}</span>
                                                </div>
                                        </td>
                                        <td style="vertical-align: middle !important;">
                                            <router-link v-if="hasPermission('HRMS employees_detail view employee profile')" :to="{ name: 'employee_detail', params: { id: adsdata1.EmployeeID }}"
                                                         style="text-decoration:none;">
                                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 0C9.62663 0 7.30655 0.703787 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519921 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9963 8.81855 22.7308 5.76847 20.4812 3.51884C18.2315 1.26922 15.1815 0.00373629 12 0ZM12 22.5882C9.90585 22.5882 7.85872 21.9672 6.1175 20.8038C4.37627 19.6403 3.01915 17.9867 2.21775 16.0519C1.41635 14.1172 1.20667 11.9883 1.61522 9.93434C2.02377 7.88042 3.0322 5.99378 4.51299 4.51299C5.99378 3.03219 7.88042 2.02376 9.93434 1.61521C11.9883 1.20666 14.1172 1.41635 16.0519 2.21775C17.9867 3.01914 19.6403 4.37626 20.8038 6.11749C21.9672 7.85872 22.5882 9.90584 22.5882 12C22.5851 14.8072 21.4686 17.4986 19.4836 19.4836C17.4986 21.4686 14.8072 22.5851 12 22.5882Z" fill="black"/>
  <path d="M19.954 11.7975C19.9307 11.7481 19.366 10.5738 18.1107 9.39687C16.438 7.82875 14.3253 7 12 7C9.67466 7 7.562 7.82875 5.88933 9.39687C4.63399 10.5738 4.06666 11.75 4.04599 11.7975C4.01567 11.8614 4 11.9306 4 12.0006C4 12.0706 4.01567 12.1398 4.04599 12.2037C4.06933 12.2531 4.63399 13.4269 5.88933 14.6038C7.562 16.1713 9.67466 17 12 17C14.3253 17 16.438 16.1713 18.1107 14.6038C19.366 13.4269 19.9307 12.2531 19.954 12.2037C19.9843 12.1398 20 12.0706 20 12.0006C20 11.9306 19.9843 11.8614 19.954 11.7975ZM12 16C9.948 16 8.15533 15.3006 6.67133 13.9219C6.06243 13.3542 5.54439 12.7068 5.13333 12C5.54428 11.2931 6.06233 10.6457 6.67133 10.0781C8.15533 8.69938 9.948 8 12 8C14.052 8 15.8447 8.69938 17.3287 10.0781C17.9388 10.6456 18.4579 11.2929 18.87 12C18.3893 12.8412 16.2953 16 12 16ZM12 9C11.3671 9 10.7484 9.17595 10.2222 9.50559C9.69594 9.83524 9.28578 10.3038 9.04358 10.8519C8.80138 11.4001 8.73801 12.0033 8.86148 12.5853C8.98496 13.1672 9.28973 13.7018 9.73726 14.1213C10.1848 14.5409 10.755 14.8266 11.3757 14.9424C11.9964 15.0581 12.6399 14.9987 13.2246 14.7716C13.8093 14.5446 14.3091 14.1601 14.6607 13.6667C15.0123 13.1734 15.2 12.5933 15.2 12C15.1991 11.2046 14.8617 10.442 14.2618 9.87959C13.6618 9.31716 12.8484 9.00083 12 9ZM12 14C11.5781 14 11.1656 13.8827 10.8148 13.6629C10.464 13.4432 10.1905 13.1308 10.0291 12.7654C9.86759 12.3999 9.82534 11.9978 9.90766 11.6098C9.98997 11.2219 10.1932 10.8655 10.4915 10.5858C10.7899 10.3061 11.17 10.1156 11.5838 10.0384C11.9976 9.96126 12.4266 10.0009 12.8164 10.1522C13.2062 10.3036 13.5394 10.56 13.7738 10.8889C14.0082 11.2178 14.1333 11.6044 14.1333 12C14.1333 12.5304 13.9086 13.0391 13.5085 13.4142C13.1084 13.7893 12.5658 14 12 14Z" fill="black"/>
</svg></router-link>

                                    </td>
                                </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="d-flex align-item-center justify-content-center ">
                                                                    <pagination :data="adsdata" @pagination-change-page="getResults1"></pagination>
                                                                </div>
                     
                    </div>
                </section>
                <!-- users list ends -->
            </div>
        </div>
    </div>
    <!-- END: Content-->
</template>
<script>
import MaskedInput from 'vue-masked-input'
import Multiselect from 'vue-multiselect'
import {overall_location} from "../../helper/apihelper";
import VueApexCharts from 'vue-apexcharts';

export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
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
            series2: [],
            pageN: '',
            page: '',
            limit: 10,
            adsdata: {},
            success: '',
            isDropdownOpen: false,

            gender: 'All',
            status: 'All',
            min_price: '',
            max_price: '',
            cnic: '',
            department: 'All',
            location: 'All',
            designation: 'All',
            emp_status: 'All',

            min_price_s: '',
            max_price_s: '',
            cnic_s: '',
            emp_id_s: '',

            designations: {},
            locations: {},
            departments: {},
            options: [],
            options1: [],
            options2: [],
            options3: ["Suspended", "Terminate", "Resigned", "Registered"],
            options4: ["All", "Probation", "Contract", "Permanent"],
            options5: ["All", "Male", "Female"],

            emp_id: '',

            count_users: {},
            keyword2: '',
        }
    },
    components: {
        MaskedInput,
        Multiselect
    },
    watch: {
        keyword2(after, before) {
            this.getResults1();
        }
    },
    methods: {
        toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
        console.log(this.isDropdownOpen);
    },
        async fetchDepartment() {
            try {
                this.departments = await this.$helpers.checkLocal('department_detail');
                this.options2 = [];
                var $this = this;
                for (var i = 0; i < $this.departments.length; i++) {
                    this.options2.push($this.departments[i].Department);
                }
                // Process the data or perform additional actions here
            } catch (error) {
                console.error(error);
                // Additional error handling if needed
            }
        },
        async fetchDesignation() {
            try {
                this.designations = await this.$helpers.checkLocal('overall_designation');
                this.options = [];
                var $this = this;
                for (var i = 0; i < $this.designations.length; i++) {
                    this.options.push($this.designations[i].designation_name);
                }
                // Process the data or perform additional actions here
            } catch (error) {
                console.error(error);
                // Additional error handling if needed
            }
        },
        async fetchLocations() {
            try {
                this.locations = await this.$helpers.checkLocal('overall_location');
                this.options1 = [];

                var $this = this;
                for (var i = 0; i < $this.locations.length; i++) {
                    this.options1.push($this.locations[i].location_name);
                }
                // Process the data or perform additional actions here
            } catch (error) {
                console.error(error);
                // Additional error handling if needed
            }
        },
        getResults1(page = 1) {
            axios.get('search_Employee_bynamecnic?page=' + page, {params: {keyword1: this.keyword2}})
                .then(response => {
                    this.adsdata = response.data.data;
                    console.log(this.adsdata);
                    this.page = page;
                })
                .catch(error => console.log(error));
            this.pageN = 3;

        },
        getbyfilter(page = 1) {
            this.min_price_s = !this.min_price ? 'All' : this.min_price;
            this.max_price_s = !this.max_price ? 'All' : this.max_price;
            this.cnic_s = !this.cnic ? 'All' : this.cnic;
            this.emp_id_s = !this.emp_id ? 'All' : this.emp_id;
            this.department = !this.department ? 'All' : this.department;
            this.location = !this.location ? 'All' : this.location;
            this.designation = !this.designation ? 'All' : this.designation;
            this.emp_status = !this.emp_status ? 'All' : this.emp_status;
            this.status = !this.status ? 'All' : this.status;

            axios.get('./searchemployee/' + this.department + '/' + this.location + '/' + this.designation + '/' + this.gender + '/' + this.status + '/' + this.min_price_s + '/' + this.max_price_s + '/' + this.cnic_s + '/' + this.emp_id_s + '/' + this.emp_status + '?page=' + page)
                .then(data => {
                    this.adsdata = data.data.data;
                    this.page = page;
                })
                .catch(error => this.error = error.response.data.errors)
            this.keyword2 = '';
            this.pageN = 4;

        },
        async fetchAllFilters() {
            const fetchPromises = [
                this.fetchDepartment(),
                this.fetchDesignation(),
                this.fetchLocations()
            ];

            // Await all the Promises to complete
            await Promise.all(fetchPromises);
        }
    },
    async mounted() {
        await this.fetchAllFilters();
        this.getResults1();
        // this.fetchRoles();

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


       
    }
}

</script>
<style scoped>
.employeedetailcountrow{
    width: 100%;
height: 382px;
flex-shrink: 0;
    border-radius: 26px;
border: 1px solid #E1E1E6;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
}
.employedetailcountcard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 150px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 14px;
    background: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}
.employedetailtoalemployee{
   
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.16px;
}


.employedetailcount{
    color: #000;
text-align: center;
font-family: Poppins;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.28px;
}
.employedetailscards{
    margin-top: 20px;
    border-radius: 32px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}


.mutiselect{
    border-radius: var(--8, 8px);
border: 1px solid #7B7B7B;
background: #FFF;
}

.nanobutton{
    border-radius: 6px;
background: #1E90FF;
color: white;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.edit-profile-btn {
    cursor: pointer;
    color: #007bff;
    /* text-decoration: underline; */
}
.employedetailstatus{
    width: 120px;
height: 32px;
text-align: center;
    border-radius: 6px;
/* background: #32CD32; */
display: flex;
    align-items: center;
    justify-content: center;
}
#dropdown-left {
        background-color: #FFE4C4; /* Your custom background color */
      }

    
</style>