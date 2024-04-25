<template>
    <div >
        <!-- BEGIN: Content-->
        <div class="app-content content ">
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>
            <div class="content-wrapper container-xxl p-0">
                <div class="content-header row">
                    <div class="breadcrumb-wrapper">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/hr/dashboard" style="text-decoration: none;">Dashboard</router-link>
                            </li>
                            <li class="breadcrumb-item active">
                                Warnings Detail
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="content-body">
                
                    <div class="emp-attendance-my-4">
                    <div class="attendenceSession">
                        <div class="total-war">
                            <div class="total-text">Total WAR.</div>
                           <div class="total-no">{{ count_users.total }}</div>
                           
                        </div>
                    </div>
                    <div class="attendenceSession">
                        <div class="First-war">
                            <div class="First-text">First Waring</div>
                           <div class="First-no">{{ count_users.first }}</div>
                           
                        </div>
                    </div>
                    <div class="attendenceSession">
                        <div class="Second-war">
                            <div class="Second-text">Second Waring</div>
                           <div class="Second-no">{{ count_users.second }}</div>
                           
                        </div>
                    </div>
                    <div class="attendenceSession">
                        <div class="Terminate-war">
                            <div class="Terminate-text">Terminate</div>
                           <div class="Terminate-no">{{ count_users.terminate }}</div>
                           
                        </div>
                    </div>
                    </div>
     
   
                    
                   
                    

                    <!-- users list start -->
                    <section class="app-user-list employedetailscards ">
                     
                        <div clas=" card px-3 d-flex align item-center justify-content-center " >
                            <div class="card-body border-bottom ">
                                <h4 class="card-title my-3 py-3">Search & Filter</h4>
                                <div class="row">
                                    <div class="col-md-3 user_role">
                                        <label class="form-label" for="UserRole"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 3H5C3.586 3 2.879 3 2.44 3.412C2 3.824 2 4.488 2 5.815V6.505C2 7.542 2 8.061 2.26 8.491C2.52 8.921 2.993 9.189 3.942 9.723L6.855 11.363C7.491 11.721 7.81 11.9 8.038 12.098C8.512 12.509 8.804 12.993 8.936 13.588C9 13.872 9 14.206 9 14.873V17.543C9 18.452 9 18.907 9.252 19.261C9.504 19.616 9.952 19.791 10.846 20.141C12.725 20.875 13.664 21.242 14.332 20.824C15 20.407 15 19.452 15 17.542V14.872C15 14.206 15 13.872 15.064 13.587C15.1896 13.0042 15.5059 12.4798 15.963 12.097C16.19 11.9 16.509 11.721 17.145 11.362L20.058 9.722C21.006 9.189 21.481 8.922 21.74 8.492C22 8.062 22 7.542 22 6.504V5.814C22 4.488 22 3.824 21.56 3.412C21.122 3 20.415 3 19 3Z" stroke="#263238" stroke-width="1.5"/>
