<template>
  <div>
    <button @click="openModal" class="btn btn-primary fs-16 fw-semibold">
      <span class="fs-21"><i class="bi bi-bus"></i></span>
      Ajouter un bus
    </button>

    <div class="modal fade" id="busModal" tabindex="-1" aria-labelledby="busModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="busModalLabel">Ajouter un nouveau bus</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <form @submit.prevent="createBus">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Matricule</label>
                    <input type="text" class="form-control" v-model="bus.matricule" required />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Marque</label>
                    <input type="text" class="form-control" v-model="bus.brand" required />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Modèle</label>
                    <input type="text" class="form-control" v-model="bus.model" required />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Nombre de sièges</label>
                    <input type="text" class="form-control" v-model="bus.seat" required />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Statut</label>
                    <select class="form-control" v-model="bus.status" required>
                      <option value="actif">Actif</option>
                      <option value="inactif">Inactif</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Photo</label>
                    <input type="file" class="form-control" accept="image/*" @change="handleFileChange" />
                  </div>
                </div>

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
</template>


<script setup>
import { ref } from "vue";
import { useToast } from 'vue-toastification';
import axios from 'axios';

const bus = ref({
  matricule: "",
  brand: "",
  model: "",
  seat: "",
  status: "actif",
  photo: null,
});

const toast = useToast();

const openModal = () => {
  $("#busModal").modal("show");
};

const closeModal = () => {
  $("#busModal").modal("hide");
};

const handleFileChange = (event) => {
  bus.value.photo = event.target.files[0];
};

const createBus = async () => {
  try {
    const formData = new FormData();
    formData.append("matricule", bus.value.matricule);
    formData.append("brand", bus.value.brand);
    formData.append("model", bus.value.model);
    formData.append("seat", bus.value.seat);
    formData.append("status", bus.value.status);
    if (bus.value.photo) {
      formData.append("photo", bus.value.photo);
    }

    const response = await axios.post("/api/buses", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    closeModal();
    toast.success(response.data.message, { icon: true, theme: 'bubble', timeout: 5000 });
  } catch (error) {
    console.error("Erreur lors de la création du bus :", error);
    toast.error('Erreur lors de la création du bus', { icon: true, theme: 'bubble', timeout: 5000 });
  }
};
</script>

<style scoped>
/* Add your scoped styles if needed */
</style>
