<template>
    <nav
        class="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
        <div class="navbar-container d-flex content">
            <div class="bookmark-wrapper d-flex align-items-center">
                <ul class="nav navbar-nav d-xl-none">
                    <li class="nav-item"><a class="nav-link menu-toggle is-active" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-menu ficon">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </a></li>
                </ul>
                <ul class="nav navbar-nav bookmark-icons">
                    <li class="nav-item dropdown dropdown-user">
                    <a class="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="#"
                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       
                        <span class="avatar">
                            <img class="round" v-if="this.fetchimage==''" src="public/images/profile_images/pro.png"
                                 alt="avatar" height="40" width="40">
                            <img class="round" v-else v-bind:src="`public/images/profile_images/${this.fetchimage}`"
                                 alt="avatar" height="40" width="40">

                            <span v-if="checkConnection" class="avatar-status-online" title="You are online"></span>
                            <span v-else class="avatar-status-busy" title="You are offline"></span>
                        </span>
                        <div class="user-navbar ">
                            <span
                            class="user-name ">{{ user_session.first_name }} {{ user_session.last_name }}</span>
                            
                            <span
                            class="user-status">{{ user_session.user_role }}</span>
                        </div>
                    </a>
                    <div style="width:230px;" class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user">
                        <a v-b-modal.modal-profile class="dropdown-item"><i class="me-50" data-feather="user"></i>
                            Profile</a>
                        <a class="dropdown-item" href="app-email.html"><i class="me-50" data-feather="mail"></i>
                            Inbox</a>
                        <router-link class="dropdown-item" to="/calander"><i class="me-50"
                                                                             data-feather="check-square"></i> Task
                        </router-link>
                        <router-link to="/chat" class="dropdown-item"><i class="me-50"
                                                                         data-feather="message-square"></i> Chats
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <a @click="send_update()" class="dropdown-item"
                          ><i class="me-50"
                                                                               data-feather="message-square"></i>Send
                            update notification</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" v-b-modal.modal-pass><i class="me-50" data-feather="settings"></i>
                            Change Password</a>
                        <router-link class="dropdown-item" to="/FAQs"><i class="me-50" data-feather="help-circle"></i>
                            FAQs
                        </router-link>
                        <button @click="logout()" style="width:100%" class="dropdown-item"><i class="me-50"
                                                                                              data-feather="power"></i>
                            Logout
                        </button>
                    </div>
                </li>
                 
                </ul>
            </div>
            <!--            <div class="bookmark-wrapper d-flex align-items-center">-->
            <!--                <ul class="nav navbar-nav d-xl-none">-->
            <!--                    <li class="nav-item"><a class="nav-link menu-toggle" href="#"><i class="ficon" data-feather="menu"></i></a></li>-->
            <!--                </ul>-->
            <!--                <ul class="nav navbar-nav bookmark-icons">-->
            <!--                    <li class="nav-item d-none d-lg-block">-->
            <!--                        <h4 style="font-family: 'Share Tech Mono', monospace; background: url('public/images/clock-frame.png'); background-repeat: no-repeat; background-size: 95px 26px; opacity:0.6;" class="fw-bolder"><span style="font-size: 17px; margin-left: 9px; padding-right: 10px">{{time}}</span></h4>-->
            <!--                    </li>-->
            <!--                </ul>-->
            <!--            </div>-->
            <ul class="nav navbar-nav align-items-center ms-auto ">
                <li class="nav-item d-none d-lg-block"><a @click="setLayout()" class="nav-link nav-link-style">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M25.7031 15.5744C25.5723 15.4433 25.4083 15.3503 25.2286 15.3054C25.0489 15.2605 24.8604 15.2653 24.6833 15.3194C22.7388 15.9074 20.6713 15.9567 18.701 15.4621C16.7307 14.9674 14.9315 13.9474 13.4951 12.5107C12.0587 11.074 11.0389 9.27441 10.5443 7.30371C10.0498 5.33301 10.0991 3.26504 10.6869 1.32015C10.7415 1.14293 10.7467 0.954183 10.7021 0.774216C10.6574 0.594249 10.5645 0.429866 10.4334 0.298746C10.3023 0.167627 10.138 0.0747321 9.95805 0.030052C9.77812 -0.0146281 9.58942 -0.00940272 9.41223 0.0451661C6.72389 0.86886 4.36377 2.51964 2.66771 4.76259C1.18446 6.73225 0.279723 9.07658 0.0551316 11.5322C-0.16946 13.9878 0.294995 16.4574 1.39632 18.6636C2.49764 20.8697 4.19219 22.725 6.2896 24.021C8.38701 25.3169 10.8042 26.0023 13.2695 25.9999C16.1457 26.0088 18.9454 25.0736 21.2391 23.3378C23.4815 21.6414 25.132 19.2808 25.9555 16.5919C26.0094 16.4153 26.0144 16.2274 25.97 16.0482C25.9255 15.869 25.8333 15.7053 25.7031 15.5744ZM20.0128 21.7084C17.8528 23.3356 15.1779 24.1276 12.4804 23.9387C9.78293 23.7498 7.24446 22.5926 5.3323 20.6802C3.42014 18.7678 2.26301 16.2289 2.07391 13.5309C1.88481 10.8328 2.67647 8.1573 4.30317 5.99677C5.36297 4.59692 6.73312 3.46217 8.30578 2.68183C8.21619 3.31068 8.17104 3.94507 8.17066 4.58027C8.17437 8.09585 9.57228 11.4664 12.0577 13.9523C14.543 16.4381 17.9129 17.8364 21.4277 17.8401C22.0641 17.8399 22.6996 17.7947 23.3296 17.7049C22.5487 19.2782 21.4133 20.6486 20.0128 21.7084Z" fill="#303030"/>
