/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue').default;

import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
const EventBus = new Vue();

export default EventBus;
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)
import VueToastr from "vue-toastr";
// use plugin

// const toastrOptions = {
//     defaultTimeout: 500000, // Set the default timeout in milliseconds (e.g., 5000ms or 5 seconds)
//     position: "top-right", // Set the position of the toastr notifications
//     // Add any other options you want to customize
//   };
Vue.use(VueToastr);
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

// import vfr from 'vue_form_repeater';

// Vue.use(vfr);
Vue.component('apexchart', VueApexCharts)
Vue.component('pagination', require('laravel-vue-pagination'));

import VueTour from 'vue-tour'
require('vue-tour/dist/vue-tour.css')
Vue.use(VueTour)
import fullCalendar from 'vue-fullcalendar'
import RoleAccordions from './components/client_admin_side/RoleAccordions.vue';

Vue.component('role-accordion', RoleAccordions);

import loader from "vue-ui-preloader";
Vue.use(loader);
import Popover from 'vue-js-popover';
 Vue.use(Popover)

import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect);

import VueHtml2pdf from 'vue-html2pdf'
Vue.component('VueHtml2pdf', VueHtml2pdf);

import DateRangePicker from 'vue2-daterange-picker';
Vue.component('DateRangePicker', DateRangePicker);

// Vue.config.devtools = false
// Vue.config.debug = false
// Vue.config.silent = true


import * as helpers from './helper/helper';
Vue.prototype.$helpers = helpers;
import * as apihelpers from './helper/apihelper';
Vue.prototype.$apihelpers = apihelpers;



const permissionMixin = {
    methods: {
      hasPermission(permission) {
        // Access the hasPermission function from this.$helpers
        return this.$helpers.hasPermission(permission);
      },
    },
  };

  // Apply the global mixin to all Vue components
  Vue.mixin(permissionMixin);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



const calander = require('./components/layout/hr_calander.vue').default;
const dashboard=  require('./components/main_dashboard.vue').default;
const comp_dashboard=require('./components/layout/company_dashboard.vue').default;
Vue.component('footer_bottom', require('./components/footer.vue').default);
Vue.component('navbar', require('./components/layout/navbar.vue').default);

Vue.component('navbar1', require('./components/layout/navbar1.vue').default);
Vue.component('mainmenu1', require('./components/layout/mainmenu1.vue').default);
Vue.component('mainmenu', require('./components/layout/mainmenu.vue').default);
Vue.component('main_dashboard', require('./components/main_dashboard.vue').default);
const create_company=require('./components/layout/create_company.vue').default;
const chat=require('./components/layout/chat.vue').default;
const overall_companies=require('./components/layout/overall_companies.vue').default;
const company_detail=require('./components/layout/company_detail.vue').default;
const company_edit=require('./components/layout/company_edit.vue').default;
//const forget_password=require('./components/user_folder/forget_password.vue').default;
//user-admin side components
const users_page=require('./components/client_admin_side/users_page.vue').default;
const rolesandPermissions=require('./components/client_admin_side/RolesAndPermissions.vue').default;
const CreateRoles=require('./components/client_admin_side/CreateRoles.vue').default;
const create_user=require('./components/client_admin_side/create_user.vue').default;
const location_detail=require('./components/client_admin_side/location_detail.vue').default;
const designation_detail=require('./components/client_admin_side/designation_detail.vue').default;
const department_detail=require('./components/client_admin_side/department_detail.vue').default;
const activity_log = require('./components/client_admin_side/activity_log.vue').default;
const update_user=require('./components/client_admin_side/update_user.vue').default;
const faq_page = require('./components/client_admin_side/faq.vue').default;
Vue.component('login_page', require('./components/client_admin_side/login_page.vue').default);


//HR SIDE
const py_tax_holding=require('./components/payroll/py_tax_holding.vue').default;
const fuel_allowance = require('./components/payroll/py_allowance_fuel.vue').default;
const fuelallowance = require('./components/payroll/Fuelallowance.vue').default;
const fuel_bills = require('./components/payroll/py_bill_fuel.vue').default;
const fuelbill_detail = require('./components/payroll/py_fuelbill_detail.vue').default;
const py_stipend = require('./components/payroll/py_stipend.vue').default;


