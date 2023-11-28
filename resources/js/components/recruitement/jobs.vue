<template>
    <div>
        <div class="app-content content ">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper container-xxl p-0">
                <div class="content-header row">
                </div>
                <div class="content-body">
                    <div class="content-header row">
                        <div class="breadcrumb-wrapper">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/recruitment/recDashboard" style="text-decoration: none;">Dashboard</router-link>
                                </li>
                                <li class="breadcrumb-item active">
                                    Job openings
                                </li>
                            </ol>
                        </div>
                    </div>
                    <!-- <h3>Your dream jobs here</h3> -->
                    <div class="row">
                        <div class="forjobs">
                            <div class="jobs col-md-7 ">
                            <div class=" col-md-4">
                            <div class="card job-card">
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    
                                    
                                    <div class="avatar bg-light-success p-50">
                                            <span class="avatar-content">
                                                <i class="fa-solid fa-users"></i>
                                            </span>
                                            </div>
                                    <div class="okay">
                                        <h3 class="fw-bolder mb-75">{{ jobscount.totalJobs }}</h3>
                                        <span class="jobs-text">Total Jobs </span>

                                    </div>
                                    
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-md-4 mx-3">
                            <div class="card job-card">
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    
                                    
                                    <div class="avatar bg-light-primary p-50">
                                            <span class="avatar-content">
                                                <i class="fa-solid fa-user-shield"></i>
                                            </span>
                                    </div>
                                    <div class="okay">
                                        <h3 class="fw-bolder mb-75">{{ jobscount.runningJobs }}</h3>
                                        <span class="">Open Jobs </span>

                                    </div>
                                    
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-md-4 mx-3">
                            <div class="card job-card">
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    
                                    
                                    <div class="avatar bg-light-primary p-50">
                                            <span class="avatar-content">
                                                <i class="fa-solid fa-file-signature"></i>
                                            </span>
                                    </div>
                                    <div class="okay">
                                        <h3 class="fw-bolder mb-75">{{ jobscount.closedJobs }}</h3>
                                        <span class="">Closed Jobs </span>

                                    </div>
                                    
                                    
                                </div>
                                
                            </div>
                        </div>
                        </div>
                       
                        <div class=" col-md-2">
                            <div class="card job-card">
                                <div class="row d-flex align-items-center">
                                    <div class="col-md-3 mx-2">
                                        <div class="">
                                            <img src="public/images/profile_images/pro.png" class=" image" alt="Image" style="max-width: 100%; height: auto;"/>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <button v-if="hasPermission('Recruitment Post job')"  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#postjob">
                                                +Open Position
                                            </button>
                                            <button v-else  type="button" class="btn btn-danger" >
                                                + Open Position
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    
                       
                    </div>
                    
                    <div class="sb">
                        <div class="col-md-3 my-3">
                                    <label class="form-label ">Search Jobs</label>
                                    <multiselect id="UserRole" v-model="selectedPostTitle"
                                                 :options="postTitles" :show-labels="false"
                                                 placeholder="All Jobs"
                                                 style="margin-right: 10px; font-size: 15px;">
                                    </multiselect>
                                </div> 
                                <div class="col-md-3 my-3">
                                    <button class="btn btn-primary bt"
                                            style="height: 40px !important; margin-top: 26px; width:100%"
                                            @click="searchJobs()">Search
                                    </button>   
                                </div>
                               
                    </div>
                    
                    <!-- Role cards -->
                    <div class="row ">
                        <div class="col-xl-4 col-lg-6 col-md-6 " v-for='(jobs1,index) in jobs'>
                            <router-link  :to="{name: 'recruitment_job_detail', params:{id: jobs1.JobID}}" class="card job-card " :style="getJobCardStyle(index)">

