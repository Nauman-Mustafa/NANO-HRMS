<template>
    <!-- BEGIN: Main Menu-->
        <div class="main-menu menumain menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
<!--    <div :class="menuClass" data-scroll-to-active="true">-->
        <div class="navbar-header">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item me-auto">
                    <router-link class="navbar-brand" to="/">
                        <span class="brand-logo">
                            <!-- <img v-bind:src="`public/images/${session_detail.company_logo}`" class="me-75" height="40"
                                 width="40"/> -->
                        </span>
                        <h2 class="brand-text"
                            style="padding-left:5px; font-size: 18px;width: 130px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                            <!-- {{ session_detail.company_name }} -->
                            NANoHR
                        </h2>
                    </router-link>
                </li>
                <li class="nav-item nav-toggle"><a style="margin-top: 35px;" class="nav-link modern-nav-toggle pe-0"
                                                   data-bs-toggle="collapse"><i
                    class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i><i
                    class="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" data-feather="disc"
                    data-ticon="disc"></i></a></li>
            </ul>
        </div>

        <div class="shadow-bottom"></div>
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li    v-if="hasPermission('Dashboard')" class="nav-item navbaritems has-sub">
       
         
                    <a class="d-flex align-items-center">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<mask id="mask0_335_57" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
<rect width="32" height="32" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_335_57)">
<path d="M1.16663 23.3334V20.0667C1.16663 19.4056 1.33676 18.7979 1.67704 18.2438C2.01732 17.6896 2.4694 17.2667 3.03329 16.975C4.23885 16.3722 5.46385 15.9202 6.70829 15.6188C7.95274 15.3174 9.21663 15.1667 10.5 15.1667C11.7833 15.1667 13.0472 15.3174 14.2916 15.6188C15.5361 15.9202 16.7611 16.3722 17.9666 16.975C18.5305 17.2667 18.9826 17.6896 19.3229 18.2438C19.6632 18.7979 19.8333 19.4056 19.8333 20.0667V23.3334H1.16663ZM22.1666 23.3334V19.8334C22.1666 18.9778 21.9284 18.1563 21.452 17.3688C20.9757 16.5813 20.3 15.9056 19.425 15.3417C20.4166 15.4584 21.35 15.6577 22.225 15.9396C23.1 16.2215 23.9166 16.5667 24.675 16.975C25.375 17.3639 25.9097 17.7965 26.2791 18.2729C26.6486 18.7493 26.8333 19.2695 26.8333 19.8334V23.3334H22.1666ZM10.5 14C9.21663 14 8.11801 13.5431 7.20413 12.6292C6.29024 11.7153 5.83329 10.6167 5.83329 9.33335C5.83329 8.05002 6.29024 6.95141 7.20413 6.03752C8.11801 5.12363 9.21663 4.66669 10.5 4.66669C11.7833 4.66669 12.8819 5.12363 13.7958 6.03752C14.7097 6.95141 15.1666 8.05002 15.1666 9.33335C15.1666 10.6167 14.7097 11.7153 13.7958 12.6292C12.8819 13.5431 11.7833 14 10.5 14ZM22.1666 9.33335C22.1666 10.6167 21.7097 11.7153 20.7958 12.6292C19.8819 13.5431 18.7833 14 17.5 14C17.2861 14 17.0138 13.9757 16.6833 13.9271C16.3527 13.8785 16.0805 13.825 15.8666 13.7667C16.3916 13.1445 16.7951 12.4542 17.077 11.6959C17.359 10.9375 17.5 10.15 17.5 9.33335C17.5 8.51669 17.359 7.72919 17.077 6.97085C16.7951 6.21252 16.3916 5.52224 15.8666 4.90002C16.1388 4.8028 16.4111 4.7396 16.6833 4.71044C16.9555 4.68127 17.2277 4.66669 17.5 4.66669C18.7833 4.66669 19.8819 5.12363 20.7958 6.03752C21.7097 6.95141 22.1666 8.05002 22.1666 9.33335ZM3.49996 21H17.5V20.0667C17.5 19.8528 17.4465 19.6584 17.3395 19.4834C17.2326 19.3084 17.0916 19.1722 16.9166 19.075C15.8666 18.55 14.8069 18.1563 13.7375 17.8938C12.668 17.6313 11.5888 17.5 10.5 17.5C9.41107 17.5 8.3319 17.6313 7.26246 17.8938C6.19301 18.1563 5.13329 18.55 4.08329 19.075C3.90829 19.1722 3.76732 19.3084 3.66038 19.4834C3.55343 19.6584 3.49996 19.8528 3.49996 20.0667V21ZM10.5 11.6667C11.1416 11.6667 11.6909 11.4382 12.1479 10.9813C12.6048 10.5243 12.8333 9.97502 12.8333 9.33335C12.8333 8.69169 12.6048 8.14238 12.1479 7.68544C11.6909 7.22849 11.1416 7.00002 10.5 7.00002C9.85829 7.00002 9.30899 7.22849 8.85204 7.68544C8.3951 8.14238 8.16663 8.69169 8.16663 9.33335C8.16663 9.97502 8.3951 10.5243 8.85204 10.9813C9.30899 11.4382 9.85829 11.6667 10.5 11.6667Z" fill="black"/>
</g>
</svg>