</svg>Designation</label>
                                        <multiselect class="mutiselect" :show-labels="false" 
                                                     id="UserRole" placeholder="All Designations"
                                                     v-model="designation" :options="options">
                                        </multiselect>
                                    </div>
                                    <div class="col-md-3 user_plan">
                                        <label class="form-label" for="UserPlan">Location</label>
                                        <multiselect class="mutiselect" :show-labels="false" 
                                                     id="UserPlan" placeholder="All Locations"
                                                     v-model="location" :options="options1">
                                        </multiselect>
                                    </div>
                                    <div class="col-md-3 user_status">
                                        <label class="form-label" for="FilterTransaction">Department</label>
                                        <multiselect class="mutiselect" :show-labels="false" 
                                                     id="FilterTransaction" placeholder="All Departments"
                                                     v-model="department" :options="options2">
                                        </multiselect>
                                    </div>
                                    <div class="col-md-3 user_status">
                                        <button @click="getbyfilter()"
                                                style="margin-top:20px;background:#c1c1c1;width:100%;height: 40px !important;margin-bottom:20px;width: 60% !important;"
                                                class="btn btn-common">Search
                                        </button>
                                        <label style="color: #d93025"
                                               v-if="designation=='' && location=='' && department==''">{{ e_search }}</label>
                                    </div>
                                </div>
                            </div>
                           
                                    <div class="dt-action-buttons d-flex align-items-center justify-content-between py-3">
                                        <div class="col-md-5">
                                           
                                            
                                                    <input  autocomplete="off" id="keyword1" type="text" name="keyword1"
                                                           v-model="keyword1" class="form-control mutiselect" 
                                                           placeholder="Search By Name"/>
                                             
                                            </div>
                                       
                                        <div class="col-md-3">
                                            <router-link  v-if="hasPermission('HRMS warning_detail create_warning')" to="/hr/create_warning"
                                                         class="dt-button add-new btn nanobutton" tabindex="0"
                                                         type="button"><span>Issue Warning Letter</span></router-link>
                                                         <router-link  v-else
                                                         class="dt-button add-new btn btn-danger" tabindex="0"
                                                         type="button"><span>Issue Warning Letter</span></router-link>
                                        </div>
                                    </div>
                               
                            <div class="Warning-Session" >
                                <table >
                                        <tbody>
                                        <tr>
                                        <th >Emp.<br/>Code</th>
                                        <th >Employe Name</th>
                                        <th >Location</th>
                                        <th >Warning Date</th>
                                        <th >Status</th>
                                        <th >Actions</th>
                                    </tr>
                                    <tr  v-for="adsdata1 in adsdata.data">
                                        <td class="td-center">{{ adsdata1.EmployeeCode }}</td>
                                        <td class="td-left">
                                            <div class="d-flex justify-content-left align-items-center">
                                                <div class="d-flex flex-column"><a
                                                    class="user_name text-truncate text-body"><span
                                                    class="fw-bolder">{{ adsdata1.Name }}</span></a><small
                                                    class="emp_post text-muted">{{ adsdata1.Department }} -
                                                    {{ adsdata1.Designation }}</small></div>
                                            </div>
                                        </td>
                                        <td class="td-center">{{ adsdata1.PostingCity }}</td>
                                        <td class="td-center">{{ adsdata1.DateIssued }}</td>
                                        <td class="td-center">
                                            <span v-if="adsdata1.WarningType=='First'"
                                                  class="badge bg-light-primary">{{ adsdata1.WarningType }}</span>
                                            <span v-else-if="adsdata1.WarningType=='Second'"
                                                  class="badge bg-light-warning">{{ adsdata1.WarningType }}</span>
                                            <span v-else class="badge bg-light-danger">{{ adsdata1.WarningType }}</span>
                                        </td>
                                        <td class="td-center">
                                            <div  class="btn-group">
                                                <router-link v-if="hasPermission('HRMS warning_detail actions')"
                                                    :to="{ name: 'warning_view', params: { id: adsdata1.LetterID }}"
                                                    class="me-25">
                                                    <i class="fa-solid fa-eye"></i>
                                                </router-link>
                                                <router-link v-if="hasPermission('HRMS warning_detail actions')"
                                                    class="me-25">
                                                 <i class="fa-solid fa-eye" style="color: red;"></i>

                                                </router-link>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style="text-align:center;padding-top:20px">
                                <pagination :data="adsdata" @pagination-change-page="getResults"></pagination>
                            </div>
                        </div>
                    </section> 
                    <!-- users list ends -->
                </div>
            </div>
        </div>
        <!-- END: Content-->
    </div>
</template>

<script>

