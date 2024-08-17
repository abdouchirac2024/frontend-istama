<script setup>
import { RouterView } from 'vue-router';
import SideBar from "../components/admin/SideBar.vue";
import Navbar from "../components/admin/Navbar.vue";
import { useAuthStore } from "../stores/auth"
import { ref, computed } from 'vue';

const authStore = useAuthStore();

const isUserAdmin = computed(() => authStore.isAdmin());

</script>

<template>
   <div class="bg-light forFixedNav" v-if="isUserAdmin">
      <Navbar />
      <RouterView />
      <SideBar />
   </div>
   <div v-else>
      <p>Vous n'avez pas l'autorisation d'accéder à cette page.</p>
   </div>
</template>
<style></style>
