<script setup>
import { onMounted } from 'vue';
import "../../../assets/js/jquery-3.6.0.min.js"
import "../../../assets/js/bootstrap.bundle.min.js"
import "../../../plugins/datatables/js/jquery.dataTables.min.js"
import "../../../plugins/datatables/js/datatables.init.js"
import "../../../plugins/flatpickr/flatpickr.min.js"
import "../../../assets/js/theme.js"
//import "../../../plugins/jquery-repeater/jquery.repeater.js"
import jQuery from "jquery/dist/jquery.min.js";

import profil from "./profil.vue"



</script> 
  
<template>
    <header class="header vacasky-default-nav" id="header">
        <div class="d-none d-xl-block">
            <div
                class="header-inner d-flex align-items-center justify-content-around justify-content-xl-between flex-wrap flex-xl-nowrap gap-3 gap-xl-5">
                <div class="header-left-part d-flex align-items-center flex-grow-1 w-100">
                    <div class="header-search w-100">
                        <form class="search-form">
                            <input type="text" name="search" class="keyword form-control w-100" placeholder="Search">
                            <button type="submit" class="btn"><img src="../../../assets/img/svg/search.svg" alt=""></button>
                        </form>
                    </div>
                </div>

                <div class="header-right-part d-flex align-items-center flex-shrink-0">
                    <ul class="nav-elements d-flex align-items-center list-unstyled m-0 p-0">
                        <li class="nav-item nav-notification dropdown">
                            <a href="#" class="nav-toggler" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../../../assets/img/svg/bell.svg" alt="bell">
                                <div class="badge rounded-circle">12</div>
                            </a>
                            <div class="dropdown-widget dropdown-menu p-0">
                                <div class="dropdown-wrapper pd-50">
                                    <div class="dropdown-wrapper--title">
                                        <h4 class="d-flex align-items-center justify-content-between">Notifications <a
                                                href="#">View
                                                All</a></h4>
                                    </div>
                                    <ul class="notification-board list-unstyled">
                                        <li class="d-flex gap-3">
                                            <div class="media bg-primary text-white">
                                                <i class="bi bi-lightning"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <p class="fs-16 fw-medium"><a href="#">Classic Italy Tour Package</a> is
                                                    nearest you
                                                </p>

                                                <p
                                                    class="d-flex align-items-center justify-content-between fw-semibold text-primary mb-0">
                                                    <span class="fs-14 text-gray fw-normal">2m ago</span> <span>Mark
                                                        asread</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li class="d-flex gap-3">
                                            <div class="media bg-secondary text-white">
                                                <i class="bi bi-lightning"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <p class="fs-16 fw-medium"><a href="#">Grand Elysée</a> hotel booking is
                                                    confirmed.</p>
                                                <p
                                                    class="d-flex align-items-center justify-content-between fw-semibold text-primary mb-0">
                                                    <span class="fs-14 text-gray fw-normal">2m ago</span> <span>Mark as
                                                        read</span>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <h6 class="all-notifications mb-0"> <a href="#"
                                            class="btn bg-muted text-primary w-100 fw-semibold mt-3 ff-base">View All
                                            Notifications</a> </h6>
                                </div>
                            </div>
                        </li>
                        <profil />
                    </ul>
                </div>
            </div>
        </div>

        <div class="small-header d-flex align-items-center justify-content-between d-xl-none">
            <div class="logo">
                <a href="../index.html" class="d-flex align-items-center gap-3 flex-shrink-0">
                    <img src="../../../assets/img/footer-logo-2.svg" alt="logo">
                </a>
            </div>
            <button type="button" class="vacasky-mobile-menu-opener"><span class="close"><i
                        class="bi bi-arrow-left"></i></span> <span class="open"><i class="bi bi-list"></i></span></button>
        </div>
    </header>
</template>