export default {
    data() {
        return {
            adsdata: {},
            success: '',

            keyword1: '',
            options: [],
            options1: [],
            options2: [],
            department: '',
            location: '',
            designation: '',
            designations: {},
            departments: {},
            locations: {},
            id: '',
            e_search: '',
            email: '',
            count_users: {},
        }
    },
    methods: {

     

        async fetchDepartment() {
            try {
                this.departments =  await this.$helpers.checkLocal('department_detail');
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


        getbyfilter(page = 1) {
            this.keyword1 = '';
            if (this.location == '' || this.location == null) {
                this.location1 = 'All';
            } else {
                this.location1 = this.location;
            }
            if (this.designation == '' || this.designation == null) {
                this.designation1 = 'All';
            } else {
                this.designation1 = this.designation;
            }
            if (this.department == '' || this.department == null) {
                this.department1 = 'All';
            } else {
                this.department1 = this.department;
            }
            axios.get('./filter_warnings/' + this.location1 + '/' + this.designation1 + '/' + this.department1 + '/?page=' + page)
                .then(data => {
                    this.adsdata = {};
                    this.adsdata = data.data.data;
                })
                .catch(error => {
                    this.$toastr.e('error Occur while getting warnings');
                });
        },
        getResults(page = 1) {
            axios.get('./search_warnings/?page=' + page, {params: {keyword1: this.keyword1}})
                .then(response => {
                    this.adsdata = response.data.data;
                    this.location1 = 'All';
                    this.designation1 = 'All';
                    this.department1 = 'All';
                })
                .catch(error => {
                    this.$toastr.e('error Occur while getting  employee warning');
                });
        },
    },
    watch: {
        keyword1(after, before) {
            this.getResults();
        }
    },
    mounted() {
        this.getResults();
        this.fetchDepartment();
       
        this.fetchDesignation();
        this.fetchLocations();

        axios.get('./count_warnings')
            .then(response => {
                console.log(response.data.data);
                this.count_users = response.data.data
            
            })
            .catch(error => {
                this.$toastr.e('error Occur while getting count warning');
            });

    }
}

</script>
<style>
.Waring-row {
    margin-bottom: 20px;
    max-width: 100%;
    max-height: 400px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    padding: 10px;
}
.emp-attendance-my-4{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1.5rem ;
    margin-bottom: 1.5rem;
    border-radius: 10px;
    background: #FFF;
    padding: 10px;
    border-radius: 20px;
    
     
}
.attendenceSession {
    width: 180px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 28px;
    background: #F9F9F9;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.total-war {
    max-width: 120%;
    max-height: 120px;
    flex-shrink: 0;
    border-radius: 14px;
    background: #F9F9F9;
    /* box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15); */
}
.total-text {
    color: #000;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
}
.total-no {
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
.First-text {
    color: #1FC048;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
}
.First-no{
    
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
.Second-text {
    color: #0070F2;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
}
.Second-no{
    
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
.Terminate-text {
    color: #DC0000;
    text-align: center;
    font-family: 'Poppins',sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
}
.Terminate-no{
    
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
/* table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
} */

th, td {
    /* border: 1px solid #dddddd; */
    /* text-align: left; */
    /* padding: 20px; */

}

td{
     /* color: #000000;
     font-family: "Poppins",sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0.01em;
text-align: left; */

}
th {
    /* background-color:  #E9EAEF; */
    /* border-radius: 20px; */
}
.Filters{
    width:100%;
    height:200px;
    background-color:white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1.5rem ;
    margin-bottom: 1.5rem;
    border-radius: 20px;
}
.Department-filter{
    width: 204px;
height: 72px;
 /* position:absolute;
top: 587px;
left: 359px; */
margin-top:20px;
border-radius: 8px;
border: 1px;
background:rgb(255, 255, 255); 
border: Mixed solid #7B7B7B;
}
.Departments{
    width: 85px;
height: 21px;
/* position:absolute; */
/* margin-top: 589px; */
margin-left: 60px;

}
.All{
    width: 204px;
height: 40px;
/* position:absolute;
top: 619px;
left: 631px; */
border-radius: 8px;
border: 1px;
background:rgb(255, 255, 255);
border: 1px solid #7B7B7B

}
.text{
    width: 18px;
height: 21px;
/* position:absolute; */
margin-top: -10px;
margin-left: 20px;
font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
/* background: #7B7B7B; */


}
.Seach-Bar{
    width: 404px;
height: 40px;
position:absolute;
margin-top: 139px;
margin-right: 750px;
border-radius: 8px;
border: 1px;
background:rgb(255, 255, 255);
border: 1px solid #7B7B7B
}
.text-seach{
    width: 354px;
height: 21px;
/* position:absolute; */
margin-top: 10px;
margin-left: 10px;
font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;

}
.add-emp{
    position: absolute;
width: 200px;
height: 42px;
margin-left: 380px;
margin-top: 136px;
background:  #1E90FF;
border-radius: 6px;

}
.add-emp-text{
    /* Leaves */

position: absolute;
/* width: 57px; */
height: 24px;
left: 70px;
top: 10px;

font-family: 'Poppins',sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */
text-align: center;
letter-spacing: 0.01em;

color: #FFFFFF;
}
.Seach-Button{
    position: absolute;
width: 200px;
height: 42px;
margin-left: 950px;
margin-top: 136px;
background:  #1E90FF;

border-radius: 6px;

}
/* .Warning-Session {
    
    width: 100%;
    height: 300px;
   
    border-radius: 25px;
    background-color: #ffffff;
} */
.Warning-Session {
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 245px;
}

.Warning-Session table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
}

.Warning-Session th, .Warning-Session td {
  padding: 8px;
  /* border: 1px solid #ddd; */
 

}

.Warning-Session th {
    height: 50px;
    font-family: 'Poppins',sans-serif;
  color: #000;
  font-style: normal;
  font-size: 19px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.16px;
  /* background-color: #f2f2f2; */
}

.Warning-Session tbody tr:nth-child(even) {
  background-color: #f3f3f3;
  height: 50px;
}

.Warning-Session tbody tr:hover {
  background-color: #e9e9e9;
}
.employedetailscards{
    margin-top: 20px;
    border-radius: 32px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
}
.form-label{
    color: #7B7B7B;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
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
</style>