<span class="menu-title text-truncate custom-text">NANO Charts</span></a>
                    <ul class="menu-content dropdown-right">
                        <li @click="activate(71)" :class="{ active : active_el ==71 }"
                            v-if="hasPermission('HRMS Organization_Cart  view') ">
                            <router-link to="/hr/organization_cart" class="d-flex align-items-center"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate">Organization Chart</span>
                            </router-link>
                        </li>
                        <li @click="activate(1)" :class="{ active : active_el == 1 }"
                        v-if="hasPermission('Recuriment Dashboard overall-view')">
                            <router-link to="/recruitment/recDashboard" class="d-flex align-items-center">
                                <i data-feather="circle"></i>
                                <span class="menu-item text-truncate">Hiring </span>
                            </router-link>
                        </li>
                        <li @click="activate(2)" :class="{ active : active_el == 2 }"
                        v-if="hasPermission('Human Resource Dashboard overall-view')">
                            <router-link to="/hr/dashboard" class="d-flex align-items-center"><i
                                class="fa-regular fa-circle"></i><span
                                class="menu-item text-truncate">HR Management</span></router-link>
                        </li>
                        <li @click="activate(3)" :class="{ active : active_el == 3 }"
                        v-if="hasPermission('Payroll Dashboard overall-view')">
                            <router-link  to="/payroll"
                                         class="d-flex align-items-center"><i class="fa-regular fa-circle"></i><span
                                class="menu-item text-truncate">Wage and Salary</span></router-link>
                        </li>
                       
                        
                    </ul>
                </li>
                <li class=" navigation-header">
                    <span>NANO HR Management </span><i data-feather="more-horizontal"></i>
                </li>
                <li class="nav-item has-sub"
                    v-if="hasPermission('Recruitment')">
                    <a class="d-flex align-items-center">
                        <i class="fa-solid fa-user-check"></i>
                        <span class="menu-title text-truncate">Hiring Management</span>
                    </a>
                    <ul class="menu-content">
                        <li  v-if="hasPermission('Recruitment job opening view')"  @click="activate(6)" :class="{ active : active_el == 6 }">
                            <router-link class="d-flex align-items-center" to="/recruitment/jobs">
                                <i class="fa-regular fa-circle"></i>
                                <span class="menu-item text-truncate">Open Positions</span>
                            </router-link>
                        </li>
                        <li v-if="hasPermission('Recruitment Candidates view')" @click="activate(7)" :class="{ active : active_el == 7 }">
                            <router-link class="d-flex align-items-center" to="/recruitment/candidates">
                                <i class="fa-regular fa-circle"></i>
                                <span class="menu-item text-truncate">Applicants</span>
                            </router-link>
                        </li>
                        <li  v-if="hasPermission('Recruitment Interview view')" @click="activate(8)" :class="{ active : active_el ==8 }">
                            <router-link class="d-flex align-items-center" to="/recruitment/interviews">
                                <i class="fa-regular fa-circle"></i>
                                <span class="menu-item text-truncate">Applicants Result</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li  class="nav-item has-sub">
                    <a  v-if="hasPermission('HRMS')" class="d-flex align-items-center"><i class="fa-solid fa-user-group"></i><span
                        class="menu-title text-truncate">HR Operations</span></a>
                    <ul class="menu-content">
                        <li @click="activate(5)" :class="{ active : active_el ==5 }"
                            v-if="hasPermission('HRMS employees_detail overall-view')">
                            <router-link class="d-flex align-items-center" to="/hr/employees_detail"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Team Profiles</span>
                            </router-link>
                        </li>
                        <li @click="activate(9)" :class="{ active : active_el ==9 }"
                            v-if="hasPermission('HRMS warning_detail overall-view') ">
                            <router-link to="/hr/warning_detail" class="d-flex align-items-center"><i
                                class="fa-regular fa-circle"></i><span
                                class="menu-item text-truncate">Team Warnings</span></router-link>
                        </li>
                        <!--                        <li @click="activate(10)" :class="{ active : active_el ==10 }"-->
                        <!--                            v-if="session_detail.hr_write=='true' && session_detail.company_hr_status=='true'">-->
                        <!--                            <router-link to="/hr/leaves_dashbaord" class="d-flex align-items-center"><i-->
                        <!--                                class="fa-regular fa-circle"></i><span-->
                        <!--                                class="menu-item text-truncate">Leaves Detail</span></router-link>-->
                        <!--                        </li>-->
                        <li @click="activate(75)" :class="{ active : active_el == 75}"
                            v-if="hasPermission('HRMS Attendance overall-view') ">
                            <router-link @click="activate(75)" class="d-flex align-items-center"
                                         to="/hr/live_attendance">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="feather feather-circle">
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                <span class="menu-item text-truncate" data-i18n="Account Settings">Team Attendance</span>
                            </router-link>
                            <!-- <ul class="menu-content">
                                 <li @click="activate(75)" :class="{ active : active_el == 75}">
                                     <router-link class="d-flex align-items-center" to="/hr/live_attendance"><i class="fa-regular fa-circle"></i><span class="menu-item text-truncate">Attendance Details</span></router-link>
                                 </li>
                             </ul>
                             <ul class="menu-content" v-if="session_detail.hr_write=='true' && session_detail.company_hr_status=='true'">
                                 <li @click="activate(11)" :class="{ active : active_el == 11}">
                                     <router-link class="d-flex align-items-center" to="/hr/live_devices"><i class="fa-regular fa-circle"></i><span class="menu-item text-truncate">Devices</span></router-link>
                                 </li>
                             </ul>-->
                        </li>
                        <li @click="activate(75)" :class="{ active : active_el == 75}" v-else>
                            <router-link v-if="hasPermission('HRMS Attendance overall-view')" @click="activate(75)" class="d-flex align-items-center"
                                         to="/hr/all_attendance">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="feather feather-circle">
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                <span class="menu-item text-truncate" data-i18n="Account Settings">Team Attendance</span>
                            </router-link>
                        </li>
                        <li  v-if="hasPermission('HRMS leaves_detail overall-view')" @click="activate(10)" :class="{ active : active_el ==10 }">
                            <router-link to="/hr/employee_all_leaves" class="d-flex align-items-center"><i
                                class="fa-regular fa-circle"></i><span
                                class="menu-item text-truncate">Team Leaves</span></router-link>
                        </li>
                        <li @click="activate(12)" :class="{ active : active_el ==12 }"
                            v-if="hasPermission('HRMS HR-Reports  view') ">
                            <router-link to="/hr/reports" class="d-flex align-items-center"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate">HR Reports & Analyses</span>
                            </router-link>
                        </li>
                       
                    </ul>
                </li>
                <li v-if="hasPermission('Payroll') "
                    class="nav-item has-sub">
                    <a class="d-flex align-items-center">
                        <i class="fa-solid fa-money-check-dollar"></i><span class="menu-title text-truncate"
                                                                            data-i18n="Invoice">Finance Operation</span>
                    </a>
                    <ul class="menu-content">
                        <li v-if="hasPermission('Payroll Salary Management')" class="has-sub">
                            <a class="d-flex align-items-center" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round" stroke-linejoin="round"
                                     class="feather feather-circle">
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                <span class="menu-item text-truncate"
                                      data-i18n="Account Settings">Salary Administration</span></a>
                            <ul class="menu-content">
                                <li v-if="hasPermission('Payroll Salary Processsing')"   @click="activate(101)" :class="{ active : active_el ==101}">
                                    <router-link class="d-flex align-items-center" to="/payroll/salary_generation"><i
                                        class="fa-regular fa-circle"></i><span class="menu-item text-truncate">Payroll Processing</span>
                                    </router-link>
                                </li>
                                <li v-if="hasPermission('Payroll employee Salary Details')" @click="activate(13)" :class="{ active : active_el ==13}">
                                    <router-link class="d-flex align-items-center" to="/payroll/employees_detail"><i
                                        class="fa-regular fa-circle"></i><span class="menu-item text-truncate">Team Wages</span>
                                    </router-link>
                                </li>
                                <li v-if="hasPermission('Payroll employee Stipend Details')" @click="activate(66)" :class="{ active : active_el ==66}">
                                    <router-link class="d-flex align-items-center" to="/pyroll/stipends"><i
                                        class="fa-regular fa-circle"></i><span class="menu-item text-truncate">Team Stipends</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <!--                        <li @click="activate(13)" :class="{ active : active_el ==13 }">-->
                        <!--                            <router-link class="d-flex align-items-center" to="/payroll/salary_generation">-->
                        <!--                                <i class="fa-regular fa-circle"></i>-->
                        <!--                                <span class="menu-item text-truncate" data-i18n="List">Salaries</span>-->
                        <!--                            </router-link>-->
                        <!--                        </li>-->
                        <li v-if="hasPermission('Payroll Loan and Advance')" @click="activate(14)" :class="{ active : active_el ==14 }">
                            <router-link class="d-flex align-items-center" to="/payroll/loans">
                                <i class="fa-regular fa-circle"></i>
                                <span class="menu-item text-truncate" data-i18n="List">Team Loan</span>
                            </router-link>
                        </li>
                        <li v-if="hasPermission('Payroll Dues Details')" @click="activate(63)" :class="{ active : active_el ==63 }">
                            <router-link class="d-flex align-items-center" to="/payroll/dues">
                                <i class="fa-regular fa-circle"></i>
                                <span class="menu-item text-truncate" data-i18n="List">Team Fees and Taxation</span>
                            </router-link>
                        </li>


                        <li  v-if="hasPermission('Payroll Incentives')" class="has-sub">
                            <a class="d-flex align-items-center" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round" stroke-linejoin="round"
                                     class="feather feather-circle">
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                <span class="menu-item text-truncate"
                                      data-i18n="Account Settings">Performance Enhancements</span></a>
                            <ul class="menu-content">
                                <li v-if="hasPermission('Payroll Arrears')" @click="activate(15)" :class="{ active : active_el ==15}">
                                    <router-link class="d-flex align-items-center" to="/payroll/arrears">
                                        <i class="fa-regular fa-circle"></i>
                                        <span class="menu-item text-truncate">Arrears</span>
                                    </router-link>
                                </li>
                                <li v-if="hasPermission('Payroll Bonuses')" @click="activate(104)" :class="{ active : active_el == 104}">
                                    <router-link class="d-flex align-items-center" to="/payroll/bonuses"><i
                                        class="fa-regular fa-circle"></i><span
                                        class="menu-item text-truncate">Bonuses</span>
                                    </router-link>
                                </li>
                                <li v-if="hasPermission('Payroll Allowances')" @click="activate(69)" :class="{ active : active_el == 69}">
                                    <router-link class="d-flex align-items-center" to="/payroll/allowance"><i
                                        class="fa-regular fa-circle"></i><span
                                        class="menu-item text-truncate">Allowances</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
