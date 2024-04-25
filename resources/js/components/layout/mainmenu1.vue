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
                        <svg xmlns="http://www.w3.org/2000/svg" class="Nc-svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M9.64874 26.5418H4.93541C2.59041 26.5418 1.45874 25.4568 1.45874 23.2168V4.78344C1.45874 2.54344 2.60207 1.45844 4.93541 1.45844H9.64874C11.9937 1.45844 13.1254 2.54344 13.1254 4.78344V23.2168C13.1254 25.4568 11.9821 26.5418 9.64874 26.5418ZM4.93541 3.20844C3.45374 3.20844 3.20874 3.6051 3.20874 4.78344V23.2168C3.20874 24.3951 3.45374 24.7918 4.93541 24.7918H9.64874C11.1304 24.7918 11.3754 24.3951 11.3754 23.2168V4.78344C11.3754 3.6051 11.1304 3.20844 9.64874 3.20844H4.93541Z" fill="black"/>
  <path d="M23.0648 16.0418H18.3514C16.0064 16.0418 14.8748 14.9568 14.8748 12.7168V4.78344C14.8748 2.54344 16.0181 1.45844 18.3514 1.45844H23.0648C25.4098 1.45844 26.5414 2.54344 26.5414 4.78344V12.7168C26.5414 14.9568 25.3981 16.0418 23.0648 16.0418ZM18.3514 3.20844C16.8698 3.20844 16.6248 3.6051 16.6248 4.78344V12.7168C16.6248 13.8951 16.8698 14.2918 18.3514 14.2918H23.0648C24.5464 14.2918 24.7914 13.8951 24.7914 12.7168V4.78344C24.7914 3.6051 24.5464 3.20844 23.0648 3.20844H18.3514Z" fill="black"/>
  <path d="M23.0648 26.5412H18.3514C16.0064 26.5412 14.8748 25.4562 14.8748 23.2162V21.1162C14.8748 18.8762 16.0181 17.7912 18.3514 17.7912H23.0648C25.4098 17.7912 26.5414 18.8762 26.5414 21.1162V23.2162C26.5414 25.4562 25.3981 26.5412 23.0648 26.5412ZM18.3514 19.5412C16.8698 19.5412 16.6248 19.9379 16.6248 21.1162V23.2162C16.6248 24.3945 16.8698 24.7912 18.3514 24.7912H23.0648C24.5464 24.7912 24.7914 24.3945 24.7914 23.2162V21.1162C24.7914 19.9379 24.5464 19.5412 23.0648 19.5412H18.3514Z" fill="black"/>
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
                        <svg xmlns="http://www.w3.org/2000/svg" class="HM-svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <mask id="mask0_439_543" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
    <rect width="28" height="28" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_439_543)">
    <path d="M1.16675 23.3334V20.0667C1.16675 19.4056 1.33689 18.7979 1.67716 18.2438C2.01744 17.6896 2.46953 17.2667 3.03341 16.975C4.23897 16.3722 5.46397 15.9202 6.70841 15.6188C7.95286 15.3174 9.21675 15.1667 10.5001 15.1667C11.7834 15.1667 13.0473 15.3174 14.2917 15.6188C15.5362 15.9202 16.7612 16.3722 17.9667 16.975C18.5306 17.2667 18.9827 17.6896 19.323 18.2438C19.6633 18.7979 19.8334 19.4056 19.8334 20.0667V23.3334H1.16675ZM22.1667 23.3334V19.8334C22.1667 18.9778 21.9286 18.1563 21.4522 17.3688C20.9758 16.5813 20.3001 15.9056 19.4251 15.3417C20.4167 15.4584 21.3501 15.6577 22.2251 15.9396C23.1001 16.2215 23.9167 16.5667 24.6751 16.975C25.3751 17.3639 25.9098 17.7965 26.2792 18.2729C26.6487 18.7493 26.8334 19.2695 26.8334 19.8334V23.3334H22.1667ZM10.5001 14C9.21675 14 8.11814 13.5431 7.20425 12.6292C6.29036 11.7153 5.83341 10.6167 5.83341 9.33335C5.83341 8.05002 6.29036 6.95141 7.20425 6.03752C8.11814 5.12363 9.21675 4.66669 10.5001 4.66669C11.7834 4.66669 12.882 5.12363 13.7959 6.03752C14.7098 6.95141 15.1667 8.05002 15.1667 9.33335C15.1667 10.6167 14.7098 11.7153 13.7959 12.6292C12.882 13.5431 11.7834 14 10.5001 14ZM22.1667 9.33335C22.1667 10.6167 21.7098 11.7153 20.7959 12.6292C19.882 13.5431 18.7834 14 17.5001 14C17.2862 14 17.014 13.9757 16.6834 13.9271C16.3529 13.8785 16.0806 13.825 15.8667 13.7667C16.3917 13.1445 16.7952 12.4542 17.0772 11.6959C17.3591 10.9375 17.5001 10.15 17.5001 9.33335C17.5001 8.51669 17.3591 7.72919 17.0772 6.97085C16.7952 6.21252 16.3917 5.52224 15.8667 4.90002C16.139 4.8028 16.4112 4.7396 16.6834 4.71044C16.9556 4.68127 17.2279 4.66669 17.5001 4.66669C18.7834 4.66669 19.882 5.12363 20.7959 6.03752C21.7098 6.95141 22.1667 8.05002 22.1667 9.33335ZM3.50008 21H17.5001V20.0667C17.5001 19.8528 17.4466 19.6584 17.3397 19.4834C17.2327 19.3084 17.0917 19.1722 16.9167 19.075C15.8667 18.55 14.807 18.1563 13.7376 17.8938C12.6681 17.6313 11.589 17.5 10.5001 17.5C9.41119 17.5 8.33202 17.6313 7.26258 17.8938C6.19314 18.1563 5.13341 18.55 4.08341 19.075C3.90841 19.1722 3.76744 19.3084 3.6605 19.4834C3.55355 19.6584 3.50008 19.8528 3.50008 20.0667V21ZM10.5001 11.6667C11.1417 11.6667 11.6911 11.4382 12.148 10.9813C12.6049 10.5243 12.8334 9.97502 12.8334 9.33335C12.8334 8.69169 12.6049 8.14238 12.148 7.68544C11.6911 7.22849 11.1417 7.00002 10.5001 7.00002C9.85841 7.00002 9.30911 7.22849 8.85216 7.68544C8.39522 8.14238 8.16675 8.69169 8.16675 9.33335C8.16675 9.97502 8.39522 10.5243 8.85216 10.9813C9.30911 11.4382 9.85841 11.6667 10.5001 11.6667Z" fill="black"/>
  </g>
