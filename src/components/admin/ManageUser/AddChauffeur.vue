<script setup>
import { ref } from 'vue';

const first_name = ref('');
const last_name = ref('');
const driving_license = ref('');

const openModal = () => {
    $('#exampleModal').modal('show');
};

const closeModal = () => {
    $('#exampleModal').modal('hide');
};

const sendMessage = () => {
    // Ajoutez le code pour envoyer le message ici
    console.log('Nom:', name.value);
    console.log('Email:', email.value);
    console.log('Mot de passe:', password.value);

    // Fermer le modal après avoir envoyé le message
    closeModal();
};
</script>

<template>
    <div>
        <form>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Nom</label>
                        <input type="text" class="form-control" name="full_name" required>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">email</label>
                        <input type="email" class="form-control" name="email" placeholder="Email ID" required>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">driving_license</label>
                        <input type="text" class="form-control" name="driving_license" required>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Mot de passe</label>
                        <input type="password" class="form-control" v-model="password" required>
                    </div>
                </div>

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
                            <button type="submit" class="btn btn-primary" @click="sendMessage">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    </div>
</template>
  

  