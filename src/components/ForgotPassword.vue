<script setup>
import ds from "../Services/DataService";
import { ref } from "vue";
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const errorMessages = ref([]);
const email = ref('')

const requestPasswordReset = async () => {
    try {
        const response = await ds.post('/api/auth/forgot-password', {
            email: email.value
        });
        console.log(response.data.msg);
        console.log(response.data.token)

        authStore.PasswordReset(response.data.token)

        errorMessages.value = [response.data.msg];

    } catch (error) {
        console.error("Erreur lors de la demande de réinitialisation de mot de passe", error);

    }
};
</script>

<template>
    <div class="bg-soft-danger forFixedNav">
        <div class="row align-items-center justify-content-center vh-100">
            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                <div class="card rounded-2 border-0 p-5 m-0">

                    <div class="card-header border-0 p-0 text-center">
                        <a href="../index.html" class="w-100 d-inline-block mb-5">
                            <!-- <img src="assets/img/footer-logo-2.svg" alt="img"> -->LOGO
                        </a>
                        <h3>Forgot your password?</h3>
                        <p class="fs-14 text-dark my-4">Enter your user account's verified email address and we will send
                            you a password reset link.</p>
                    </div>

                    <div class="card-body p-0">
                        <form @submit.prevent="requestPasswordReset" class="form-horizontal">
                            <div class="form-group">
                                <input type="email" class="form-control" v-model="email" placeholder="Email" required>
                            </div>

                            <button type="submit"
                                class="btn btn-primary w-100 text-uppercase text-white rounded-2 lh-34 ff-heading fw-bold shadow">Envoyez
                                la requette</button>
                        </form>
                        <div v-if="errorMessages.length > 0" class="alert alert-danger">
                            <ul>
                                <li v-for="message in errorMessages" :key="message">{{ message }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>