<!--                        <li @click="activate(15)" :class="{ active : active_el ==15 }">-->
<!--                            <router-link class="d-flex align-items-center" to="/payroll/arrears">-->
<!--                                <i class="fa-regular fa-circle"></i>-->
<!--                                <span class="menu-item text-truncate">Incentives</span>-->
<!--                            </router-link>-->
<!--                        </li>-->
                        <li v-if="hasPermission('Payroll Final Settlement')" @click="activate(59)" :class="{ active : active_el ==59 }">
                            <router-link class="d-flex align-items-center" to="/FinalSettlement">
                                <i class="fa-regular fa-circle"></i>
                                <span class="menu-item text-truncate">Exit Settlement</span>
                            </router-link>
                        </li>

                        <!--                        <li @click="activate(63)" :class="{ active : active_el ==63 }">-->
                        <!--                            <router-link class="d-flex align-items-center" to="/payroll/taxholding">-->
                        <!--                                <i class="fa-regular fa-circle"></i>-->
                        <!--                                <span class="menu-item text-truncate">Tax Holding</span>-->
                        <!--                            </router-link>-->
                        <!--                        </li>-->
                        <!--                        <li @click="activate(66)" :class="{ active : active_el ==66 }">-->
                        <!--                            <router-link class="d-flex align-items-center" to="/pyroll/stipends">-->
                        <!--                                <i class="fa-regular fa-circle"></i>-->
                        <!--                                <span class="menu-item text-truncate">Stipend</span>-->
                        <!--                            </router-link>-->
                        <!--                        </li>-->
                        <!--                        <li @click="activate(69)" :class="{ active : active_el ==69 }">-->
                        <!--                            <router-link class="d-flex align-items-center" to="/payroll/py_welfare_allowance">-->
                        <!--                                <i class="fa-regular fa-circle"></i>-->
                        <!--                                <span class="menu-item text-truncate">Welfare Allowance</span>-->
                        <!--                            </router-link>-->
                        <!--                        </li>-->
                    </ul>
                </li>
                <li v-if="hasPermission('Fuel')"
                    class="nav-item has-sub">
                    <a class="d-flex align-items-center">
                        <i class="fa-solid fa-gas-pump"></i><span class="menu-title text-truncate" data-i18n="Invoice">Fuel Management</span>
                    </a>
                    <ul class="menu-content">
                        <li v-if="hasPermission('Fuel Setting')" @click="activate(65)" :class="{ active : active_el ==65 }">
                            <router-link to="/payroll/allowances/fuel" class="d-flex align-items-center">
                                <i class="fa-regular fa-circle"></i>
                                <span class="menu-item text-truncate">Fuel Allotment</span>
                            </router-link>
                        </li>
                        <li  v-if="hasPermission('Fuel bills')" @click="activate(64)" :class="{ active : active_el ==64 }">
                            <router-link class="d-flex align-items-center" to="/payroll/fuelbills">
                                <i class="fa-regular fa-circle"></i>
                                <span class="menu-item text-truncate">Fuel Invoices</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li v-if="hasPermission('HR Configuration') "
                    class="nav-item has-sub">
                    <a class="d-flex align-items-center">
                        <i class="fa-solid fa-sliders"></i><span
                        class="menu-title text-truncate">HR Controller</span>
                    </a>
                    <ul class="menu-content">
                        <li v-if="hasPermission('HR Controller overall-view')" @click="activate(72)" :class="{ active : active_el ==72 }">
                            <router-link to="/hr/configuration" class="d-flex align-items-center"><i
                                class="fa-regular fa-circle"></i><span
                                class="menu-item text-truncate">HR Structured Setup</span></router-link>
                        </li>
                        <li v-if="hasPermission('Department overall-view')"  @click="activate(73)" :class="{ active : active_el ==73 }">
                            <router-link to="/hr/departments" class="d-flex align-items-center"><i
                                class="fa-regular fa-circle"></i><span
                                class="menu-item text-truncate">Company Departments</span></router-link>
                        </li>
                        <li v-if="hasPermission('Designantion overall-view')" @click="activate(40)" :class="{ active : active_el ==40}">
                            <router-link class="d-flex align-items-center" to="/settings/designation_detail"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Company Designations</span>
                            </router-link>
                        </li>
                        <li v-if="hasPermission('Work Location overall-view')"  @click="activate(39)" :class="{ active : active_el ==39}">
                            <router-link class="d-flex align-items-center" to="/settings/location_detail"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Company Locations</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
              
                <li
                    class=" navigation-header">
                    <span>Admin Settings</span><i data-feather="more-horizontal"></i>
                </li>
                <li  v-if="hasPermission('Settings')"  class="nav-item has-sub">
                    <a class="d-flex align-items-center"><i class="fa-solid fa-gear"></i><span
                        class="menu-title text-truncate" data-i18n="Settings">Settings</span></a>
                    <ul class="menu-content">

                        <li v-if="hasPermission('User Details oervall-view')" @click="activate(38)" :class="{ active : active_el ==38}">
                            <router-link class="d-flex align-items-center" to="/settings/users"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Users Detail</span>
                            </router-link>
                        </li>
                        <li v-if="hasPermission('AC Department oervall-view')" @click="activate(41)" :class="{ active : active_el ==41}">
                            <router-link class="d-flex align-items-center" to="/settings/department_detail"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">AC. Departments</span>
                            </router-link>
                        </li>
                        <li v-if="hasPermission('Activity Log oervall-view')" @click="activate(42)" :class="{ active : active_el ==42}">
                            <router-link class="d-flex align-items-center" to="/settings/activity_log"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Activity Logs</span>
                            </router-link>
                        </li>
                    </ul>

                </li>


                <li v-if="hasPermission('Admin') " class="nav-item has-sub">
                    <a  v-if="hasPermission('Admin')" class="d-flex align-items-center mb-2"><i class="fas fa-user-shield"></i><span class="menu-title text-truncate" data-i18n="Settings">Admin</span></a>

                    <ul class="menu-content">
                        <li v-if="hasPermission('Admin Club Management View ClubManagement Tab') " class="nav-item has-sub">
                    <a v-if="hasPermission('Admin Club Management View ClubManagement Tab')" class="d-flex align-items-center"><i class="fas fa-user-shield"></i><span class="menu-title text-truncate" data-i18n="Settings">Club Management</span></a>
            
                    <ul class="menu-content">
                        <li v-if="hasPermission('Admin Club Management View Create Club Tab')" @click="activate(77)" :class="{ active : active_el ==77}">
                            <router-link class="d-flex align-items-center" to="/admin/clubRegister"><i class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Create Club</span></router-link>
                        </li>
                        <li  v-if="hasPermission('Admin Club Management View Register Member Tab')" @click="activate(78)" :class="{ active : active_el ==78}">
                            <router-link class="d-flex align-items-center" to="/admin/memberRegister"><i class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Register Member</span></router-link>
                        </li>
                        <li  v-if="hasPermission('Admin Club Management View Club Member Fees Tab')" @click="activate(79)" :class="{ active : active_el ==79}">
                            <router-link class="d-flex align-items-center" to="/admin/clubMembersFee"><i class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Club Members Fee</span></router-link>
                        </li>

                        <li  v-if="hasPermission('Admin Club Management View Member Fees Tab')" @click="activate(80)" :class="{ active : active_el ==80}">
                            <router-link class="d-flex align-items-center" to="/admin/membersFees"><i class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Members Fee</span></router-link>
                        </li>
                        <!-- <li v-if="session_detail.dept=='Software Development'" class="nav-item has-sub">
                    <a class="d-flex align-items-center"><i class="fa-solid fa-gear"></i><span
                        class="menu-title text-truncate" data-i18n="Settings">Create Roles & permissions</span></a>
                    <ul class="menu-content">
                        <li @click="activate(43)" :class="{ active : active_el ==43}">
                            <router-link class="d-flex align-items-center" to="/settings/rolesPermissions"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Roles & Permissions</span>
                            </router-link>
                        </li>
                        <li @click="activate(99)" :class="{ active : active_el ==99}">
                            <router-link class="d-flex align-items-center" to="/settings/CreateRoles"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Create Roles</span>
                            </router-link>
                        </li>

                    </ul>

                </li> -->
                
                        </ul>
                        <li   class="nav-item has-sub">
                    <a  class="d-flex align-items-center mb-2"><i class="fas fa-user-shield"></i><span class="menu-title text-truncate" data-i18n="Settings">Roles & Permission</span></a>
                        <ul class="menu-content">


                        <li @click="activate(43)" :class="{ active : active_el ==43}">
                            <router-link class="d-flex align-items-center" to="/settings/rolesPermissions"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">List Roles</span>
                            </router-link>
                        </li>
                        <li @click="activate(99)" :class="{ active : active_el ==99}">
                            <router-link class="d-flex align-items-center mb-2" to="/settings/CreateRoles"><i
                                class="fa-regular fa-circle"></i><span class="menu-item text-truncate" data-i18n="List">Create Roles</span>
                            </router-link>
                        </li>

                    </ul>


