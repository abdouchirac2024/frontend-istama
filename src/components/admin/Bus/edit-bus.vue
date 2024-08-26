<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="editBusModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editBusModalLabel">Modifier un bus existant</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Fermer"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateBus">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Matricule</label>
                    <input type="text" class="form-control" v-model="editedBus.matricule" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Marque</label>
                    <input type="text" class="form-control" v-model="editedBus.brand" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Modèle</label>
                    <input type="text" class="form-control" v-model="editedBus.model" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Nombre de sièges</label>
                    <input type="number" class="form-control" v-model="editedBus.seat" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Statut</label>
                    <select class="form-control" v-model="editedBus.status" required>
                      <option value="active">Actif</option>
                      <option value="inactive">Inactif</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Photo</label>
                    <input type="file" class="form-control" @change="handleFileUpload" accept="image/*" />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeModal">Annuler</button>
                <button type="submit" class="btn btn-primary">Modifier</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useToast } from 'vue-toastification';
  import DataService from '@/services/DataService';
  
  const props = defineProps({
    bus: Object
  });
  
  const emit = defineEmits(['bus-updated']);
  
  const toast = useToast();
  const editedBus = ref({});
  const newPhoto = ref(null);
  
  watch(() => props.bus, (newBus) => {
    if (newBus) {
      editedBus.value = { ...newBus };
    }
  }, { deep: true });
  
  const handleFileUpload = (event) => {
    newPhoto.value = event.target.files[0];
  };
  
  const updateBus = async () => {
    try {
      const formData = new FormData();
      Object.keys(editedBus.value).forEach(key => {
        formData.append(key, editedBus.value[key]);
      });
      if (newPhoto.value) {
        formData.append('photo', newPhoto.value);
      }
  
      await DataService.put(`/api/buses/${editedBus.value.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      closeModal();
      emit('bus-updated');
    } catch (error) {
      console.error('Error updating bus:', error);
      toast.error('Erreur lors de la mise à jour du bus');
    }
  };
  
  const closeModal = () => {
    $(".modal").modal("hide");
  };
  </script>