</svg>                        <span class="menu-title text-truncate new-text">Hiring Management</span>
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
                    <a  v-if="hasPermission('HRMS')" class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="HRO-svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <mask id="mask0_439_519" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
    <rect width="28" height="28" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_439_519)">
    <path d="M4.66659 23.3334C4.02492 23.3334 3.47561 23.1049 3.01867 22.6479C2.56172 22.191 2.33325 21.6417 2.33325 21V7.00002C2.33325 6.35835 2.56172 5.80905 3.01867 5.3521C3.47561 4.89516 4.02492 4.66669 4.66659 4.66669H11.6666L13.9999 7.00002H23.3333C23.9749 7.00002 24.5242 7.22849 24.9812 7.68544C25.4381 8.14238 25.6666 8.69169 25.6666 9.33335V13.1834C25.2971 13.0278 24.9131 12.9257 24.5145 12.8771C24.1159 12.8285 23.7221 12.8334 23.3333 12.8917V9.33335H13.0374L10.7041 7.00002H4.66659V21H14.1166L13.9999 21.1167V23.3334H4.66659ZM16.3333 25.6667V22.0792L22.7791 15.6625C22.9541 15.4875 23.1485 15.3611 23.3624 15.2834C23.5763 15.2056 23.7902 15.1667 24.0041 15.1667C24.2374 15.1667 24.461 15.2104 24.6749 15.2979C24.8888 15.3854 25.0833 15.5167 25.2583 15.6917L26.3374 16.7709C26.493 16.9459 26.6145 17.1403 26.702 17.3542C26.7895 17.5681 26.8333 17.782 26.8333 17.9959C26.8333 18.2097 26.7944 18.4285 26.7166 18.6521C26.6388 18.8757 26.5124 19.075 26.3374 19.25L19.9208 25.6667H16.3333ZM18.0833 23.9167H19.1916L22.7208 20.3584L22.1958 19.8042L21.6416 19.2792L18.0833 22.8084V23.9167ZM22.1958 19.8042L21.6416 19.2792L22.7208 20.3584L22.1958 19.8042Z" fill="black"/>
  </g>