const hr_dashboard=require('./components/human_resource/humanresource_dashboard.vue').default;
const hr_employee_detail=require('./components/human_resource/hr_employee_detail.vue').default;
const employee_detail=require('./components/human_resource/ind_employee_detail.vue').default;
const employee_perfomance=require('./components/human_resource/ind_employee_connection.vue').default;
const create_employee=require('./components/human_resource/hr_create_employee.vue').default;
const create_employee_education=require('./components/human_resource/hr_create_emp_education.vue').default;
const create_employee_experience=require('./components/human_resource/hr_create_emp_experience.vue').default;
const create_employee_employeement=require('./components/human_resource/hr_create_emp_employment.vue').default;
const edit_employee=require('./components/human_resource/hr_edit_employee.vue').default;
const update_employee_profile=require('./components/human_resource/update_employee_profile.vue').default;
const update_education_profile=require('./components/human_resource/update_education_profile.vue').default;
const create_documents=require('./components/human_resource/ind_documents.vue').default;

const update_experience_profile=require('./components/human_resource/update_experience_profile.vue').default;
const warning_detail=require('./components/human_resource/hr_warning_detail.vue').default;
const warning_view=require('./components/human_resource/hr_warning_view.vue').default;
const warning_create=require('./components/human_resource/hr_warning_create.vue').default;
const hr_reports=require('./components/human_resource/hr_reports.vue').default;
//attendance
const hr_att_rosters=require('./components/human_resource/hr_att_rosters.vue').default;
const attendance_grace_periods=require('./components/human_resource/attendance_grace_periods.vue').default;
const hr_attendance_dashboard=require('./components/human_resource/hr_attendance_dashboard.vue').default;
const hr_attendance_machines = require('./components/human_resource/hr_attendance_machines.vue').default;
const hr_attendance_emp=require('./components/human_resource/hr_emp_att_detail.vue').default;
const hr_emp_overtime=require('./components/human_resource/hr_emp_att_overtime.vue').default;
const hr_leaves_detail=require('./components/human_resource/hr_leaves_dashboard.vue').default;

const int_att = require('./components/human_resource/hr_team_member_att.vue').default; //individual team member attandence
const ind_view_dashboard=require('./components/human_resource/ind_view_dashboard.vue').default;
const ind_team_attendance=require('./components/human_resource/ind_team_attendance.vue').default;
const ind_emp_detail=require('./components/human_resource/ind_emp_detail.vue').default;
const hr_controller=require('./components/human_resource/hr_controller.vue').default;
const hr_configuration=require('./components/human_resource/hr_configuration.vue').default;
const employee_all_leaves = require('./components/human_resource/hr_leaves.vue').default;
// const team_leaves = require('./components/human_resource/hr_leaves_team.vue').default;
const final_settlement = require('./components/payroll/final_settlement.vue').default;
//Recruitment components
Vue.component('all_jobs', require('./components/layout/allJobs.vue').default);



const club_register = require('../js/admin/clubManagement/pages/clubRegister.vue').default;
const member_register = require('../js/admin/clubManagement/pages/memberRegister.vue').default;
const club_member_fee = require('../js/admin/clubManagement/pages/clubMembersFee.vue').default;

const NotPermission = require('../js/admin/Roles/NotPermission.vue').default;


const recruitment_jobs = require('./components/recruitement/jobs.vue').default;
const recruitment_job_detail = require('./components/recruitement/job_details.vue').default;
const recruitment_candidates = require('./components/recruitement/candidates.vue').default;
const recruitment_interviews = require('./components/recruitement/interviews.vue').default;
const recruitment_dashboard = require('./components/recruitement/rec_dashboard.vue').default;

//Payroll dashboard
const advance_loans = require('./components/payroll/py_loan.vue').default;
const payroll_pending_salaries=require('./components/payroll/payroll_pending_salaries.vue').default;
const py_salary_generation = require('./components/payroll/py_salary_generation.vue').default;

