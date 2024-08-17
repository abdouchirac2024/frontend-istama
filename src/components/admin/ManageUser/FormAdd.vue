<script setup>
import { ref, onMounted } from 'vue';
import AddUser from "./AddUser.vue"
import AddChauff from "./AddChauffeur.vue"
import EditUser from './EditUser.vue';
import ds from '../../../Services/DataService';
const role = ref()
const isEdit = ref(false)
const types = ref([]);
const openModal = () => {
    $('#exampleModal').modal('show');
};

const closeModal = () => {
    $('#exampleModal').modal('hide');
};

onMounted(async () => {
    await fetchData();
});

const fetchData = async () => {
    try {
        const response = await ds.get('/api/types');
        types.value = response.data.data;
        console.log(types);
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }
};

</script>  

<template>
    <div>
        <button @click="openModal" class="btn btn-primary fs-16 fw-semibold"><span class="px-2 fs-21"><i
                    class="bi-person-plus-fill"></i></span> Nouvel Utilisateur</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">

                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="card">
                        <div class="card-header p-5 py-4">
                            <h4 class="mb-0 ff-base fw-semibold">Ajouter un nouveau utilisateur</h4>
                        </div>
                        <div class="card-body">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-label">Selectionnez le type d'utilisateur</label>
                                    <select class="form-control border" v-model="type">
                                        <option value=""></option>
                                        <option v-for="type in types" :key="type.id" value="type.name">{{type.name}}</option>
                                    </select>
                                </div>
                            </div>
                            <EditUser v-if="isEdit" />
                            <template v-else>
                                <AddChauff v-if="type === 'chauffeur'" />
                                <AddUser v-else />
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  

  