</svg><span
                        class="menu-title text-truncate new-text">HR Operations</span></a>
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
                        <svg xmlns="http://www.w3.org/2000/svg" class="FO-svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <mask id="mask0_439_525" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
    <rect width="28" height="28" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_439_525)">
    <path d="M5.83333 24.5C5.19167 24.5 4.64236 24.2715 4.18542 23.8146C3.72847 23.3576 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72847 4.64236 4.18542 4.18542C4.64236 3.72847 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3576 3.72847 23.8146 4.18542C24.2715 4.64236 24.5 5.19167 24.5 5.83333V8.75H22.1667V5.83333H5.83333V22.1667H22.1667V19.25H24.5V22.1667C24.5 22.8083 24.2715 23.3576 23.8146 23.8146C23.3576 24.2715 22.8083 24.5 22.1667 24.5H5.83333ZM15.1667 19.8333C14.525 19.8333 13.9757 19.6049 13.5187 19.1479C13.0618 18.691 12.8333 18.1417 12.8333 17.5V10.5C12.8333 9.85833 13.0618 9.30903 13.5187 8.85208C13.9757 8.39514 14.525 8.16667 15.1667 8.16667H23.3333C23.975 8.16667 24.5243 8.39514 24.9812 8.85208C25.4382 9.30903 25.6667 9.85833 25.6667 10.5V17.5C25.6667 18.1417 25.4382 18.691 24.9812 19.1479C24.5243 19.6049 23.975 19.8333 23.3333 19.8333H15.1667ZM23.3333 17.5V10.5H15.1667V17.5H23.3333ZM18.6667 15.75C19.1528 15.75 19.566 15.5799 19.9062 15.2396C20.2465 14.8993 20.4167 14.4861 20.4167 14C20.4167 13.5139 20.2465 13.1007 19.9062 12.7604C19.566 12.4201 19.1528 12.25 18.6667 12.25C18.1806 12.25 17.7674 12.4201 17.4271 12.7604C17.0868 13.1007 16.9167 13.5139 16.9167 14C16.9167 14.4861 17.0868 14.8993 17.4271 15.2396C17.7674 15.5799 18.1806 15.75 18.6667 15.75Z" fill="black"/>
  </g>
</svg><span class="menu-title text-truncate new-text"
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
                        <svg xmlns="http://www.w3.org/2000/svg" class="FM-svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <mask id="mask0_439_531" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
    <rect width="28" height="28" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_439_531)">
    <path d="M4.66675 24.5V5.83333C4.66675 5.19167 4.89522 4.64236 5.35216 4.18542C5.80911 3.72847 6.35841 3.5 7.00008 3.5H14.0001C14.6417 3.5 15.1911 3.72847 15.648 4.18542C16.1049 4.64236 16.3334 5.19167 16.3334 5.83333V14H17.5001C18.1417 14 18.6911 14.2285 19.148 14.6854C19.6049 15.1424 19.8334 15.6917 19.8334 16.3333V21.5833C19.8334 21.9139 19.9452 22.191 20.1688 22.4146C20.3924 22.6382 20.6695 22.75 21.0001 22.75C21.3306 22.75 21.6077 22.6382 21.8313 22.4146C22.0549 22.191 22.1667 21.9139 22.1667 21.5833V13.1833C21.9917 13.2806 21.807 13.3438 21.6126 13.3729C21.4181 13.4021 21.214 13.4167 21.0001 13.4167C20.1834 13.4167 19.4931 13.1347 18.9292 12.5708C18.3654 12.0069 18.0834 11.3167 18.0834 10.5C18.0834 9.87778 18.2536 9.31875 18.5938 8.82292C18.9341 8.32708 19.3862 7.97222 19.9501 7.75833L17.5001 5.30833L18.7251 4.08333L23.0417 8.28333C23.3334 8.575 23.5522 8.91528 23.698 9.30417C23.8438 9.69306 23.9167 10.0917 23.9167 10.5V21.5833C23.9167 22.4 23.6348 23.0903 23.0709 23.6542C22.507 24.2181 21.8167 24.5 21.0001 24.5C20.1834 24.5 19.4931 24.2181 18.9292 23.6542C18.3654 23.0903 18.0834 22.4 18.0834 21.5833V15.75H16.3334V24.5H4.66675ZM7.00008 11.6667H14.0001V5.83333H7.00008V11.6667ZM21.0001 11.6667C21.3306 11.6667 21.6077 11.5549 21.8313 11.3312C22.0549 11.1076 22.1667 10.8306 22.1667 10.5C22.1667 10.1694 22.0549 9.89236 21.8313 9.66875C21.6077 9.44514 21.3306 9.33333 21.0001 9.33333C20.6695 9.33333 20.3924 9.44514 20.1688 9.66875C19.9452 9.89236 19.8334 10.1694 19.8334 10.5C19.8334 10.8306 19.9452 11.1076 20.1688 11.3312C20.3924 11.5549 20.6695 11.6667 21.0001 11.6667ZM7.00008 22.1667H14.0001V14H7.00008V22.1667Z" fill="black"/>
  </g>