const payroll_employees_detail= require('./components/payroll/payroll_employees_detail.vue').default;
const payroll_hr_approval= require('./components/payroll/payroll_hr_approval.vue').default;
const payroll_finance_approval= require('./components/payroll/payroll_finance_approval.vue').default;
const payroll_distribution=require('./components/payroll/payroll_distribution.vue').default;
const payroll_arrears=require('./components/payroll/py_arrears.vue').default;
const payroll_bonuses=require('./components/payroll/py_bonuses.vue').default;
const payroll_dues=require('./components/payroll/py_dues.vue').default;
const payroll_allowance=require('./components/payroll/py_allowance.vue').default;
const payroll_cash_distribution=require('./components/payroll/payroll_cash_distribution.vue').default;

//payroll_arrears

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



const time_adjustment = require('./components/human_resource/time_adjustment.vue').default;
const hr_department_detail = require('./components/human_resource/hr_department_detail.vue').default;

const payroll_Dashboard = require('./components/payroll/payroll_Dashboard.vue').default;//payroll dashboard

const py_welfare_allowance = require('./components/payroll/py_welfare_allowance.vue').default;

const membersFees = require('./admin/clubManagement/pages/membersFees.vue').default;

console.log(membersFees)

const PathNotFound = require('./components/404.vue').default;



