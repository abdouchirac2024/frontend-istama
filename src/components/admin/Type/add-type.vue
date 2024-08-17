<template>
    <div>
      <button @click="openModal" class="btn btn-primary fs-16 fw-semibold">
        <span class="fs-21"><i class="bi bi-bookmark-plus-fill"></i></span>
        <i class="bi bi-plus"></i> Nouveau type
      </button>
  
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
            </div>
  
            <div class="card">
              <div class="card-header p-5 py-4">
                <h4 class="mb-0 ff-base fw-semibold">Ajouter un nouveau type</h4>
              </div>
  
              <div class="card-body">
                <form @submit.prevent="createType">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label">Nom du type</label>
                        <input type="text" class="form-control" v-model="types.name" required />
                      </div>
                    </div>
  
                    <!-- Ajoutez d'autres champs de formulaire au besoin -->
  
                    <div class="form-group mb-0">
                      <div class="flex modal-footer" style="justify-content: space-between">
                        <button type="button" class="btn btn-danger" @click="closeModal">Annuler</button>
                        <button type="submit" class="btn btn-primary">Ajouter</button>
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
  


  <script setup>
  import { ref, defineProps, defineEmits } from "vue";
  import { useToast } from 'vue-toastification';
  import ds from '../../../Services/DataService';
  
  const props = defineProps(['refreshList']); // Receive the refreshList prop
  const emits = defineEmits(); // Define emits to trigger events
  
  const types = ref({
    name: "",
  });
  
  const toast = useToast();
  
  const openModal = () => {
    $("#exampleModal").modal("show");
  };
  
  const closeModal = () => {
    $("#exampleModal").modal("hide");
  };
  
  const createType = async () => {
    try {
      await ds.post("/api/types", types.value);
      closeModal();
  
      // Emit an event to notify the parent component to refresh the list
      emits('refreshList');
  
      toast.success('Type créé avec succès!', {
        icon: true,
        theme: 'bubble',
        timeout: 5000
      });
    } catch (error) {
      console.error("Erreur lors de la création du type :", error);
      toast.error('Erreur lors de la création du type', {
        icon: true,
        theme: 'bubble',
        timeout: 5000
      });
    }
  };
  </script>
  

  
<style scoped>
  
  </style>