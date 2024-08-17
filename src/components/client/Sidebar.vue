<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="vacasky-vertical-nav" style="position: fixed;">
        <!-- Logo  -->
        <div class="logo d-flex align-items-center justify-content-between">
            <a href="../index.html" class="d-flex align-items-center gap-3 flex-shrink-0">
                <!-- <img src="../../../assets/img/footer-logo-2.svg" alt="logo"> -->LOGO
            </a>
            <button type="button" class="vacasky-vertical-nav-toggle"><i class="bi bi-list"></i></button>
        </div>

        <div class="vacasky-navmenu">
            <ul class="main-menu">
                <li class="menu-item">
                    <router-link active-class="active" to="/user/detail-profil"><span class="nav-icon flex-shrink-0"><i
                                class="bi bi-speedometer fs-24"></i></span> <span class="nav-text">My
                            Profile</span>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link active-class="active" to="">
                        <span class="nav-icon flex-shrink-0"><i class="bi bi-cash-coin fs-24"></i></span> <span
                            class="nav-text">Historique
                            payement</span>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link active-class="active" to="/user/edit-profil"><span class="nav-icon flex-shrink-0"><i
                                class="bi bi-gear-fill fs-24"></i></span> <span class="nav-text">Profile
                            Settings</span>
                    </router-link>
                </li>
                <li class="menu-item"><a href="#"><span class="nav-icon flex-shrink-0"><i
                                class="bi bi-trash-fill fs-24"></i></span> <span class="nav-text">Delete Profile</span></a>
                </li>
                <li class="menu-item">
                    <router-link active-class="active" to="/login" class="text-primary"><span
                            class="nav-icon flex-shrink-0"><i class="bi bi-box-arrow-right fs-24"></i></span> <span
                            class="nav-text">Logout</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.active {
    /* Styles pour le lien actif */
    color: red;
    font-weight: bold;
    /* Ajoutez d'autres styles selon vos besoins */
}
</style>