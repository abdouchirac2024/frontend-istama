<script setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "../../stores/auth"
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = async () => {
    const authStore = useAuthStore();
    await authStore.logout();
    await router.push('/login');
}

</script>

<template>
    <div class="vacasky-vertical-nav" style="position: fixed">
        <!-- Logo  -->
        <div class="logo d-flex align-items-center justify-content-between">
            <!-- <a href="/" class="d-flex align-items-center gap-3 flex-shrink-0"><img
                    src="../../../assets/img/footer-logo-2.svg" alt="logo">
            </a> -->
            LOGO
            <button type="button" class="vacasky-vertical-nav-toggle"><i class="bi bi-list"></i></button>
        </div>

        <div class="vacasky-navmenu">
            <ul class="main-menu">
                <li class="menu-item menu-item-has-children">
                    <router-link to="/admin/dashboard"><span class="nav-icon flex-shrink-0"><i
                                class="bi bi-speedometer fs-24"></i></span> <span class="nav-text">Dashboards</span>
                    </router-link>
                </li>
                <li class="menu-item menu-item-has-children">
                    <a href="#"> <span class="nav-icon flex-shrink-0"><i
                                class="bi bi-ticket-detailed-fill fs-24"></i></span> <span class="nav-text">Bookings</span>
                    </a>
                    <ul class="sub-menu">
                        <li class="menu-item"><a href="hotel-list.html"> Hotel Booking List</a></li>
                        <li class="menu-item"><a href="hotel-booking-details.html"> Hotel Booking Details</a></li>
                    </ul>
                    <span class='submenu-opener'><i class='bi bi-chevron-right'></i></span>
                </li>

                <li class="menu-item menu-item-has-children">
                    <a href="#"> <span class="nav-icon flex-shrink-0"><i class="bi bi-luggage-fill fs-24"></i></span> <span
                            class="nav-text">Tours</span>
                    </a>
                    <ul class="sub-menu">
                        <li class="menu-item"><a href="tour-list.html"> Tour Package List</a></li>
                        <li class="menu-item"><a href="tour-package-details.html"> Tour Package Details</a></li>
                    </ul>
                    <span class='submenu-opener'><i class='bi bi-chevron-right'></i></span>
                </li>

                <li class="menu-item">
                    <router-link to="/admin/userList"><span class="nav-icon flex-shrink-0"><i
                                class="bi bi-people-fill fs-24"></i></span> <span class="nav-text">Utilisateurs</span>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link to=""><span class="nav-icon flex-shrink-0"><i class="bi bi-star-fill fs-24"></i></span>
                        <span class="nav-text">Finance</span>
                    </router-link>
                </li>
                <li class="menu-item menu-item-has-children">
                    <router-link to="/admin/bus"> <span class="nav-icon flex-shrink-0"><i
                                class="bi bi-bus-front-fill fs-24"></i></span>
                        <span class="nav-text">Gestion des Bus</span>
                    </router-link>
                </li>
                <li class="menu-item menu-item-has-children">
                    <router-link to="/admin/trajet"> <span class="nav-icon flex-shrink-0"> <svg
                                xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 100 100">
                                <path fill="currentColor"
                                    d="M21 32C9.459 32 0 41.43 0 52.94c0 4.46 1.424 8.605 3.835 12.012l14.603 25.244c2.045 2.672 3.405 2.165 5.106-.14l16.106-27.41c.325-.59.58-1.216.803-1.856A20.668 20.668 0 0 0 42 52.94C42 41.43 32.544 32 21 32Zm0 9.812c6.216 0 11.16 4.931 11.16 11.129c0 6.198-4.944 11.127-11.16 11.127c-6.215 0-11.16-4.93-11.16-11.127c0-6.198 4.945-11.129 11.16-11.129zM87.75 0C81.018 0 75.5 5.501 75.5 12.216c0 2.601.83 5.019 2.237 7.006l8.519 14.726c1.193 1.558 1.986 1.262 2.978-.082l9.395-15.99c.19-.343.339-.708.468-1.082a12.05 12.05 0 0 0 .903-4.578C100 5.5 94.484 0 87.75 0Zm0 5.724c3.626 0 6.51 2.876 6.51 6.492c0 3.615-2.884 6.49-6.51 6.49c-3.625 0-6.51-2.875-6.51-6.49c0-3.616 2.885-6.492 6.51-6.492z" />
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M88.209 37.412c-2.247.05-4.5.145-6.757.312l.348 5.532a126.32 126.32 0 0 1 6.513-.303zm-11.975.82c-3.47.431-6.97 1.045-10.43 2.032l1.303 5.361c3.144-.896 6.402-1.475 9.711-1.886zM60.623 42.12a24.52 24.52 0 0 0-3.004 1.583l-.004.005l-.006.002c-1.375.866-2.824 1.965-4.007 3.562c-.857 1.157-1.558 2.62-1.722 4.35l5.095.565c.038-.406.246-.942.62-1.446h.002v-.002c.603-.816 1.507-1.557 2.582-2.235l.004-.002a19.64 19.64 0 0 1 2.388-1.256zM58 54.655l-3.303 4.235c.783.716 1.604 1.266 2.397 1.726l.01.005l.01.006c2.632 1.497 5.346 2.342 7.862 3.144l1.446-5.318c-2.515-.802-4.886-1.576-6.918-2.73c-.582-.338-1.092-.691-1.504-1.068Zm13.335 5.294l-1.412 5.327l.668.208l.82.262c2.714.883 5.314 1.826 7.638 3.131l2.358-4.92c-2.81-1.579-5.727-2.611-8.538-3.525l-.008-.002l-.842-.269zm14.867 7.7l-3.623 3.92c.856.927 1.497 2.042 1.809 3.194l.002.006l.002.009c.372 1.345.373 2.927.082 4.525l5.024 1.072c.41-2.256.476-4.733-.198-7.178c-.587-2.162-1.707-4.04-3.098-5.548zM82.72 82.643a11.84 11.84 0 0 1-1.826 1.572h-.002c-1.8 1.266-3.888 2.22-6.106 3.04l1.654 5.244c2.426-.897 4.917-1.997 7.245-3.635l.006-.005l.003-.002a16.95 16.95 0 0 0 2.639-2.287zm-12.64 6.089c-3.213.864-6.497 1.522-9.821 2.08l.784 5.479c3.421-.575 6.856-1.262 10.27-2.18zm-14.822 2.836c-3.346.457-6.71.83-10.084 1.148l.442 5.522c3.426-.322 6.858-.701 10.285-1.17zm-15.155 1.583c-3.381.268-6.77.486-10.162.67l.256 5.536c3.425-.185 6.853-.406 10.28-.678zm-15.259.92c-2.033.095-4.071.173-6.114.245l.168 5.541a560.1 560.1 0 0 0 6.166-.246z"
                                    color="currentColor" />
                            </svg></span>
                        <span class="nav-text">Configuration Trajets</span>
                    </router-link>
                </li>
                
                <li class="menu-item">
                    <router-link to="/admin/type">
                      <span class="nav-icon flex-shrink-0">
                        <i class="material-icons fs-24">insert_chart_outlined</i>
                      </span>
                      <span class="nav-text">Types</span>
                    </router-link>
                  </li>
                  
                  
                  <li class="menu-item">
                  <router-link to="/admin/route">
                    <span class="nav-icon flex-shrink-0">
                      <i class="material-icons fs-24">directions</i>
                    </span>
                    <span class="nav-text">Voyage</span>
                  </router-link>
                </li>


                <li class="menu-item">
                    <a href="#"><span class="nav-icon flex-shrink-0"><i class="bi bi-gear-fill fs-24"></i></span> <span
                            class="nav-text">Admin Settings</span>
                    </a>
                </li>

                <!-- <li class="menu-item">
                    <a href="#"><span class="nav-icon flex-shrink-0"><i class="bi bi-file-earmark-fill fs-24"></i></span>
                        <span class="nav-text">Documentation</span>
                    </a>
                </li> -->
                <li class="menu-item menu-item-has-children">
                    <router-link to="/admin/profil-admin"> <span class="nav-icon flex-shrink-0"><i
                                class="bi bi-person-fill fs-24"></i>
                        </span>
                        <span class="nav-text">Profile</span>
                    </router-link>
                </li>
                <li class="menu-item menu-item-has-children">
                    <router-link to="" @click="handleLogout"> <span class="nav-icon flex-shrink-0"><i
                                class="bi bi-box-arrow-right fs-24"></i></span>
                        <span class="nav-text">Logout</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
