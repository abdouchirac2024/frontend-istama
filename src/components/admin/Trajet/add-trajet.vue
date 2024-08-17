<script setup>
import { ref } from 'vue';
import ds from '../../../Services/DataService';

const lieuxDepart = ref('');
const lieuxArrive = ref('');
const heurDepart = ref('');
const heurArrive = ref('');
const tarif = ref('')

const openModal = () => {
    $('#exampleModal').modal('show');
};

const closeModal = () => {
    $('#exampleModal').modal('hide');
};

const onCreer = async () => {
    console.log("click")
    try {
        const response = await ds.post('/api/trajets', {
            lieuxdepart: lieuxDepart.value,
            lieuxArrivee: lieuxArrive.value,
            tarification: tarif.value,
            dateheureDepart: heurDepart.value,
            dateheureArrivee: heurArrive.value,
        });

        console.log(response.data);
        closeModal();
    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
            console.error('Erreurs de validation:', error.response.data.errors);
        } else {
            console.error('Erreur lors de l\'ajout de l\'agent', error);
        }
    }
};
</script>

<template>
    <div>
        <button @click="openModal" class="btn btn-primary fs-16 fw-semibold"><span class="fs-21"><i
                    class="bi bi-bookmark-plus-fill"></i></span> <i class="bi bi-plus"></i> Nouveau
            Trajet</button>
        <!-- <button type="button" class="btn btn-primary" @click="openModal">Open modal</button> -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">

                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="card">
                        <div class="card-header p-5 py-4">
                            <h4 class="mb-0 ff-base fw-semibold">Ajouter un nouveau Trajet</h4>
                        </div>

                        <div class="card-body">
                            <form @submit.prevent="onCreer">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="form-label">Lieux Depart</label>
                                            <input type="text" v-model="lieuxDepart" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="form-label">Lieux d'arrivé</label>
                                            <input type="text" v-model="lieuxArrive" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="form-label">Heur Depart</label>
                                            <input type="date" v-model="heurDepart" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="form-label">Heur d'arrivé</label>
                                            <input type="date" v-model="heurArrive" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="form-label">Tarif</label>
                                            <input type="text" v-model="tarif" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group mb-0">
                                            <div class="flex modal-footer" style="justify-content: space-between">
                                                <button type="button" class="btn btn-danger"
                                                    @click="closeModal">Annuler</button>
                                                <button type="submit" class="btn btn-primary">Ajouter</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  

  