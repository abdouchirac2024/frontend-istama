<template>
  <div>
    <button @click="openModal" class="btn btn-primary fs-16 fw-semibold">
      <span class="fs-21"><i class="bi bi-bookmark-plus-fill"></i></span>
      <i class="bi bi-plus"></i> Nouvelle route
    </button>
  
    <div class="modal fade" id="routeModal" tabindex="-1" aria-labelledby="routeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="routeModalLabel">Ajouter une nouvelle route</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
  
          <div class="modal-body">
            <form @submit.prevent="createRoute">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Nom de la route</label>
                    <input type="text" class="form-control" v-model="route.name" required />
                  </div>
                </div>
  
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Point de départ</label>
                    <input type="text" class="form-control" v-model="route.from" required />
                  </div>
                </div>
  
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Destination</label>
                    <input type="text" class="form-control" v-model="route.to" required />
                  </div>
                </div>
  
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="form-label">Coût (FCA)</label>
                    <input type="number" class="form-control" v-model="route.cost" required />
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
import ds from '../../../Services/DataService';

const route = ref({
  name: "",
  from: "",
  to: "",
  cost: 200,
});

const routes = ref([]); 
const toast = useToast();

const openModal = () => {
  $("#routeModal").modal("show");
};

const closeModal = () => {
  $("#routeModal").modal("hide");
  resetData();
};

const fetchRoutes = async () => {
  try {
    const response = await ds.get("/api/routes");
    routes.value = response.data;
  } catch (error) {
    console.error("Error fetching routes:", error);
  }
};

const createRoute = async () => {
  try {
    if (isNaN(route.value.cost)) {
      throw new Error('Invalid cost value');
    }

    await ds.post("/api/routes", {
      name: route.value.name,
      from: route.value.from,
      to: route.value.to,
      cost: route.value.cost,
    });

    await fetchRoutes();

    closeModal();
    toast.success('Route created successfully!', { icon: true, theme: 'bubble', timeout: 5000 });
  } catch (error) {
    console.error("Error creating route:", error);
    toast.error('Error creating route', { icon: true, theme: 'bubble', timeout: 5000 });
  }
};

const resetData = () => {
  route.value = {
    name: "",
    from: "",
    to: "",
    cost: 200,
  };
};

// Fetch routes when the component is mounted
import { onMounted } from 'vue';
onMounted(fetchRoutes);
</script>

<style scoped>
  /* Your styles go here */
</style>