</svg><span class="menu-title text-truncate new-text" data-i18n="Invoice">Fuel Management</span>
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
                        <svg xmlns="http://www.w3.org/2000/svg" class="HRC-svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <mask id="mask0_439_537" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
    <rect width="28" height="28" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_439_537)">
    <path d="M12.8333 24.5V17.5H15.1667V19.8333H24.5V22.1667H15.1667V24.5H12.8333ZM3.5 22.1667V19.8333H10.5V22.1667H3.5ZM8.16667 17.5V15.1667H3.5V12.8333H8.16667V10.5H10.5V17.5H8.16667ZM12.8333 15.1667V12.8333H24.5V15.1667H12.8333ZM17.5 10.5V3.5H19.8333V5.83333H24.5V8.16667H19.8333V10.5H17.5ZM3.5 8.16667V5.83333H15.1667V8.16667H3.5Z" fill="black"/>
  </g>
</svg><span
                        class="menu-title text-truncate new-text">Company Controller</span>
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
                    <a class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" class="St-svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M14 18.375C11.585 18.375 9.625 16.415 9.625 14C9.625 11.585 11.585 9.62502 14 9.62502C16.415 9.62502 18.375 11.585 18.375 14C18.375 16.415 16.415 18.375 14 18.375ZM14 11.375C12.5533 11.375 11.375 12.5533 11.375 14C11.375 15.4467 12.5533 16.625 14 16.625C15.4467 16.625 16.625 15.4467 16.625 14C16.625 12.5533 15.4467 11.375 14 11.375Z" fill="#7B7B7B"/>
  <path d="M17.7449 25.8883C17.4999 25.8883 17.2549 25.8533 17.0099 25.795C16.2866 25.5967 15.6799 25.1417 15.2949 24.5L15.1549 24.2667C14.4666 23.0767 13.5216 23.0767 12.8333 24.2667L12.7049 24.4883C12.3199 25.1417 11.7133 25.6083 10.9899 25.795C10.2549 25.9933 9.49659 25.8883 8.85492 25.5033L6.84825 24.3483C6.13659 23.94 5.62325 23.275 5.40159 22.47C5.19159 21.665 5.29659 20.8367 5.70492 20.125C6.04325 19.53 6.13659 18.9933 5.93825 18.655C5.73992 18.3167 5.23825 18.1183 4.54992 18.1183C2.84659 18.1183 1.45825 16.73 1.45825 15.0267V12.9733C1.45825 11.27 2.84659 9.88168 4.54992 9.88168C5.23825 9.88168 5.73992 9.68334 5.93825 9.34501C6.13659 9.00668 6.05492 8.47001 5.70492 7.87501C5.29659 7.16334 5.19159 6.32334 5.40159 5.53001C5.61159 4.72501 6.12492 4.06001 6.84825 3.65168L8.86659 2.49668C10.1849 1.71501 11.9233 2.17001 12.7166 3.51168L12.8566 3.74501C13.5449 4.93501 14.4899 4.93501 15.1783 3.74501L15.3066 3.52334C16.0999 2.17001 17.8383 1.71501 19.1683 2.50834L21.1749 3.66334C21.8866 4.07168 22.3999 4.73668 22.6216 5.54168C22.8316 6.34667 22.7266 7.17501 22.3183 7.88668C21.9799 8.48168 21.8866 9.01834 22.0849 9.35668C22.2833 9.69501 22.7849 9.89334 23.4733 9.89334C25.1766 9.89334 26.5649 11.2817 26.5649 12.985V15.0383C26.5649 16.7417 25.1766 18.13 23.4733 18.13C22.7849 18.13 22.2833 18.3283 22.0849 18.6667C21.8866 19.005 21.9683 19.5417 22.3183 20.1367C22.7266 20.8483 22.8433 21.6883 22.6216 22.4817C22.4116 23.2867 21.8983 23.9517 21.1749 24.36L19.1566 25.515C18.7133 25.76 18.2349 25.8883 17.7449 25.8883ZM13.9999 21.5717C15.0383 21.5717 16.0066 22.225 16.6716 23.38L16.7999 23.6017C16.9399 23.8467 17.1733 24.0217 17.4533 24.0917C17.7333 24.1617 18.0133 24.1267 18.2466 23.9867L20.2649 22.82C20.5683 22.645 20.8016 22.3533 20.8949 22.0033C20.9883 21.6533 20.9416 21.2917 20.7666 20.9883C20.1016 19.845 20.0199 18.6667 20.5333 17.7683C21.0466 16.87 22.1083 16.3567 23.4383 16.3567C24.1849 16.3567 24.7799 15.7617 24.7799 15.015V12.9617C24.7799 12.2267 24.1849 11.62 23.4383 11.62C22.1083 11.62 21.0466 11.1067 20.5333 10.2083C20.0199 9.31001 20.1016 8.13168 20.7666 6.98834C20.9416 6.68501 20.9883 6.32334 20.8949 5.97334C20.8016 5.62334 20.5799 5.34334 20.2766 5.15668L18.2583 4.00168C17.7566 3.69834 17.0916 3.87334 16.7883 4.38668L16.6599 4.60834C15.9949 5.76334 15.0266 6.41668 13.9883 6.41668C12.9499 6.41668 11.9816 5.76334 11.3166 4.60834L11.1883 4.37501C10.8966 3.88501 10.2433 3.71001 9.74159 4.00168L7.72325 5.16834C7.41992 5.34334 7.18659 5.63501 7.09325 5.98501C6.99992 6.33501 7.04659 6.69668 7.22159 7.00001C7.88659 8.14334 7.96825 9.32168 7.45492 10.22C6.94159 11.1183 5.87992 11.6317 4.54992 11.6317C3.80325 11.6317 3.20825 12.2267 3.20825 12.9733V15.0267C3.20825 15.7617 3.80325 16.3683 4.54992 16.3683C5.87992 16.3683 6.94159 16.8817 7.45492 17.78C7.96825 18.6783 7.88659 19.8567 7.22159 21C7.04659 21.3033 6.99992 21.665 7.09325 22.015C7.18659 22.365 7.40825 22.645 7.71159 22.8317L9.72992 23.9867C9.97492 24.1383 10.2666 24.1733 10.5349 24.1033C10.8149 24.0333 11.0483 23.8467 11.1999 23.6017L11.3283 23.38C11.9933 22.2367 12.9616 21.5717 13.9999 21.5717Z" fill="#7B7B7B"/>
