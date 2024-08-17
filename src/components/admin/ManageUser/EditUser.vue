<script setup>
import { ref } from 'vue';
import ds from '../../../Services/DataService'; // Importez votre service API

const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');

const openModal = () => {
    $('#exampleModal').modal('show');
};

const closeModal = () => {
    $('#exampleModal').modal('hide');
};

const addAgent = async () => {
    try {
        const response = await ds.put('/api/agents', {
            first_name: name.value,
            last_name: name.value,
            phone: phone.value,
            email: email.value,
            password: password.value,
            password_confirmation: password.value,
            role_id: 1,
            active: 1,
            image: 'hjhjjhj',
        });

        console.log('Agent ajouté avec succès', response.data);
        closeModal();
    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
            // Afficher les erreurs de validation dans la console
            console.error('Erreurs de validation:', error.response.data.errors);
        } else {
            console.error('Erreur lors de l\'ajout de l\'agent', error);
        }
    }
};
</script>


<template>
    <div>
        <form @submit.prevent="editUser">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-control" v-model="name" required>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" v-model="email" required>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Phone</label>
                        <input type="text" class="form-control" v-model="phone" required>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Mot de passe</label>
                        <input type="password" class="form-control" v-model="password" required>
                    </div>
                </div>

                <!-- <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Role</label>
                        <select class="form-control" v-model="statut">
                            <option value="0"></option>
                            <option value="1">Admin</option>
                            <option value="2">User</option>
                        </select>
                    </div>
                </div> -->

                <div class="col-lg-6">
                    <div class="form-group">
                        <label class="form-label">Statut</label>
                        <div class="d-flex align-items-center gap-5">
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="radio1" v-model="statut" name="statut"
                                    value="">
                                <label class="form-label mb-0" for="radio1">Actif</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="radio2" v-model="statut" name="statut"
                                    value="">
                                <label class="form-label mb-0" for="radio2">Inactif</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="form-group mb-0">
                        <div class="flex modal-footer" style="justify-content: space-between;">
                            <button type="button" class="btn btn-danger" @click="closeModal">Annuler</button>
                            <button type="submit" class="btn btn-primary">Confirmer</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
  

  