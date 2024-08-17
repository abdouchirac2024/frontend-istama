<script setup>
import { useAuthStore } from "../stores/auth"
import { ref, computed } from 'vue';

const authStore = useAuthStore();

const isUserAdmin = computed(() => authStore.isAdmin());
</script>
<template>
    <router-view v-if="isUserAdmin" />
    <div v-else>
        <p>Vous n'avez pas l'autorisation d'accéder à cette page.</p>
    </div>
</template>

  