</svg></a></li>

                <li class="nav-item" :title="'Wind: '+windspeed+', Humidity: '+humidity">
                    <a class="nav-link nav-link-style">
                        <img class="img-fluid" :src="`https://openweathermap.org/img/wn/${icon}`" height="30"
                             width="30"/>
                        {{ Math.floor(temp - 273.15) }}°C, {{ desc }}
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block">
                    <a class="nav-link nav-link-style">
                        <!-- <i class="fa-solid fa-location-dot"></i> {{ city }}, {{ country }} -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
  <path d="M9.6 15.6C10.72 15.6 11.73 15.325 12.63 14.775C13.53 14.225 14.24 13.5 14.76 12.6C14.06 12.02 13.27 11.575 12.39 11.265C11.51 10.955 10.58 10.8 9.6 10.8C8.62 10.8 7.69 10.955 6.81 11.265C5.93 11.575 5.14 12.02 4.44 12.6C4.96 13.5 5.67 14.225 6.57 14.775C7.47 15.325 8.48 15.6 9.6 15.6ZM9.6 9.6C10.26 9.6 10.825 9.365 11.295 8.895C11.765 8.425 12 7.86 12 7.2C12 6.54 11.765 5.975 11.295 5.505C10.825 5.035 10.26 4.8 9.6 4.8C8.94 4.8 8.375 5.035 7.905 5.505C7.435 5.975 7.2 6.54 7.2 7.2C7.2 7.86 7.435 8.425 7.905 8.895C8.375 9.365 8.94 9.6 9.6 9.6ZM9.6 20.82C12.04 18.58 13.85 16.545 15.03 14.715C16.21 12.885 16.8 11.26 16.8 9.84C16.8 7.66 16.105 5.875 14.715 4.485C13.325 3.095 11.62 2.4 9.6 2.4C7.58 2.4 5.875 3.095 4.485 4.485C3.095 5.875 2.4 7.66 2.4 9.84C2.4 11.26 2.99 12.885 4.17 14.715C5.35 16.545 7.16 18.58 9.6 20.82ZM9.6 24C6.38 21.26 3.975 18.715 2.385 16.365C0.795 14.015 0 11.84 0 9.84C0 6.84 0.965 4.45 2.895 2.67C4.825 0.89 7.06 0 9.6 0C12.14 0 14.375 0.89 16.305 2.67C18.235 4.45 19.2 6.84 19.2 9.84C19.2 11.84 18.405 14.015 16.815 16.365C15.225 18.715 12.82 21.26 9.6 24Z" fill="#1C1B1F"/>
</svg><span class="location"> Lahore,PK</span>

                    </a>
                </li>
                <li class="nav-item dropdown dropdown-notification me-25">
                    <a class="nav-link" href="#" data-bs-toggle="dropdown">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
  <path d="M8.93269 1.56235C9.11945 1.10074 9.43982 0.705418 9.85271 0.427063C10.2656 0.148708 10.7522 0 11.2502 0C11.7481 0 12.2348 0.148708 12.6477 0.427063C13.0606 0.705418 13.3809 1.10074 13.5677 1.56235C15.4161 2.0707 17.0466 3.17179 18.2086 4.69652C19.3707 6.22124 20.0001 8.08527 20.0002 10.0023V15.8736L22.2902 19.3086C22.4158 19.4968 22.4879 19.7157 22.4989 19.9417C22.5099 20.1677 22.4593 20.3925 22.3525 20.5921C22.2458 20.7916 22.0868 20.9584 21.8927 21.0747C21.6986 21.191 21.4765 21.2524 21.2502 21.2523H15.5814C15.4309 22.2937 14.9103 23.246 14.1148 23.9348C13.3194 24.6235 12.3024 25.0026 11.2502 25.0026C10.198 25.0026 9.18101 24.6235 8.38556 23.9348C7.59011 23.246 7.06944 22.2937 6.91894 21.2523H1.25019C1.02388 21.2524 0.801816 21.191 0.607676 21.0747C0.413536 20.9584 0.254607 20.7916 0.147845 20.5921C0.0410825 20.3925 -0.00950719 20.1677 0.00147231 19.9417C0.0124518 19.7157 0.0845887 19.4968 0.210187 19.3086L2.50019 15.8736V10.0023C2.50019 5.97235 5.22519 2.57735 8.93269 1.56235ZM9.48269 21.2523C9.61179 21.6182 9.85117 21.9349 10.1678 22.159C10.4845 22.383 10.8629 22.5034 11.2508 22.5034C11.6387 22.5034 12.0171 22.383 12.3338 22.159C12.6505 21.9349 12.8898 21.6182 13.0189 21.2523H9.48144H9.48269ZM11.2502 3.75235C9.59258 3.75235 8.00287 4.41083 6.83077 5.58293C5.65867 6.75503 5.00019 8.34474 5.00019 10.0023V16.2523C5.00024 16.4993 4.92717 16.7407 4.79019 16.9461L3.58644 18.7523H18.9127L17.7089 16.9461C17.5724 16.7405 17.4998 16.4991 17.5002 16.2523V10.0023C17.5002 8.34474 16.8417 6.75503 15.6696 5.58293C14.4975 4.41083 12.9078 3.75235 11.2502 3.75235Z" fill="#303030"/>
  <circle cx="17.5" cy="5.00244" r="4.375" fill="#FF0000" stroke="#EBEBEB" stroke-width="1.25"/>