const routes = [

  
   
   
    
  
    {
        path: '/payroll',
        name: 'payroll_Dashboard',
        component:payroll_Dashboard,
        meta: {
            permission: 'Payroll Dashboard overall-view'
        }
    },



   
   
  

   
    {
        path: '/payroll/py_welfare_allowance',
        name: 'py_welfare_allowance',
        component: py_welfare_allowance,
        meta: {
            permission: 'Payroll Welfare Allowances'
        }
    },
  
   
  
   
  

  

    

//HRMS & PAYROLL
{
        path: '/payroll/payroll_pending_salaries',
        name: 'payroll_pending_salaries',
        component: payroll_pending_salaries,
        meta: {
            permission: 'Payroll Pending Salaries'
        }
    },
{
    path: '/pyroll/stipends',
    name: 'py_stipend',
    component: py_stipend,
    meta: {
        permission: 'Payroll employee Stipend Details'
    }
},
{
        path: '/payroll/fuelbills',
        name: 'fuelbill_detail',
        component: fuelbill_detail,
        meta: {
            permission: 'Fuel bills'
        }
    },
 {
        path: '/payroll/fuelbills/add',
        name: 'fuel_bills',
        component: fuel_bills,
        meta: {
            permission: 'Fuel new bill'
        }
    },
 {
        path: '/payroll/allowances/fuel',
        name: 'fuel_allowance',
        component: fuel_allowance,
        meta: {
            permission: 'Fuel Setting'
        }

    },
    {
        path: '/payroll/Fuelallowances',
        name: 'fuelallowance',
        component: fuelallowance,
        meta: {
            permission: 'Payroll Fuel Allowances'
        }
    },
    {
        path: '/payroll/employees_detail',
        name: 'payroll_employees_detail',
        component: payroll_employees_detail,
        meta: {
            permission: 'Payroll employee Salary Details'
        }
    },
    {
        path: '/payroll/taxholding',
        name: 'payroll_taxholding',
        component: py_tax_holding,
        meta: {
            permission: 'Payroll Taxes Details'
        }
    },

{
    path: '/calander',
    name: 'calander',
    component: calander,
    },
{
    path:'/FAQs',
    name:'faq_page',
    component: faq_page,
},
    {
        path: '/payroll/salary_generation',
        name: 'py_salary_generation',
        component: py_salary_generation,
        meta: {
            permission: 'Payroll Salary Processsing'
        }
    },
     {
        path: '/payroll/payroll_hr_approval',
        name: 'payroll_hr_approval',
        component: payroll_hr_approval,
        meta: {
            permission: 'Payroll HR Approval'
        }
    },
   {
        path: '/payroll/payroll_finance_approval',
        name: 'payroll_finance_approval',
        component: payroll_finance_approval,
        meta: {
            permission: 'Payroll Finance Approval'
        }
    },
    {
        path: '/payroll/distribution',
        name: 'payroll_distribution',
        component: payroll_distribution,
        meta: {
            permission: 'Payroll Salary Distribution'
        }
    },

   {
        path: '/payroll/loans',
        name: 'payroll_loans',
        component: advance_loans,
        meta: {
            permission: 'Payroll Loan and Advance'
        }
    },
    {
        path: '/hr/departments',
        name: 'hr_department_detail',
        component: hr_department_detail,
        meta: {
            permission: 'Department overall-view'
        }
    },
    {
        path: '/payroll/arrears',
        name: 'payroll_arrears',
        component: payroll_arrears,
        meta: {
            permission: 'Payroll Arrears'
        }
    },
    {
        path: '/hr/time_adjustment',
        name: 'time_adjustment',
        component: time_adjustment,
        meta: {
            permission: 'HRMS Attendance Time-Adjustment overall-view'
        }
    },
    {
        path: '/payroll/bonuses',
        name: 'payroll_bonuses',
        component: payroll_bonuses,
        meta: {
            permission: 'Payroll Bonuses'
        }

    },
    {
        path: '/payroll/dues',
        name: 'payroll_dues',
        component: payroll_dues,
        meta: {
            permission: 'Payroll Dues Details'
        }
    },
    {
        path: '/payroll/allowance',
        name: 'payroll_allowance',
        component: payroll_allowance,
        meta: {
            permission: 'Payroll Other Allowances'
        }
    },


{
        path: '/hr/member_att/:id',
        name: 'int_att',
        component: int_att,
    },
// {
//         path: '/hr/team_leaves',
//         name: 'team_leaves',
//         component: team_leaves,
//     },
{
    path:'/hr/leaves_dashbaord',
     name:'hr_leaves_detail',
    component:hr_leaves_detail,
    meta: {
        permission: 'HRMS leaves_detail overall-view-request'
    }
},
{
    path:'/hr/attendance_rosters',
     name:'hr_att_rosters',
    component:hr_att_rosters,
    meta: {
        permission: 'HRMS Attendance Shifts view'
    }
},
{
    path:'/hr/attendance_grace_periods',
     name:'attendance_grace_periods',
    component:attendance_grace_periods,
    meta: {
        permission: 'HRMS Attendance Grace-periods overall-view'
    }
},

{
    path:'/hr/update_employee_profile/:id',
     name:'update_employee_profile',
    component:update_employee_profile,
    meta: {
        permission: 'HRMS employees_detail update_employee_profile'
    }
},
{
    path:'/hr/organization_cart',
     name:'hr_controller',
    component:hr_controller,
    meta: {
        permission: 'HRMS Organization_Cart  view'
    }
},
{
    path:'/hr/configuration',
     name:'hr_configuration',
    component:hr_configuration,
    meta: {
        permission: 'HR Controller overall-view'
    }
},
{
        path: '/hr/employee_all_leaves',
        name: 'employee_all_leaves',
        component: employee_all_leaves,
        meta: {
            permission: 'HRMS leaves_detail overall-view'
        }
    },
{
    path:'/hr/emp_detail',
     name:'ind_emp_detail',
    component:ind_emp_detail,
},
{
    path:'/hr/team_attendance',
     name:'ind_team_attendance',
    component:ind_team_attendance,
},
{
        path: '/FinalSettlement',
        name: 'final_settlement',
        component: final_settlement,
        meta: {
            permission: 'Payroll Final Settlement'
        }
    },
{
    path:'/',
     name:'ind_view_dashboard',
    component:ind_view_dashboard,
},
{
    path:'/hr/employee_dashboard',
     name:'ind_view_dashboard',
    component:ind_view_dashboard,
},
{
    path:'/hr/all_attendance',
     name:'hr_attendance_emp',
    component:hr_attendance_emp,
    meta: {
        permission: 'HRMS Attendance Overall-Attendance overall-view'
    }
},
{
    path:'/hr/overtime',
     name:'hr_emp_overtime',
    component:hr_emp_overtime,
    meta: {
        permission: 'HRMS Attendance Employees-Overtime overall-view'
    }
},
{
    path:'/hr/live_attendance',
     name:'hr_attendance_dashboard',
    component:hr_attendance_dashboard,
    meta: {
        permission: 'HRMS Attendance overall-view'
    }
},
{
    path:'/hr/live_devices',
    name:'hr_attendance_machines',
    component: hr_attendance_machines,
},
{
    path:'/hr/reports',
     name:'hr_reports',
    component:hr_reports,
    meta: {
        permission: 'HRMS HR-Reports  view'
    }
},
{
    path:'/hr/warning_detail',
     name:'warning_detail',
    component:warning_detail,
    meta: {
        permission: 'HRMS warning_detail overall-view'
    }
},
{
    path:'/hr/create_warning',
     name:'warning_create',
    component:warning_create,
    meta: {
        permission: 'HRMS warning_detail create_warning'
    }

},
{
    path:'/hr/warning_view/:id',
     name:'warning_view',
    component:warning_view,
    meta: {
        permission: 'HRMS warning_detail actions'
    }
},
{
    path:'/hr/employee_perfomance',
     name:'employee_perfomance',
    component:employee_perfomance,
},

{
    path:'/hr/create_employee',
     name:'create_employee',
    component:create_employee,
    meta: {
        permission: 'HRMS employees_detail create_employee'
    }
},
{
    path:'/hr/edit_employee',
     name:'edit_employee',
    component:edit_employee,
},
{
    path:'/hr/employee_education/:id',
     name:'create_employee_education',
    component:create_employee_education,
},
{
    path:'/hr/update_education_profile/:id',
     name:'update_education_profile',
    component:update_education_profile,
    meta: {
        permission: 'HRMS employees_detail update employee_education'
    }
},
{
    path:'/hr/update_experience_profile/:id',
     name:'update_experience_profile',
    component:update_experience_profile,
    meta: {
        permission: 'HRMS employees_detail update employee_experience'
    }
},
{
    path:'/hr/add_documents/:id',
     name:'create_documents',
    component:create_documents,
    meta: {
        permission: 'HRMS employees_detail  add_documents'
    }
},

{
    path:'/hr/employee_experience/:id',
     name:'create_employee_experience',
    component:create_employee_experience,
},
{
    path:'/hr/employee_employeement/:id',
     name:'create_employee_employeement',
    component:create_employee_employeement,
    meta: {
        permission: 'HRMS employees_detail update employee_employeement'
    }
},
{
    path:'/hr/employee_detail/:id',
     name:'employee_detail',
    component:employee_detail,
    meta: {
        permission: 'HRMS employees_detail view employee profile'
    }
},
{
    path:'/hr/employees_detail',
     name:'hr_employee_detail',
    component:hr_employee_detail,
    meta: {
        permission: 'HRMS employees_detail overall-view'
    }
},
{
    path:'/hr/dashboard',
     name:'hr_dashboard',
    component:hr_dashboard,
    meta: {
        permission: 'Human Resource Dashboard overall-view'
    }
},
{
    path:'/settings/users',
     name:'users_page',
    component:users_page,
    meta: {
        permission: 'User Details oervall-view'
    }
},
{
    path:'/settings/rolesPermissions',
     name:'rolesandPermissions',
    component:rolesandPermissions,
    meta: {
        permission: 'Admin Created Roles view'
    }
},
{
    path:'/settings/createRoles',
     name:'CreateRoles',
    component:CreateRoles,
    meta: {
        permission: 'Admin Create Role view'
    }
},
{
        path: '/settings/activity_log',
        name: 'activity_log',
        component: activity_log,
        meta: {
            permission: 'Activity Log oervall-view'
        }
    },
{
    path:'/settings/location_detail',
     name:'location_detail',
    component:location_detail,
    meta: {
        permission: 'Work Location overall-view'
    }
},
{
    path:'/settings/designation_detail',
     name:'designation_detail',
    component:designation_detail,
    meta: {
        permission: 'Designantion overall-view'
    }
},
{
    path:'/settings/department_detail',
     name:'department_detail',
    component:department_detail,
    meta: {
        permission: 'AC Department oervall-view'
    }
},

{
    path:'/settings/create_user',
     name:'create_user',
    component:create_user,
    meta: {
        permission: 'User Details AddUser'
    }
},
{
    path:'/settings/update_user/:id',
     name:'update_user',
    component:update_user,
},
// {
//     path:'/',
//      name:'dashboard',
//     component:dashboard,
// },
{
    path:'/chat',
     name:'chat',
    component:chat,
},
{
    path:'/create_company',
     name:'create_company',
    component:create_company,
},
{
    path:'/overall_companies',
     name:'overall_companies',
    component:overall_companies,
},
{
    path:'/company_detail/:id',
     name:'company_detail',
    component:company_detail,
},
{
    path:'/company_edit/:id',
     name:'company_edit',
    component:company_edit,
},



    {
    path:'/company_dashboard',
    name:'comp_dashboard',
    component: comp_dashboard,
    },
 {
        path: '/recruitment/recDashboard',
        name: 'recruitment_dashboard',
        component: recruitment_dashboard,
        meta: {
            permission: 'Recuriment Dashboard overall-view'
        }
    },
    {
        path: '/recruitment/interviews',
        name: 'recruitment_interviews',
        component: recruitment_interviews,
        meta: {
            permission: 'Recruitment Interview view'
        }
    },
    {
        path: '/recruitment/candidates',
        name: 'recruitment_candidates',
        component: recruitment_candidates,
        meta: {
            permission: 'Recruitment Candidates view'
        }
    },
    // Club Management
    {
        path:'/admin/clubRegister',
        name: 'club_register',
        component: club_register,
        meta: {
            permission: 'Admin Club Management View Create Club Tab'
        }
    },
    {
        path: '/admin/memberRegister',
        name: 'member_register',
        component: member_register,
        meta: {
            permission: 'Admin Club Management View Register Member Tab'
        }
    },

    {
        path: '/admin/clubMembersFee',
        name: 'club_member_fee',
        component: club_member_fee,
        meta: {
            permission: 'Admin Club Management View Club Member Fees Tab'
        }
    },
    {
        path: '/admin/membersFees',
        name: 'membersFees',
        component: membersFees,
        meta: {
            permission: 'Admin Club Management View Member Fees Tab'
        }
    },

    {
        path: '/recruitment/job/detail/:id',
        name: 'recruitment_job_detail',
        component: recruitment_job_detail,
    },
    {
        path: '/recruitment/jobs',
        name: 'recruitment_jobs',
        component:recruitment_jobs,
        meta: {
            permission: 'Recruitment job opening view'
        }
    },
    {
        path: '/NotPermission',
        name: 'Not_Permission',
        component:NotPermission,
        meta: {
            permission: 'Recruitment job opening view'
        }
    },
      {
            path: '/:pathMatch(.*)*',
         component: PathNotFound
          },

];

