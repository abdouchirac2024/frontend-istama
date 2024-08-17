<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import ds from "../Services/DataService";

const router = useRouter();
const authStore = useAuthStore();
const errorMessages = ref([]);
const email = ref('');
const password = ref('');



const loginUser = async () => {
    try {
        const response = await ds.post('/api/auth/login', {
            email: email.value,
            password: password.value
        });

        authStore.login(response.data);
        authStore.isAdmin(response.data);

        const token = response.data.access_token;

        // Stocker le token dans le localStorage
        localStorage.setItem('token', token);
        console.log(token)
        ds.defaults.headers.common['Authorization'] = `Bearer ${token}`

        authStore.setToken(token)

        console.log(response.data)
        const redirectPath = determineRedirectPath(response.data.type);
        console.log('Redirect Path:', redirectPath);
        await router.push(redirectPath);
    } catch (error) {
        handleAuthError(error);
    }
};

const determineRedirectPath = (userType) => {
    if (userType === 'admin') {
        return '/admin/dashboard';
    } else {
        return '/user';
    }
};

const handleAuthError = (error) => {
    if (error.response && error.response.data && error.response.data.errors) {
        errorMessages.value = Object.values(error.response.data.errors).flat();
    } else {
        errorMessages.value = ['Une erreur s\'est produite lors de la connexion. Veuillez réessayer.'];
    }
};
</script>
  

<template>
    <div class="bg-primary forFixedNav">
        <div class="row align-items-center justify-content-center vh-100">
            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                <div class="card rounded-2 border-0 p-5 m-0">
                    <div class="card-header border-0 p-0 text-center">
                        <a href="../index.html" class="w-100 d-inline-block mb-5">
                            LOGO
                        </a>
                        <h3>Welcome back!</h3>
                        <p class="fs-14 text-dark my-4">Please login using your account.</p>
                    </div>

                    <!-- Affichage des messages d'erreur côté client -->
                    <div v-if="errorMessages.length > 0" class="alert alert-danger">
                        <ul>
                            <li v-for="message in errorMessages" :key="message">{{ message }}</li>
                        </ul>
                    </div>


                    <div class="card-body p-0">
                        <form @submit.prevent="loginUser" class="form-horizontal" method="post">
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="email" placeholder="Username or Email"
                                    required>
                            </div>

                            <div class="form-group">
                                <input type="password" class="form-control" v-model="password" placeholder="Type Password"
                                    required>
                            </div>

                            <button type="submit"
                                class="btn btn-primary w-100 text-uppercase text-white rounded-2 lh-34 ff-heading fw-bold shadow">
                                Login
                            </button>

                            <p class="d-flex align-items-center justify-content-between mt-4 mb-4 text-black">
                                Forgot your password?
                                <router-link to="/forget" class="text-primary fw-bold">Reset
                                    Here</router-link>
                            </p>

                            <!-- Utilisation de router-link pour la navigation vers la page d'inscription -->
                            <router-link to="/register"
                                class="btn btn-secondary w-100 text-uppercase text-white rounded-2 lh-34 ff-heading fw-bold">
                                Create an Account
                            </router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