</svg>
                        <span v-if="notifications.status==3" class="badge rounded-pill bg-danger badge-up">1</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-media dropdown-menu-end">
                        <li class="dropdown-menu-header">
                            <div class="dropdown-header d-flex">
                                <h4 class="notification-title mb-0 me-auto">Notifications</h4>
                                <div v-if="notifications.status==3" class="badge rounded-pill badge-light-primary">1
                                    New
                                </div>
                                <div v-else class="badge rounded-pill badge-light-primary">0 New</div>
                            </div>
                        </li>
                        <li v-if="notifications.status==3" class="scrollable-container media-list">
                            <a class="d-flex" href="#">
                                <div class="list-item d-flex align-items-start">
                                    <div class="me-1">
                                        <div class="avatar" v-for='emp_detail1 in emp_detail'>
                                            <img v-bind:src="`public/images/profile_images/${notifications.sender}`"
                                                 alt="avatar" width="32" height="32">
                                        </div>
                                    </div>
                                    <div class="list-item-body flex-grow-1">
                                        <p class="media-heading"><span class="fw-bolder">Application updated 🎉</span>yahooo!
                                        </p><small>Hi {{ user_session.first_name }} {{ user_session.last_name }}, I just
                                        made an update, Please clear your cache to install this update</small>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li v-if="notifications.status==3" class="dropdown-menu-footer row">
                            <button @click="delay2()" :disabled="disabled2" class="btn btn-success w-75">I have cleared
                                my cache
                            </button>
                            <button @click="delay3()" :disabled="disabled2" class="btn btn-warning w-25">Skip</button>
                        </li>

                      
                    </ul>
                </li>
                <li class="nav-item d-none d-lg-block"><router-link to="/chat" class="nav-link" href="app-chat.html"
                                                              data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                              title="" data-bs-original-title="Chat" aria-label="Chat">
                                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4.8 14.4H14.4V12H4.8V14.4ZM4.8 10.8H19.2V8.4H4.8V10.8ZM4.8 7.2H19.2V4.8H4.8V7.2ZM0 24V2.4C0 1.74 0.235 1.175 0.705 0.705C1.175 0.235 1.74 0 2.4 0H21.6C22.26 0 22.825 0.235 23.295 0.705C23.765 1.175 24 1.74 24 2.4V16.8C24 17.46 23.765 18.025 23.295 18.495C22.825 18.965 22.26 19.2 21.6 19.2H4.8L0 24ZM3.78 16.8H21.6V2.4H2.4V18.15L3.78 16.8Z" fill="#303030"/>
</svg>
                    </router-link></li>
                    <li class="nav-item d-none d-lg-block"><router-link to="/calander" class="nav-link" href="app-calendar.html"
                                                              data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                              title="" data-bs-original-title="Calendar"
                                                              aria-label="Calendar">
                                                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
  <path d="M2.4 24C1.74 24 1.175 23.765 0.705 23.295C0.235 22.825 0 22.26 0 21.6V4.8C0 4.14 0.235 3.575 0.705 3.105C1.175 2.635 1.74 2.4 2.4 2.4H3.6V0H6V2.4H15.6V0H18V2.4H19.2C19.86 2.4 20.425 2.635 20.895 3.105C21.365 3.575 21.6 4.14 21.6 4.8V21.6C21.6 22.26 21.365 22.825 20.895 23.295C20.425 23.765 19.86 24 19.2 24H2.4ZM2.4 21.6H19.2V9.6H2.4V21.6ZM2.4 7.2H19.2V4.8H2.4V7.2ZM10.8 14.4C10.46 14.4 10.175 14.285 9.945 14.055C9.715 13.825 9.6 13.54 9.6 13.2C9.6 12.86 9.715 12.575 9.945 12.345C10.175 12.115 10.46 12 10.8 12C11.14 12 11.425 12.115 11.655 12.345C11.885 12.575 12 12.86 12 13.2C12 13.54 11.885 13.825 11.655 14.055C11.425 14.285 11.14 14.4 10.8 14.4ZM6 14.4C5.66 14.4 5.375 14.285 5.145 14.055C4.915 13.825 4.8 13.54 4.8 13.2C4.8 12.86 4.915 12.575 5.145 12.345C5.375 12.115 5.66 12 6 12C6.34 12 6.625 12.115 6.855 12.345C7.085 12.575 7.2 12.86 7.2 13.2C7.2 13.54 7.085 13.825 6.855 14.055C6.625 14.285 6.34 14.4 6 14.4ZM15.6 14.4C15.26 14.4 14.975 14.285 14.745 14.055C14.515 13.825 14.4 13.54 14.4 13.2C14.4 12.86 14.515 12.575 14.745 12.345C14.975 12.115 15.26 12 15.6 12C15.94 12 16.225 12.115 16.455 12.345C16.685 12.575 16.8 12.86 16.8 13.2C16.8 13.54 16.685 13.825 16.455 14.055C16.225 14.285 15.94 14.4 15.6 14.4ZM10.8 19.2C10.46 19.2 10.175 19.085 9.945 18.855C9.715 18.625 9.6 18.34 9.6 18C9.6 17.66 9.715 17.375 9.945 17.145C10.175 16.915 10.46 16.8 10.8 16.8C11.14 16.8 11.425 16.915 11.655 17.145C11.885 17.375 12 17.66 12 18C12 18.34 11.885 18.625 11.655 18.855C11.425 19.085 11.14 19.2 10.8 19.2ZM6 19.2C5.66 19.2 5.375 19.085 5.145 18.855C4.915 18.625 4.8 18.34 4.8 18C4.8 17.66 4.915 17.375 5.145 17.145C5.375 16.915 5.66 16.8 6 16.8C6.34 16.8 6.625 16.915 6.855 17.145C7.085 17.375 7.2 17.66 7.2 18C7.2 18.34 7.085 18.625 6.855 18.855C6.625 19.085 6.34 19.2 6 19.2ZM15.6 19.2C15.26 19.2 14.975 19.085 14.745 18.855C14.515 18.625 14.4 18.34 14.4 18C14.4 17.66 14.515 17.375 14.745 17.145C14.975 16.915 15.26 16.8 15.6 16.8C15.94 16.8 16.225 16.915 16.455 17.145C16.685 17.375 16.8 17.66 16.8 18C16.8 18.34 16.685 18.625 16.455 18.855C16.225 19.085 15.94 19.2 15.6 19.2Z" fill="#303030"/>
