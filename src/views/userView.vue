<script setup>
import NavUser from "../components/client/NavUser.vue"
import { RouterView } from 'vue-router';
import sidebar from '../components/client/sidebar.vue';
</script>

<template>
    <div class="bg-light forFixedNav">
        <NavUser />
        <RouterView />
        <sidebar />
    </div>
</template>