const router= new VueRouter({
    routes,
})
function getPermissions() {
    axios.get('get_permissions', {
    })
        .then(data => {
            console.log(data.data.data)
            localStorage.setItem('permissions', JSON.stringify(data.data.data));
        })
        .catch(err => {
            console.log(err)
        })
}
var permissions = JSON.parse(localStorage.getItem('permissions') || '[]');

router.beforeEach(async (to, from, next) => {
    const requiredPermissions = to.meta.permissions;  // Change to 'permissions'

    // Check if the route has required permissions
    if (requiredPermissions && Array.isArray(requiredPermissions)) {
        // Check if the user has at least one of the required permissions
        if (requiredPermissions.some(permission => permissions.includes(permission))) {
            // User has at least one of the permissions, proceed to the route
            next();
        } else {
            console.log("redirect to another one");

            // Check if the route is already the "Not_Permission" route
            if (to.name !== 'Not_Permission') {
                // User doesn't have any of the permissions, redirect to NoPermission component
                next({ name: 'Not_Permission' });
            } else {
                // Avoid infinite loop by not redirecting if already on the "Not_Permission" route
                next();
            }
        }
    } else {
        // If the route doesn't require permissions, proceed to the route
        next();
    }
});


const app = new Vue({
    data: {
        selectedPermissions: [], // Define the global selectedPermissions array here
      },
    el: '#app',
    router,
});
