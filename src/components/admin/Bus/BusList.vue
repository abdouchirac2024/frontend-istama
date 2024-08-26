<template>
  <Suspense>
    <main class="main-wrapper">
      <div class="container-fluid">
        <div class="inner-contents">
          <div class="card border-0 p-5">
            <div class="table-responsive">
              <div class="bus-list mt-5">
                <div class="card border-0 p-5">
                  <div class="card-header pb-5 border-0 d-flex align-items-center justify-content-between">
                    <h4 class="ff-base mb-0">Liste des bus</h4>
                    <AddBus @refreshList="fetchBuses" />
                    <EditBus :bus="selectedBus" @bus-updated="handleBusUpdated" />
                  </div>
                  <div class="card-body p-0">
                    <table class="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Matricule</th>
                          <th>Marque</th>
                          <th>Modèle</th>
                          <th>Sièges</th>
                          <th>Statut</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="bus in paginatedBuses" :key="bus.id">
                          <td>
                            <img :src="getImageUrl(bus.photo)" alt="Image du bus" class="bus-image" />
                          </td>
                          <td>{{ bus.matricule }}</td>
                          <td>{{ bus.brand }}</td>
                          <td>{{ bus.model }}</td>
                          <td>{{ bus.seat }}</td>
                          <td>{{ bus.status }}</td>
                          <td>
                            <a href="#" @click.prevent="editBus(bus)" class="settings" title="Settings" data-toggle="tooltip">
                              <i class="material-icons">&#xE8B8;</i>
                            </a>
                            <a href="#" @click.prevent="deleteBus(bus.id, bus.matricule)" class="delete" title="Delete" data-toggle="tooltip">
                              <i class="material-icons">&#xE5C9;</i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!-- Pagination code here -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Suspense>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import DataService from '@/services/DataService';
import AddBus from './add-bus.vue';
import EditBus from './edit-bus.vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const pageSize = 5;
const currentPage = ref(1);
const buses = ref([]);
const selectedBus = ref(null);

const fetchBuses = async () => {
  try {
    const response = await DataService.get('/api/buses');
    buses.value = response.data.data;
  } catch (error) {
    console.error('Error fetching buses:', error);
    toast.error('Erreur lors de la récupération des bus');
  }
};

const deleteBus = async (id, matricule) => {
  if (confirm('Voulez-vous vraiment supprimer ce bus?')) {
    try {
      await DataService.delete(`/api/buses/${id}`);
      fetchBuses();
      toast.success(`Le bus ${matricule} a été supprimé avec succès!`);
    } catch (error) {
      console.error('Error deleting bus:', error);
      toast.error('Erreur lors de la suppression du bus');
    }
  }
};

const editBus = (bus) => {
  selectedBus.value = { ...bus };
  // Ouvrir le modal d'édition
  $(".modal").modal("show");
};

const handleBusUpdated = () => {
  fetchBuses();
  toast.success('Bus mis à jour avec succès!');
};

const getImageUrl = (photoPath) => {
  return `${import.meta.env.VITE_APP_URL}/${photoPath}`;
};

const paginatedBuses = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return buses.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(buses.value.length / pageSize));

// Pagination methods here

onMounted(fetchBuses);
</script>

<style scoped>
.bus-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}
</style>