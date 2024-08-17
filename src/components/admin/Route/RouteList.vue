
 <template>
  <main class="main-wrapper">
    <div class="container-fluid">
      <div class="inner-contents">
        <div class="card border-0 p-5">
          <div class="table-responsive">
            <div class="hotel-list mt-5">
              <div class="card border-0 p-5">
                <div class="card-header pb-5 border-0 d-flex align-items-center justify-content-between">
                  <h4 class="ff-base mb-0">Liste des Routes</h4>
                  
                  <add-route />
                  <edit-route :route="selectedRoute" @route-updated="handleRouteUpdated" />
                </div>

                <div class="card-body p-0">
                  <div class="d-none d-xl-block">
                    <div class="input-group mb-4">
                      <span class="input-group-text" id="searchIcon">
                        <i class="bi bi-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        id="searchInput"
                        v-model="searchTerm"
                        @input="performSearch"
                        placeholder="Entrez un terme de recherche"
                        aria-describedby="searchIcon"
                      />
                      <button
                        class="btn btn-outline-secondary"
                        @click="clearSearch"
                        v-if="searchTerm !== ''"
                      >
                        <i class="bi bi-x"></i>
                      </button>
                    </div>
                  </div>

                  <div class="table-responsive">
                    <table class="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nom</th>
                          <th>Point de départ</th>
                          <th>Destination</th>
                          <th>Coût</th>
                          <th>Date de Mise à Jour</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="route in paginatedRoutes" :key="route.id">
                          <td>{{ route.id }}</td>
                          <td>{{ route.name }}</td>
                          <td>{{ route.from }}</td>
                          <td>{{ route.to }}</td>
                          <td>{{ route.cost }}</td>
                          <td>{{ formatDateTime(route.updated_at) }}</td>
                          <td>
                            <a href="#" class="settings" title="Settings" data-toggle="tooltip" @click="openEditModal(route.id)">
                              <i class="material-icons">&#xE8B8;</i>
                            </a>
                            <a href="#" @click="deleteRoute(route.id)" class="delete" data-toggle="tooltip">
                              <i class="material-icons">&#xE5C9;</i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div v-if="paginatedRoutes.length === 0" class="text-center mt-4">
                      <img src="https://img.freepik.com/psd-premium/3d-aucun-resultat-trouve_382786-1771.jpg?w=740" alt="Not Found" width="100" class="img-fluid" />
                      <p class="mt-3">Aucun résultat trouvé. Veuillez ajuster votre recherche.</p>
                    </div>

                    <div class="clearfix">
                      <div class="hint-text">
                        Affichage de <b>{{ paginatedRoutes.length }}</b> sur
                        <b>{{ routes.length }}</b> routes
                      </div>

                      <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                            <a class="page-link" @click="prevPage" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ 'active': page === currentPage }">
                            <a class="page-link" @click="gotoPage(page)">
                              {{ page }}
                            </a>
                          </li>
                       
                          <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                            <a class="page-link" href="#" v-on:click.prevent="nextPage" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import ds from '../../../Services/DataService';
import AddRoute from './add-route.vue';
import EditRoute from './edit-route.vue';
import moment from 'moment';
import 'moment-timezone';
import { useToast } from 'vue-toastification';

const toast = useToast();
const pageSize = 5;
const currentPage = ref(1);
const routes = ref([]);
const searchTerm = ref('');

const formatDateTime = (dateTime) => {
  return moment.utc(dateTime).tz('Africa/Douala').format('DD/MM/YYYY HH:mm:ss');
};

onMounted(async () => {
  await fetchRoutes();
});

const paginatedRoutes = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return routes.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(routes.value.length / pageSize));

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const gotoPage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const selectedRoute = ref(null);




const openEditModal = (routeId) => {
  const foundRoute = routes.value.find(route => route.id === routeId);
  
  if (foundRoute) {
    selectedRoute.value = { ...foundRoute };
    $(".modal").modal("show");
  } else {
    console.error(`Route with id ${routeId} not found.`);
  }
};

const handleRouteUpdated = () => {
  const updatedRoutes = ds.get('/api/routes').data.data;
  routes.value = updatedRoutes;
};


const deleteRoute = async (routeId) => {
  try {
    await ds.delete(`/api/routes/${routeId}`);
    await fetchRoutes();

    console.log(`Route with ID ${routeId} successfully deleted.`);
    toast.success(`Route with ID ${routeId} successfully deleted!`, {
      icon: true,
      theme: 'bubble',
      timeout: 5000
    });
  } catch (error) {
    console.error('Error deleting route:', error);
    toast.error('Error deleting route', {
      icon: true,
      theme: 'bubble',
      timeout: 5000
    });
  }
};

const performSearch = () => {
  const filteredRoutes = routes.value.filter((route) => {
    const searchableFields = ['name', 'from', 'to'];
    return searchableFields.some((field) =>
      route[field].toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

  routes.value = filteredRoutes;
  currentPage.value = 1;
};

const clearSearch = () => {
  searchTerm.value = '';
  performSearch();
};

const fetchRoutes = async () => {
  try {
    const response = await ds.get('/api/routes');
    routes.value = response.data.data;

    if (!searchTerm.value) {
      paginatedRoutes.value = [...routes.value];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    toast.error('Error fetching data', {
      icon: true,
      theme: 'bubble',
      timeout: 5000
    });
  }
};

</script>


<style scoped>
.table-responsive {
  margin: 30px 0;
}

.table-wrapper {
  min-width: 1000px;
  background: #fff;
  padding: 20px 25px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
}

table.table tr th:first-child {
  width: 60px;
}

table.table tr th:last-child {
  width: 100px;
}

table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}

table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}

table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}

table.table td:last-child i {
  opacity: 0.9;
  font-size: 22px;
}

table.table td a {
  font-weight: bold;
  color: #566787;
  display: inline-block;
  text-decoration: none;
}

table.table td a:hover {
  color: #2196F3;
}

table.table td a.settings {
  color: #2196F3;
}

table.table td a.delete {
  color: #F44336;
}

table.table td i {
  font-size: 19px;
}

table.table .avatar {
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}

.status {
  font-size: 30px;
  margin: 2px 2px 0 0;
  display: inline-block;
  vertical-align: middle;
  line-height: 10px;
}

.text-success {
  color: #10c469;
}

.text-info {
  color: #62c9e8;
}

.text-warning {
  color: #FFC107;
}

.text-danger {
  color: #ff5b5b;
}

.pagination {
  float: right;
  margin: 0 0 5px;
}

.pagination li a {
  border: none;
  font-size: 13px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}

.pagination li a:hover {
  color: #666;
}

.pagination li.active a,
.pagination li.active a.page-link {
  background: #0313f4;
}

.pagination li.active a:hover {
  background: #0397d6;
}

.pagination li.disabled i {
  color: #ccc;
}

.pagination li i {
  font-size: 16px;
  padding-top: 6px
}

.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 13px;
}
</style>