</svg>
                    </router-link></li>
            </ul>
            <b-modal id="modal-pass" size="md" title="Change your Password" hide-footer>
                <div class="auth-login-form mt-2">
                    <div v-if="this.old_success == '0'">
                        <div class="mb-1">
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="login-password">Old Password</label>
                            </div>
                            <div class="input-group input-group-merge form-password-toggle">
                                <input v-bind:type="[showPassword1 ? 'text' : 'password']" v-model="oldPass"
                                       type="password" class="form-control form-control-merge"
                                       placeholder="Type Password Here"/>
                                <span class="input-group-text cursor-pointer" @click="showPassword1 = !showPassword1">
                                    <i v-if="this.showPassword1 == false" class="fa-regular fa-eye"></i>
                                    <i v-else class="fa-regular fa-eye-slash"></i>
                                </span>
                            </div>
                        </div>

                        <div v-if="this.e_oldPass == 'Password must not be empty'"
                             style="margin-top:5px;margin-bottom:5px;">
                            <p class="alert alert-danger"
                               style="padding-left:10px; padding-right:10px; padding-top:5px; padding-bottom:5px">
                                {{ e_oldPass }}</p>
                        </div>
                        <div v-if="this.e_oldPass == 'Password not exist!'" style="margin-top:5px;margin-bottom:5px;">
                            <p class="alert alert-danger"
                               style="padding-left:10px; padding-right:10px; padding-top:5px; padding-bottom:5px">
                                {{ e_oldPass }}</p>
                        </div>
                        <button :disabled="disabled" @click="delay()" v-if="this.old_success == '0'"
                                class="btn btn-primary w-100" tabindex="4">Confirm
                        </button>
                    </div>

                    <div v-if="this.old_success == '1'">
                        <div class="mb-1">
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="login-password">New Password</label>
                            </div>
                            <div class="input-group input-group-merge form-password-toggle">
                                <input v-bind:type="[showPassword2 ? 'text' : 'password']" v-model="newPass1"
                                       type="password" class="form-control form-control-merge"
                                       placeholder="Type Password Here"/>
                            </div>
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="login-password">Confirm New Password</label>
                            </div>
                            <div class="input-group input-group-merge form-password-toggle">
                                <input v-bind:type="[showPassword2 ? 'text' : 'password']" v-model="newPass2"
                                       type="password" class="form-control form-control-merge"
                                       placeholder="Type Password Here"/>
                                <span class="input-group-text cursor-pointer" @click="showPassword2 = !showPassword2">
                                    <i v-if="this.showPassword2 == false" class="fa-regular fa-eye"></i>
                                    <i v-else class="fa-regular fa-eye-slash"></i>
                                </span>
                            </div>
                        </div>

                        <div v-if="this.e_newPass1 == 'New password must not be empty'"
                             style="margin-top:5px;margin-bottom:5px;">
                            <p class="alert alert-danger"
                               style="padding-left:10px; padding-right:10px; padding-top:5px; padding-bottom:5px">
                                {{ e_newPass1 }}</p>
                        </div>
                        <div v-if="this.newPass1!='' && this.e_newPass2 == 'Confirm with same password'"
                             style="margin-top:5px;margin-bottom:5px;">
                            <p class="alert alert-danger"
                               style="padding-left:10px; padding-right:10px; padding-top:5px; padding-bottom:5px">
                                {{ e_newPass2 }}</p>
                        </div>
                        <b-button :disabled="disabled1" @click="delay1()" v-if="this.old_success == '1'"
                                  class="btn btn-primary w-100" tabindex="4" data-bs-dismiss="b-modal"
                                  style="background-color: #6258cc !important ">Change
                        </b-button>
                    </div>
                </div>
            </b-modal>
            <b-modal id="modal-profile" size="xl" title="Your Personal Profile" ok-only>
                <div class="content-wrapper container-xxl p-0"
                     style="height:500px; overflow-y:scroll; overflow-x:hidden;">
                    <div class="content-header row">
                        <div class="breadcrumb-wrapper">
                            <b-progress
                                :value="percent.address+percent.city+percent.cnic+percent.company_email+percent.department+percent.designation+percent.dob+percent.edu_status+percent.email+percent.emp_code+percent.exp_status+percent.father+percent.gender+percent.job_des+percent.marital+percent.mobile+percent.photo+percent.reporting"
                                variant="success"
                                :label="`${(((percent.address+percent.city+percent.cnic+percent.company_email+percent.department+percent.designation+percent.dob+percent.edu_status+percent.email+percent.emp_code+percent.exp_status+percent.father+percent.gender+percent.job_des+percent.marital+percent.mobile+percent.photo+percent.reporting) / max) * 100).toFixed(0)}%`"
                                :striped="striped" animated class="mb-3">
                            </b-progress>
                        </div>
                    </div>
                    <div class="content-body">
                        <section class="app-user-view-account">
                            <div class="row">
                                <!-- User Sidebar -->
                                <div v-for='emp_detail1 in emp_detail'
                                     class="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
                                    <!-- User Card -->
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="user-avatar-section">
                                                <div class="d-flex align-items-center flex-column">
                                                    <img v-if="emp_detail1.Photo==''"
                                                         class="img-fluid rounded mt-3 mb-2"
                                                         src="public/images/profile_images/pro.png" height="110"
                                                         width="110" alt="User avatar"/>
                                                    <img v-else class="img-fluid rounded mt-3 mb-2"
                                                         v-bind:src="`public/images/profile_images/${emp_detail1.Photo}`"
                                                         height="110" width="110" alt="User avatar"/>
                                                    <div class="user-info text-center">
                                                        <h4>{{ emp_detail1.Name }}</h4>
                                                        <span
                                                            class="badge bg-light-secondary">{{ emp_detail1.Designation }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-around my-2 pt-75">
                                                <div class="d-flex align-items-start me-2">
                                                    <span class="badge bg-light-primary p-75 rounded">

                                                        <i class="font-medium-2 fa-solid fa-check"
                                                           style="margin-right: 5px"></i>
                                                    </span>
                                                    <div class="ms-75">
                                                        <h4 class="mb-0">{{ com_year }}</h4>
                                                        <small>Years Completed</small>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start">
                                                    <span class="badge bg-light-primary p-75 rounded">

                                                        <i class="fa-solid fa-bars-progress font-medium-2"
                                                           style="margin-right: 5px"></i>
                                                    </span>
                                                    <div class="ms-75">
                                                        <h4 class="mb-0">
                                                            {{ percent.address + percent.city + percent.cnic + percent.company_email + percent.department + percent.designation + percent.dob + percent.edu_status + percent.email + percent.emp_code + percent.exp_status + percent.father + percent.gender + percent.job_des + percent.marital + percent.mobile + percent.photo + percent.reporting }}%</h4>
                                                        <small>Profile</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="fw-bolder border-bottom pb-50 mb-1">Details</h4>
                                            <div class="info-container">
                                                <ul class="list-unstyled">
                                                    <li class="mb-75">
                                                        <span class="fw-bolder me-25">Father Name:</span>
                                                        <span>{{ emp_detail1.FatherHusband }}</span>
                                                    </li>
                                                    <li class="mb-75">
                                                        <span class="fw-bolder me-25">Email:</span>
                                                        <span>{{ emp_detail1.Email }}</span>
                                                    </li>
                                                    <li class="mb-75">
                                                        <span class="fw-bolder me-25">Date Of Birth:</span>
                                                        <span>{{ emp_detail1.DOB }}</span>
                                                    </li>
                                                    <li class="mb-75">
                                                        <span class="fw-bolder me-25">Gender:</span>
                                                        <span>{{ emp_detail1.Gender }}</span>
                                                    </li>
                                                    <li class="mb-75">
                                                        <span class="fw-bolder me-25">Religion:</span>
                                                        <span>{{ emp_detail1.Religion }}</span>
                                                    </li>
                                                    <li class="mb-75">
                                                        <span class="fw-bolder me-25">Contact:</span>
                                                        <span>{{ emp_detail1.Mobile }}</span>
                                                    </li>

                                                    <li class="mb-75">
                                                        <span class="fw-bolder me-25">City:</span>
                                                        <span>{{ emp_detail1.City }}</span>
                                                    </li>
                                                    <li class="mb-75">
                                                        <span class="fw-bolder me-25">Country:</span>
                                                        <span>Pakistan</span>
                                                    </li>
                                                    <li class="mb-75">
                                                        <span class="fw-bolder me-25">Status:</span>
                                                        <span
                                                            class="badge bg-light-success">{{ emp_detail1.Status }}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /User Card -->
                                    <!-- Plan Card -->
                                    <div class="card border-primary">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-start">
                                                <span class="badge bg-light-primary">Salary</span>
                                                <div class="d-flex justify-content-center">
                                                    <sup class="h5 pricing-currency text-primary mt-1 mb-0">Rs.</sup>
                                                    <span class="fw-bolder display-5 mb-0 text-primary"
                                                          style="font-size:18px">{{ emp_detail1.Salary }}</span>
                                                    <sub
                                                        class="pricing-duration font-small-4 ms-25 mt-auto mb-2">/month</sub>
                                                </div>
                                            </div>
                                            <div style="font-size:18px;margin-top:20px">
                                                <span class="fw-bolder display-5 mb-0 text-primary"
                                                      style="font-size:18px">Job Description</span>
                                            </div>
                                            <label v-html='emp_detail1.JobDescription'></label>
                                        </div>
                                    </div>
                                    <!-- /Plan Card -->
                                </div>
                                <!--/ User Sidebar -->
                                <!-- User Content -->
                                <div class="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">

                                    <div v-for='emp_detail1 in emp_detail' class="card">
                                        <div class="card-header">
                                            <div style="float:left">
                                                <h4 class="card-title mb-50">Complete Details</h4>
                                            </div>
                                            <div style="float:right">
                                                <a v-if="percent.address+percent.city+percent.cnic+percent.company_email+percent.department+percent.designation+percent.dob+percent.edu_status+percent.email+percent.emp_code+percent.exp_status+percent.father+percent.gender+percent.job_des+percent.marital+percent.mobile+percent.photo+percent.reporting>89"
                                                   target="_blank"
                                                   v-bind:href="`../sa_sass1.1/cv_builder/${emp_detail1.EmployeeID}/${emp_detail1.EmployeeCode}/${emp_detail1.RegisterID}`"
                                                   class="btn btn-primary btn-sm edit-address waves-effect waves-float waves-light">
                                                    CV Builder
                                                </a>
                                                <a v-else target="_blank"
                                                   href="#"
                                                   class="btn btn-primary btn-sm edit-address waves-effect waves-float waves-light">
                                                    CV Builder
                                                </a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-xl-6 col-12">
                                                    <dl class="row mb-0">
                                                        <dt class="col-sm-6 fw-bolder mb-1">Employee Code:</dt>
                                                        <dd class="col-sm-6 mb-1">{{ emp_detail1.EmployeeCode }}</dd>
                                                        <dt class="col-sm-6 fw-bolder mb-1">Reporting To:</dt>
                                                        <dd class="col-sm-6 mb-1">
                                                            <label>
                                                                {{ rep_employees.rep1 }}
                                                            </label>
                                                        </dd>
                                                        <dt class="col-sm-6 fw-bolder mb-1">Posting City:</dt>
                                                        <dd class="col-sm-6 mb-1">{{ emp_detail1.PostingCity }}</dd>
                                                        <dt class="col-sm-6 fw-bolder mb-1">Com. Email:</dt>
                                                        <dd class="col-sm-6 mb-1">{{ emp_detail1.CompanyEmail }}</dd>
                                                        <dt class="col-sm-6 fw-bolder mb-1">CNIC:</dt>
                                                        <dd class="col-sm-6 mb-1">{{ emp_detail1.CNIC }}</dd>
                                                        <dt class="col-sm-6 fw-bolder mb-1">Job Shift:</dt>
                                                        <dd class="col-sm-6 mb-1">{{ emp_detail1.JobShift }}</dd>
                                                        <dt class="col-sm-6 fw-bolder mb-1">Relation:</dt>
                                                        <dd class="col-sm-6 mb-1">{{ emp_detail1.Relation }}</dd>
                                                        <dt class="col-sm-6 fw-bolder mb-1">Send Notification:</dt>
                                                        <dd v-if="emp_detail1.SendNotification==1"
                                                            class="col-sm-6 mb-1">Allow
                                                        </dd>
                                                        <dd v-else class="col-sm-6 mb-1">Not Allow</dd>
                                                        <dt class="col-sm-6 fw-bolder mb-1">Eportal Access:</dt>
                                                        <dd v-if="emp_detail1.EportalAccess==1" class="col-sm-6 mb-1">
                                                            Allow
                                                        </dd>
                                                        <dd v-else class="col-sm-6 mb-1">Not Allow</dd>
                                                        <dt class="col-sm-6 fw-bolder mb-1">Team Attendance:</dt>
                                                        <dd v-if="emp_detail1.AllowEmployeesAttendance==1"
                                                            class="col-sm-6 mb-1">Yes
                                                        </dd>
                                                        <dd v-else class="col-sm-6 mb-1">No</dd>
                                                    </dl>
                                                </div>
                                                <div class="col-xl-6 col-12">
                                                    <dl class="row mb-0">
                                                        <dt class="col-sm-5 fw-bolder mb-1">Department:</dt>
                                                        <dd class="col-sm-7 mb-1">{{ emp_detail1.Department }}</dd>
                                                        <dt class="col-sm-5 fw-bolder mb-1">Second Rep. To:</dt>
                                                        <dd class="col-sm-7 mb-1">
                                                            <label>
                                                                {{ rep_employees.rep2 }}
                                                            </label>
                                                        </dd>
                                                        <dt class="col-sm-5 fw-bolder mb-1">Joining Date:</dt>
                                                        <dd class="col-sm-7 mb-1">{{ emp_detail1.JoiningDate }}</dd>
                                                        <dt class="col-sm-5 fw-bolder mb-1">Probation End:</dt>
                                                        <dd class="col-sm-7 mb-1">{{ emp_detail1.ProbationEnd }}</dd>
                                                        <dt class="col-sm-5 fw-bolder mb-1">Blood Group:</dt>
                                                        <dd class="col-sm-7 mb-1">{{ emp_detail1.BloodGroup }}</dd>
                                                        <dt class="col-sm-5 fw-bolder mb-1">CNIC Expiry:</dt>
                                                        <dd class="col-sm-7 mb-1">{{ emp_detail1.CnicExpiry }}</dd>
                                                        <dt class="col-sm-5 fw-bolder mb-1">Job Status:</dt>
                                                        <dd class="col-sm-7 mb-1">{{ emp_detail1.JobStatus }}</dd>
                                                        <dt class="col-sm-5 fw-bolder mb-1">Phone Number:</dt>
                                                        <dd class="col-sm-7 mb-1">{{ emp_detail1.Mobile }}</dd>
                                                        <dt class="col-sm-5 fw-bolder mb-1">Complete Address:</dt>
                                                        <dd class="col-sm-7 mb-1">{{ emp_detail1.Address }},
                                                            {{ emp_detail1.City }}
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Project table -->

                                    <div class="card">
                                        <h4 class="card-header">Qualification List</h4>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Institute Name</th>
                                                    <th>Degree Type</th>
                                                    <th>Degree Name</th>
                                                    <th>Passing Year</th>
                                                </tr>
                                                </thead>
                                                <tbody style="text-align:center">
                                                <tr v-for='edu_detail1 in edu_detail'>
                                                    <td></td>
                                                    <td style="text-align:left">{{ edu_detail1.InstituteName }}</td>
                                                    <td style="text-align:left">{{ edu_detail1.DegreeType }}</td>
                                                    <td style="text-align:left">{{ edu_detail1.DegreeName }}</td>
                                                    <td style="text-align:left">{{ edu_detail1.PassingYear }}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <h4 class="card-header">Work Experience</h4>
                                        <div class="card-body pt-1">
                                            <ul v-for='exp_detail1 in exp_detail' class="timeline ms-50">
                                                <li class="timeline-item">
                                                    <span
                                                        class="timeline-point timeline-point-info timeline-point-indicator"></span>
                                                    <div class="timeline-event">
                                                        <div
                                                            class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
                                                            <h6>{{ exp_detail1.JobTitle }}</h6>
                                                            <span
                                                                class="timeline-event-time me-1">{{ exp_detail1.StartingDate }} to {{ exp_detail1.LeavingDate }}</span>
                                                        </div>
                                                        <p>{{ exp_detail1.CompanyName }}</p>
                                                        <div class="d-flex flex-row align-items-center mb-50">
                                                            <div style="margin-left:30px" class="avatar me-50">

                                                            </div>
                                                            <div class="user-info">
                                                                <h6 class="mb-0">Reference Name</h6>
                                                                <p class="mb-0">{{ exp_detail1.Refrence }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <h4 class="card-header">Remarks</h4>
                                        <div class="card-body pt-1" v-for="emp_detail1 in emp_detail">
                                            <label v-html='emp_detail1.remarks'></label>
                                        </div>
                                    </div>
                                    <!-- /Activity Timeline -->
                                </div>
                                <!--/ User Content -->
                            </div>
                        </section>
                    </div>
                </div>
            </b-modal>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            status: '',
            checkConnection: '',
            time: '',

            weather: [],
            city: '',
            desc: '',
            temp: '',
            humidity: '',
            country: '',
            sunrise: '',
            sunset: '',
            windspeed: '',
            icon: '',

            url: window.location.href,
            url_s1: '',
            url_s2: '',

            any_notification: '',
            notifications: {},
            online: {},
            timer: null,

            user_session: {},
            exp_detail: {},
            edu_detail: {},
            emp_detail: {},
            rep_employees: {},
            percent: {},
            com_year: '',
            fetchimage: '',
            com_year: '',
            striped: true,

            max: 100,
            oldPass: '',
            newPass1: '',
            newPass2: '',
            e_oldPass: '',
            e_newPass1: '',
            e_newPass2: '',
            showPassword1: false,
            showPassword2: false,

            old_success: '0',

            disabled: false,
            timeout: null,

            disabled1: false,
            timeout1: null,

            disabled2: false,
            timeout2: null,
            timeout4: null,
        }
    },
    methods: {
        online_fn() {
            this.checkConnection = navigator.onLine;
            this.timeout = setTimeout(() => {
                this.online_fn();
            }, 1000)
        },
        updateTime() {
            var cd = new Date();
            this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
            this.delay4();
        },
        zeroPadding(num, digit) {
            var zero = '';
            for (var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        },
        delay4() {
            this.timeout4 = setTimeout(() => {
                this.updateTime();
            }, 1000)
        },
        get_ip() {
            this.url_s1 = this.url.split('/');
            this.url_s2 = this.url_s1[0] + '//' + this.url_s1[2] + '/' + this.url_s1[3];
        },
        delay() {
            this.disabled = true
            this.confirm_old_pass()
            if (this.old_success == '0') {
                this.timeout = setTimeout(() => {
                    this.disabled = false
                }, 5000)
            } else if (this.old_success == '1') {
                this.timeout = setTimeout(() => {
                    this.disabled = false
                }, 5000)
            }
        },
        delay1() {
            this.disabled1 = true
            this.timeout1 = setTimeout(() => {
                this.disabled1 = false
            }, 5000)
            this.change_pass()
        },
        delay2() {
            this.disabled2 = true
            this.timeout2 = setTimeout(() => {
                this.disabled2 = false
            }, 5000)

            axios.post('./cache_cleared', {})
                .then(data => {
                    axios.get('./is_cleared')
                        .then((response) => this.notifications = response.data)
                    this.$toastr.s(data.data, "Success!");
                })
        },
        delay3() {
            this.disabled2 = true
            this.timeout2 = setTimeout(() => {
                this.disabled2 = false
            }, 5000)
        },
        send_update() {

            axios.post('./send_update', {})
                .then(data => {
                    this.$toastr.s(data.data, "Success!");
                })
        },
        change_pass() {
            if (this.newPass1 == '' || this.newPass1 != this.newPass2) {
                if (this.newPass1 == '') {
                    this.e_newPass1 = "New password must not be empty";
                } else {
                    this.e_newPass1 = "";
                }
                if (this.newPass1 != this.newPass2) {
                    this.e_newPass2 = "Confirm with same password";
                } else {
                    this.e_oldPass = "";
                }
                this.$toastr.e("Please enter password properly!", "Caution!");
            } else {

                axios.post('./change_Pass', {
                    newPass1: this.newPass1,
                    newPass2: this.newPass2,
                })
                    .then(data => {
                        if (data.data == 'Password changed!') {

                            this.logout();

                        } else {
                            this.$toastr.e("Password not changed!", "Caution!");
                        }
                    })


            }
        },
        confirm_old_pass() {
            if (this.oldPass == '') {
                this.e_oldPass = "Password must not be empty";
            } else {
                this.e_oldPass = "";
                axios.post('./confirm_oldPass', {
                    oldPass: this.oldPass,
                })
                    .then(data => {
                        if (data.data == 'Password exist!') {
                            this.$toastr.s("Old password is matched!", "Success!");
                            this.oldPass = "";
                            this.old_success = "1";
                        } else if (data.data == 'Password not exist!') {
                            this.$toastr.e("Invalid old password!", "Caution!");
                            this.e_oldPass = data.data;
                            this.old_success = "0";
                        }
                    })


            }

        },
        logout() {
            axios.get('./logout')
                .then(
                    response => {
                        // Clear the local storage
                        localStorage.clear();

                        window.location.reload();
                        
                        this.$toastr.i("Logout Successfully"); 

                    })
                .catch((error) => console.log(error));
        },
        locator() {
            var lat = '31.7247';
            var lon = '74.2668';
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=3c2628d86ecd093a44e4d450b2c22df9', {
                method: 'GET'
            })
                .then((responce) => responce.json())
                .then((data) => {
                        this.weather = data;
                        this.city = data.name;
                        this.country = data.sys.country;
                        this.desc = data.weather[0].main;
                        this.temp = data.main.temp;
                        this.humidity = data.main.humidity + '%';
                        this.windspeed = ((data.wind.speed) * (3.6)).toFixed(0) + 'km/h';
                        this.icon = data.weather[0].icon + '.png';
                    },
                    error => {
                        console.log(error.message);
                    },
                )
        },
    },
    mounted() {
        this.online_fn();
        this.locator();
        this.get_ip();
        this.delay4();
        axios.get('./is_cleared')
            .then((response) => this.notifications = response.data)

        axios.get('getindemployee_detail/' + 0)
            .then(data => {
                this.emp_detail = data.data.data;
                var g = data.data.data[0].JoiningDate.split('-');
                this.com_year = new Date().getFullYear() - new Date(g[0] + "-" + g[1] + "-" + g[2]).getFullYear()
            })
        axios.get('getemployee_education/' + 0)
            .then(data => {
                this.edu_detail = data.data.data;
            })
        axios.get('getemployee_exp/' + 0)
            .then(data => {
                this.exp_detail = data.data.data;
            })

        axios.get('reporting_employees/' + 0)
            .then(data => {
                this.rep_employees = data.data.data;
            })
            const cachedData = localStorage.getItem('user_session');

if (cachedData) {
  // Use the cached data
  this.user_session = JSON.parse(cachedData);
} else {
        axios.get('./user_session')
            .then((response) => {this.user_session = response.data
            
                localStorage.setItem('user_session', JSON.stringify(response.data));

            })

            .catch((error) => console.log(error));
        }
        axios.get('./fetch_image')
            .then((response) => this.fetchimage = response.data)

        axios.get('./success_array/' + 0)
            .then((response) => this.percent = response.data.data)
    }
}

</script>
<style>
.user-navbar{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 7px;
}
.user-name{
    color: #000;
    font-family: 'Poppins',sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.18px;
}
.user-status{
    color: #A4A4A4;
    font-family: 'Poppins',sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.13px;
}
.location{
    color: #000;
    font-family: 'Poppins',sans-serif;

font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.12px;
}

</style>