<div class="card-body job-card">
                                    <div class="d-flex justify-content-between">
                                        <span class="bold-text">VACANCIES: {{ jobs1.JobNumber }}</span>


                                    </div>
                                    <div class="d-flex justify-content-between align-items-end mt-1 pt-25">
                                        <div class="role-heading">
                                            <div :to="{name: 'recruitment_job_detail', params:{id: jobs1.JobID}}"  style="text-decoration:none; color:black; text-transform: capitalize;">
                                                <h4 class="fw-bolder" title="View details" style="cursor:pointer;">{{jobs1.PostTitle}}</h4>
                                            </div>
                                            <small class="fw-bolder" style="color: white">
                                                <cite title="View applications"> Last date to apply is: <label>{{jobs1.EndDate}}</label></cite>
                                            </small>
                                        </div>

                                    <div> 
                                        <button type="button" class="custom-btn"  @click="fetch_job_detail(jobs1.JobID)"  data-bs-toggle="modal" data-bs-target="#editjob">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    </div>
                                        <!--  data-bs-toggle="modal" data-bs-target="#deletejob"-->
                                    </div>
                                </div>
                            </router-link>
                        </div
                        >
                        
                    </div>
                </div>
                <!-- Post job modal -->
                <div class="modal fade" id="postjob" tabindex="-1" aria-labelledby="addNewAddressTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header bg-transparent">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body pb-5 px-sm-4 mx-50">
                                <h1 class="address-title text-center mb-1" id="addNewAddressTitle">Open a New Position</h1>
                                <p class="address-subtitle text-center mb-2 pb-75">Input Information</p>
                                <form id="addNewAddressForm" style="text-align:left;" class="row gy-1 gx-2" onsubmit="return false">
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Posting title</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <input type="text" v-model="posting_title" class="form-control" placeholder="Designation" />
                                        <span style="color: #DB4437; font-size: 11px;" v-if="posting_title==''">{{title_error}}</span>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Department</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>


                                        <!-- <select v-model="job_dept" class="select2 form-select">
                                            <option value="">Select</option>
                                            <option v-for='departments3 in departments' :value='departments3.department_name'>{{departments3.department_name}}</option>
                                        </select> -->
                                        <multiselect style="margin-right: 10px;" :show-labels="false"
                                        v-model="job_dept" :options="options1">
                                          </multiselect>
                                        <span style="color: #DB4437; font-size: 11px;" v-if="job_dept==''">{{dept_error}}</span>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Number of posts</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <input type="number" v-model="no_post" class="form-control" placeholder="Number of posts" />
                                        <span style="color: #DB4437; font-size: 11px;" v-if="no_post==''">{{rec_error}}</span>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Required experiance</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <!-- <select id="modalAddressCountry" v-model="experiance" class="select2 form-select">
                                            <option value="">Select</option>
                                            <option value="None">None</option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="0-1 year">0-1 year</option>
                                            <option value="1-3 years">1-3 years</option>
                                            <option value="4-5 years">4-5 years</option>
                                            <option value="5+ years">5+ years</option>
                                        </select> -->
                                        <multiselect style="margin-right: 10px;"

                                                         v-model="experiance"
                                                         :show-labels="false"
                                                         placeholder="Select"
                                                         :options="options2">
                                            </multiselect>
                                        <span style="color: #DB4437; font-size: 11px;" v-if="experiance==''">{{exp_error}}</span>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Date opened</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <input class="form-control date-mask" v-model="date_opened" placeholder="October 14, 2020" tabindex="0" type="date">
                                        <span style="color: #DB4437; font-size: 11px;" v-if="date_opened==''">{{date_error}}</span>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Target date</label>
                                        <input class="form-control flatpickr-human-friendly input active" v-model="target_date" placeholder="October 14, 2020" tabindex="0" type="date">
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Educational Requirement</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <vue-editor style="height:200px;" v-model="educational_requirements" placeholder="Add Educational Requirements"></vue-editor>
                                    </div>
                                    <div style="height:80px;"></div>
                                    <span style="color: #DB4437; font-size: 11px;" v-if="educational_requirements==''">{{edu_error}}</span>
                                    <div class="col-12 col-md-12">
                                        <label class="form-label">Skill set</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <vue-editor style="height:200px;" v-model="skill_set" placeholder="Add skillset"></vue-editor>
                                    </div>
                                    <div style="height:80px;"></div>
                                    <span style="color: #DB4437; font-size: 11px;" v-if="skill_set==''">{{skill_error}}</span>
                                    <div class="col-12 col-md-12">
                                        <label class="form-label">Duties & Responsibilities</label>
                                        <vue-editor style="height:200px;" v-model="duties" placeholder="Duties & Responsibilities"></vue-editor>
                                    </div>
                                    <div style="height:80px;"></div>
                                    <div class="col-12">
                                        <label class="form-label">Office address</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <input type="text" v-model="address" class="form-control" placeholder="Street, Town, City" />
                                        <span style="color: #DB4437; font-size: 11px;" v-if="address==''">{{address_error}}</span>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Upload image</label>
                                        <input type="file" accept="image/*" id="formfile" class="form-control" />
                                        <span style="color: #DB4437; font-size: 11px;"></span>
                                    </div>
                                    <div class="col-12 text-center">
                                        <button :disabled="disabled" @click="delay()" type="submit" class="btn btn-primary me-1 mt-2" data-bs-dismiss="modal" aria-label="Close">Post job</button>
                                        <button type="reset" class="btn btn-outline-secondary mt-2" data-bs-dismiss="modal" aria-label="Close">
                                            Discard
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- / Post job modal -->
                <!-- Edit job modal -->
                <div class="modal fade" id="editjob" tabindex="-1" aria-labelledby="addNewAddressTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header bg-transparent">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body pb-5 px-sm-4 mx-50">
                                <h1 class="address-title text-center mb-1" id="addNewAddressTitle">Edit job</h1>
                                <p class="address-subtitle text-center mb-2 pb-75">Job Details</p>
                                <form id="addNewAddressForm" style="text-align:left;" class="row gy-1 gx-2" onsubmit="return false">
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Posting title</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <input type="text" v-model="ed_post_title" class="form-control" placeholder="Posting title" />
                                        <span style="color: #DB4437; font-size:11px;" v-if="ed_post_title==''">{{ed_title_error}}</span>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Department</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <!-- <select id="modalAddressCountry" v-model="ed_job_dept" class="select2 form-select">
                                            <option value="">Select</option>
                                            <option v-for='departments3 in departments' :value='departments3.department_name'>{{ departments3.department_name }}</option>
                                        </select> -->
                                        <multiselect style="margin-right: 10px;" :show-labels="false"  id="modalAddressCountry" placeholder="Select"
                                        v-model="ed_job_dept" :options="options1">
                                          </multiselect>
                                        <span style="color: #DB4437; font-size: 11px;" v-if="ed_job_dept==''">{{ed_dept_error}}</span>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Number of posts</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <input type="number" v-model="ed_job_number" id="title_id" class="form-control" placeholder="Number of Posts" />
                                        <span style="color: #DB4437; font-size: 11px;" v-if="ed_job_number==''">{{ed_number_error}}</span>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Required experiance</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <!-- <select id="modalAddressCountry" v-model="ed_experiance" class="select2 form-select">
                                            <option value="">Select</option>
                                            <option value="None">None</option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="0-1 year">0-1 year</option>
                                            <option value="1-3 years">1-3 years</option>
                                            <option value="4-5 years">4-5 years</option>
                                            <option value="5+ years">5+ years</option>
                                        </select> -->
                                        <multiselect style="margin-right: 10px;"

                                                         v-model="ed_experiance"
                                                         :show-labels="false"
                                                         placeholder="Select"
                                                         :options="options2">
                                            </multiselect>
                                        <span style="color: #DB4437; font-size: 11px;" v-if="ed_experiance==''">{{ed_exp_error}}</span>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Date opened</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <input class="form-control date-mask" v-model="ed_date_opened" placeholder="October 14, 2020" tabindex="0" type="date">
                                        <span style="color: #DB4437; font-size: 11px;" v-if="ed_date_opened==''">{{ed_date_error}}</span>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Target date</label>
                                        <input class="form-control flatpickr-human-friendly input active" v-model="ed_target_date" placeholder="October 14, 2020" tabindex="0" type="date">
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Educational Requirement</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <vue-editor style="height:200px;" v-model="ed_educational_requirements" placeholder="Add Educational Requirements"></vue-editor>
                                    </div>
                                    <div style="height:80px;"></div>
                                    <span style="color: #DB4437; font-size: 11px;" v-if="ed_educational_requirements==''">{{ed_edu_error}}</span>
                                    <div class="col-12 col-md-12">
                                        <label class="form-label">Skill set</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <vue-editor style="height:200px;" v-model="ed_skill_set" placeholder="Add skillset"></vue-editor>
                                    </div>
                                    <div style="height:80px;"></div>
                                    <span style="color: #DB4437; font-size: 11px;" v-if="ed_skill_set==''">{{ed_skill_error}}</span>
                                    <div class="col-12 col-md-12">
                                        <label class="form-label">Duties & Responsibilities</label>
                                        <vue-editor style="height:200px;" v-model="ed_duties" placeholder="Duties & Responsibilities"></vue-editor>
                                    </div>
                                    <div style="height:80px;"></div>
                                    <div class="col-12">
                                        <label class="form-label">Office address</label>
                                        <span style="color: #DB4437; font-size: 11px;">*</span>
                                        <input type="text" id="modalAddressAddress1" v-model="ed_address" class="form-control" placeholder="Street, Town, City" />
                                        <span style="color: #DB4437; font-size: 11px;" v-if="ed_address==''">{{ed_address_error}}</span>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Image</label>
                                        <input type="file" id="formfile" class="form-control" />
                                        <span style="color: #DB4437; font-size: 11px;"></span>
                                    </div>
                                    <div class="col-12 text-center">
                                        <button type="submit" :disabled="disabled1" @click="delay1()" class="btn btn-primary me-1 mt-2">Update job</button>
                                        <button type="reset" class="btn btn-outline-secondary mt-2" data-bs-dismiss="modal" aria-label="Close">
                                            Cancle
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- / Edit job modal -->
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import Multiselect from 'vue-multiselect'
    // import { VueEditor } from "vue2-editor";
    export default {
        components: {
Multiselect
},
        data() {
            return {
                content: '',
                id2: '',
                //Arrays
                departments: {},
                jobs: {},
                selectedPostTitle: '',


  postTitles:[],
      searchResults: [],
                jobscount:{},
                candidates: {},
                selected: [],
                options: [{ text: 'Disable', value: 'red' }],
                options1:[],
                options2:["None","Fresher","0-1 year","1-3 years","4-5 years","5+ years"],
                options3:[],
                errors: [],
                dept: {},
                //Add job
                job_dept: '',
                no_post: '',
                posting_title: [],
                experiance: '',
                date_opened: '',
                target_date: '',
                educational_requirements: '',
                skill_set: '',
                duties: '',
                address: '',
                //Add job errors
                rec_error: '',
                dept_error: '',
                title_error: '',
                exp_error: '',
                date_error: '',
                edu_error: '',
                skill_error: '',
                address_error: '',
                //Edit job models
                ed_post_title: '',
                ed_job_dept: '',
                ed_job_number: '',
                ed_experiance: '',
                ed_date_opened: '',
                ed_target_date: '',
                ed_educational_requirements: '',
                ed_skill_set: '',
                ed_duties: '',
                ed_address: '',
                //Edit job errors
                ed_title_error: '',
                ed_dept_error: '',
                ed_number_error:'',
                ed_exp_error: '',
                ed_date_error: '',
                ed_edu_error: '',
                ed_skill_error: '',
                ed_address_error: '',

                disabled: false,
                timeout: null,

                disabled1: false,
                timeout1: null,
                jobColors: ['#63ACE5', '#B3CDE0  ', '#ADCBE3  ', '#83d0c9  ', '#d0e1f9    '],


            }
        },
        methods: {
            delay1() {
                this.disabled1 = true
                this.timeout1 = setTimeout(() => {
                    this.disabled1 = false
                }, 5000)
                this.update_post()
            },
            delay() {
                this.disabled = true
                this.timeout = setTimeout(() => {
                    this.disabled = false
                }, 5000)
                this.submit_new_post()
            },
            fetch_job_detail(id) {
                this.id1 = id;
                axios.get('fetch_jobs/' + this.id1)
                    .then(responce => {
                        this.id2 = responce.data[0].JobID;
                        this.ed_job_number = responce.data[0].JobNumber;
                        this.ed_post_title = responce.data[0].PostTitle;
                        this.ed_educational_requirements = responce.data[0].Education;
                        this.ed_skill_set = responce.data[0].Skill;
                        this.ed_duties = responce.data[0].Duties;
                        this.ed_date_opened = responce.data[0].StartDate;
                        this.ed_job_dept = responce.data[0].Department;
                        this.ed_experiance = responce.data[0].Experience;
                        this.ed_target_date = responce.data[0].EndDate;
                        this.ed_address = responce.data[0].Address;
                    })
                    .catch(error => { });
            },
            submit_new_post() {
                if (this.no_post == '' || this.job_dept == '' || this.posting_title == ''
                    || this.date_opened == '' || this.educational_requirements == '' || this.skill_set == '' ||
                    this.address == '') {
                    this.$toastr.e("Please fill required fields!", "Caution!");
                    if (this.no_post == '') {
                        this.rec_error = 'Please enter number of post';
                    }
                    else {
                        this.rec_error = '';
                    }
                    if (this.job_dept == '') {
                        this.dept_error = 'Please select Department.';
                    }
                    else {
                        this.dept_error = '';
                    }
                    if (this.posting_title == '') {
                        this.title_error = 'Please enter posting title.';
                    }
                    else {
                        this.title_error = '';
                        $(this.posting_title).toggleClass("form-control");
                    }
                    if (this.experiance == '') {
                        this.exp_error = 'Please enter experiance informations.';
                    }
                    else {
                        this.exp_error = '';
                    }
                    if (this.date_opened == '') {
                        this.date_error = 'Date opened is required.';
                    }
                    else {
                        this.date_error = '';
                    }
                    if (this.educational_requirements == '') {
                        this.edu_error = 'Please enter educational requirements.';
                    }
                    else {
                        this.edu_error = '';
                    }
                    if (this.skill_set == '') {
                        this.skill_error = 'Skill set is required.';
                    }
                    else {
                        this.skill_error = '';
                    }
                    if (this.address == '') {
                        this.address_error = 'Office Address is required.';
                    }
                    else {
                        this.address_error = '';
                    }
                }
                else {
                    this.rec_error = '';
                    this.dept_error = '';
                    this.title_error = '';
                    this.exp_error = '';
                    this.date_error = '';
                    this.edu_error = '';
                    this.edu_error = '';
                    this.skill_error = '';
                    this.address_error = '';

                    axios.post('./jobs', {
                        job_rec: this.no_post,
                        job_dept: this.job_dept,
                        posting_title: this.posting_title,
                        experiance: this.experiance,
                        date_opened: this.date_opened,
                        target_date: this.target_date,
                        educational_requirements: this.educational_requirements,
                        skill_set: this.skill_set,
                        duties: this.duties,
                        address: this.address,
                    })
                        .then(data => {
                            if (data.data == 'Job Created Successfully!') {
                                this.$toastr.s("Job updated successfully!", "Congratulations!");
                                this.no_post = '';
                                this.job_dept = '';
                                this.posting_title = '';
                                this.experiance = '';
                                this.date_opened = '';
                                this.target_date = '';
                                this.educational_requirements = '';
                                this.skill_set = '';
                                this.duties = '';
                                this.address = '';

                               this.job_detail();
                               this.jobs_count();
                            }
                        })
                }
            },
            getJobCardStyle(index) {
      // Repeat colors in a cyclic manner
      const colorIndex = index % this.jobColors.length;
      const color = this.jobColors[colorIndex];
      return {
        backgroundColor: color,
      };
    },
            job_detail() {
            axios.get('job_detail2')
                .then(data => {
                this.jobs = data.data
                this.postTitles=this.jobs.map(job=>job.PostTitle )
                
                
                
                })

                .catch(error => { });
            },
            jobs_count() {
                axios.get('./jobscount')
                .then(data => this.jobscount = data.data)
                .catch(error => { });
            },

            async searchJobs() {
      if (!this.selectedPostTitle) {
        alert('Please select a PostTitle before searching.');
        return;
      }
console.log(this.selectedPostTitle)
      try {
        
        const response = await axios.get(`./search-jobs/${this.selectedPostTitle}`);
        this.jobs = response.data;
      } catch (error) {
        console.error('Error searching jobs:', error);
        // Handle error as needed
      }
    },
            update_post() {
                if (this.ed_post_title == '' || this.ed_job_dept == '0' || this.ed_job_number == '' || this.ed_experiance == '' || this.ed_date_opened == '' || this.ed_educational_requirements == '' || this.ed_skill_set == '' || this.ed_address == '') {
                    this.$toastr.e("Please fill required fields!", "Caution!");

                    if (this.ed_post_title == '') {
                        this.ed_title_error = 'Please enter post title';
                    }
                    else {
                        this.ed_title_error = '';
                    }
                    if (this.ed_job_dept == '') {
                        this.ed_dept_error = 'Please select department.';
                    }
                    else {
                        this.ed_dept_error = '';
                    }
                    if (this.ed_job_number == '') {
                        this.ed_number_error = 'Please enter number of post';
                    }
                    else {
                        this.ed_number_error = '';
                    }
                    if (this.ed_experiance == '') {
                        this.ed_exp_error = 'Please select experiance informations';
                    }
                    else {
                        this.ed_exp_error = '';
                    }
                    if (this.ed_date_opened == '') {
                        this.ed_date_error = 'Date opened is required.';
                    }
                    else {
                        this.ed_date_error = '';
                    }
                    if (this.ed_educational_requirements == '') {
                        this.ed_edu_error = 'Please enter educational requirements.';
                    }
                    else {
                        this.ed_edu_error = '';
                    }
                    if (this.ed_skill_set == '') {
                        this.ed_skill_error = 'Skill set is required.';
                    }
                    else {
                        this.ed_skill_error = '';
                    }
                    if (this.ed_address == '') {
                        this.ed_address_error = 'Office Address is required.';
                    }
                    else {
                        this.ed_address_error = '';
                    }
                }
                else {
                    this.ed_title_error = '';
                    this.ed_dept_error = '';
                    this.ed_number_error = '';
                    this.ed_exp_error = '';
                    this.ed_date_error = '';
                    this.ed_edu_error = '';
                    this.ed_skill_error = '';
                    this.ed_address_error = '';

                    axios.post('./update_job', {
                        myid: this.id2,
                        ed_job_number: this.ed_job_number,
                        ed_post_title: this.ed_post_title,
                        ed_job_dept: this.ed_job_dept,
                        ed_date_opened: this.ed_date_opened,
                        ed_experiance: this.ed_experiance,
                        ed_target_date: this.ed_target_date,
                        ed_address: this.ed_address,
                        ed_educational_requirements: this.ed_educational_requirements,
                        ed_skill_set: this.ed_skill_set,
                        ed_duties: this.ed_duties,
                    })
                        .then(data => {
                            if (data.data == 'Job Editted Successfully!') {
                                this.$toastr.s("Job updated successfully!", "Congratulations!");
                                this.ed_job_number = '';
                                this.ed_post_title = '';
                                this.ed_job_dept = '';
                                this.ed_date_opened = '';
                                this.ed_experiance = '';
                                this.ed_target_date = '';
                                this.ed_address = '';
                                this.ed_educational_requirements = '';
                                this.ed_skill_set = '';
                                this.ed_duties = '';
                                axios.get('job_detail2')
                                    .then(data => this.jobs = data.data)
                                    .catch(error => { });
                            }
                        })
                }
            }
        },

        mounted() {

            this.jobs_count();

            axios.get('department_detail2')
                .then(data => {
                    this.departments = data.data;
                    this.options1 = [];
                 var $this = this;
 for (var i = 0; i < $this.departments.length; i++) {
 this.options1.push($this.departments[i].department_name);
 
  }
                })
                .catch(error => { });

           
                this.job_detail();

        },

    }
</script>
<style>

.image{
    width: 60px;
    height: 60px;
    margin-top: 5px;
}
.sb{
    /* margin-bottom: 10px; */
    display: flex;
    flex-direction: row;
    width: 700px;
}
.bt{
    /* width: 0px; */
}
.jobs{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.forjobs{
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
}
.job-card{
    /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);  */
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 30px;
    text-decoration: none; /* This will override any underline styling */

    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
}
.job-card:hover {
  background-color: #e6e6ea   ; /* Replace with the color you want on hover */
}
.height{
    height: 75px;
}
.custom-btn {
  background-color: #011f4b ;
  color: #fff;
  border:none;
  transition: background-color 0.3s;
  z-index: 1; /* Adjust the value as needed */
  position: relative;


}
.jobs-text{

    color: #343434;
font-family: Poppins    ;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.16px;
}
.custom-btn:hover {
  background-color: #CCCCCC  ; /* Replace with the color you want on hover */
}
.custom-btn:hover {
  background-color: #CCCCCC  ; /* Replace with the color you want on hover */
}
.bold-text {
    font-weight: bold;
  }
 
</style>