</li>
                    </ul>

                </li>
            </ul>
        </div>
    </div>
    <!-- END: Main Menu-->
</template>

<script>

export default {


    data() {
        return {
            menuClass: 'main-menu menu-fixed menu-accordion menu-shadow expanded menu-light',
            active_el: 0,
            session_detail: {},
        }
    },
    computed: {
    //     hasPermission(permission) {
    //   return hasPermission(permission);
    // },
},
    methods: {
        activate: function (el) {
            this.active_el = el;
        }
    },
    mounted() {
      const cachedData = localStorage.getItem('session_detail');

    if (cachedData) {
      // Use the cached data
      this.session_detail = JSON.parse(cachedData);
    } else {
      // Fetch the data from the API
      axios.get('./session_check')
        .then((response) => {
          // Set the data in your component
          this.session_detail = response.data;
          
          // Store the data in local storage for future use
          localStorage.setItem('session_detail', JSON.stringify(response.data));
        })
        .catch((error) => console.log(error));
    }
    }

}
</script>
<style>
.menu-dark {
    background-color: #283046;
    display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
}
.dropdown-right {
  right: 30px; /* Set right property to 0 to open the dropdown towards the right */
}
.menumain{
    border-radius: 16px;
border-right: 1px solid #E8E8E8;
background: #FFF;
box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
}
.navbaritems{
    border-radius: 8px;
/* background: #0070F2; */
}

.custom-text {
        color: #000;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.16px;
    }
</style>