</svg>
<span
                        class="menu-title text-truncate new-text" data-i18n="Settings">Settings</span></a>
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
                    <a  v-if="hasPermission('Admin')" class="d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" class="Ad-svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M14.1862 13.5567C14.1512 13.5567 14.1279 13.5567 14.0929 13.5567C14.0346 13.545 13.9529 13.545 13.8829 13.5567C10.4996 13.4517 7.94458 10.7917 7.94458 7.51334C7.94458 4.17668 10.6629 1.45834 13.9996 1.45834C17.3362 1.45834 20.0546 4.17668 20.0546 7.51334C20.0429 10.7917 17.4762 13.4517 14.2212 13.5567C14.2096 13.5567 14.1979 13.5567 14.1862 13.5567ZM13.9996 3.20834C11.6312 3.20834 9.69458 5.14501 9.69458 7.51334C9.69458 9.84668 11.5146 11.725 13.8362 11.8067C13.8946 11.795 14.0579 11.795 14.2096 11.8067C16.4962 11.7017 18.2929 9.82334 18.3046 7.51334C18.3046 5.14501 16.3679 3.20834 13.9996 3.20834Z" fill="#7B7B7B"/>
  <path d="M14.1979 26.3083C11.9112 26.3083 9.61288 25.725 7.87454 24.5583C6.25288 23.485 5.36621 22.015 5.36621 20.4167C5.36621 18.8183 6.25288 17.3367 7.87454 16.2517C11.3745 13.93 17.0445 13.93 20.5212 16.2517C22.1312 17.325 23.0295 18.795 23.0295 20.3933C23.0295 21.9917 22.1429 23.4733 20.5212 24.5583C18.7712 25.725 16.4845 26.3083 14.1979 26.3083ZM8.84288 17.7217C7.72288 18.4683 7.11621 19.425 7.11621 20.4283C7.11621 21.42 7.73454 22.3767 8.84288 23.1117C11.7479 25.06 16.6479 25.06 19.5529 23.1117C20.6729 22.365 21.2795 21.4083 21.2795 20.405C21.2795 19.4133 20.6612 18.4567 19.5529 17.7217C16.6479 15.785 11.7479 15.785 8.84288 17.7217Z" fill="#7B7B7B"/>
</svg>
<span class="menu-title text-truncate new-text" data-i18n="Settings">Admin</span></a>

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
.new-text{
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.16px;
}
.HM-svg, .HRO-svg, .FO-svg, .FM-svg, .HRC-svg, .NC, .Ad-svg, .St-svg{
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    }


</style>
