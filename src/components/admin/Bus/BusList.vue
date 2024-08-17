<!-- <template>
    <Suspense>
      <main class="main-wrapper">
        <div class="container-fluid">
          <div class="inner-contents">
            <div class="card border-0 p-5">
              <div class="table-responsive">
                <div class="hotel-list mt-5">
                  <div class="card border-0 p-5">
                    <div class="card-header pb-5 border-0 d-flex align-items-center justify-content-between">
                      <h4 class="ff-base mb-0">Liste des Bus</h4>
                      <addBus @busAdded="handleBusAdded" />
                    </div>
                    <div class="card-body p-0">
                      <div class="table-responsive">
                        <table class="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Matricule</th>
                              <th>Marque</th>
                              <th>Modèle</th>
                              <th>Nombre de sièges</th>
                              <th>Statut</th>
                              <th>Photo</th>
                              <th>Date de Mise à Jour</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="bus in paginatedBuses" :key="bus.id">
                              <td>{{ bus.id }}</td>
                              <td>{{ bus.matricule }}</td>
                              <td>{{ bus.brand }}</td>
                              <td>{{ bus.model }}</td>
                              <td>{{ bus.seat }}</td>
                              <td>{{ bus.status }}</td>
                              <td><img :src="bus.photo" alt="Bus Photo" class="img-fluid" style="max-width: 100px;" /></td>
                              <td>{{ formatDateTime(bus.updated_at) }}</td>
                              <td>
                         
  
                                <a href="#" @click="deleteBus(bus.id)" class="delete" data-toggle="tooltip">
                                  <i class="material-icons">&#xE5C9;</i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="clearfix">
                          <div class="hint-text">
                            Affichage de <b>{{ paginatedBuses.length }}</b> sur
                            <b>{{ buses.length }}</b> bus
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
                                <a class="page-link" @click="nextPage" aria-label="Next">
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
    </Suspense>
  </template>
  
  <script setup>
  import { onMounted, ref, computed } from 'vue';
  import ds from "../../../Services/DataService";
  import addBus from './add-bus.vue';

  import moment from 'moment';
  import 'moment-timezone';
  import { useToast } from 'vue-toastification';
  
  const toast = useToast();
  const pageSize = 5;
  const currentPage = ref(1);
  const buses = ref([]);
  
  const formatDateTime = (dateTime) => {
    return moment.utc(dateTime).tz('Africa/Douala').format('DD/MM/YYYY HH:mm:ss');
  };
  
  onMounted(async () => {
    try {
      const response = await ds.get('/api/buses/not-trashed');
      buses.value = response.data.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      toast.error('Erreur lors de la récupération des données', {
        icon: true,
        theme: 'bubble',
        timeout: 5000
      });
    }
  });
  
  const paginatedBuses = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    const end = start + pageSize;
    return buses.value.slice(start, end);
  });
  
  const totalPages = computed(() => Math.ceil(buses.value.length / pageSize));
  
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
    currentPage.value = page;
  };
  
  
  const handleBusAdded = () => {
    // Mettre à jour la liste des bus après une ajout réussie
    fetchBuses();
  };
  
  const handleBusEdited = () => {
    // Mettre à jour la liste des bus après une édition réussie
    fetchBuses();
  };
  
  const deleteBus = async (busId) => {
    try {
      await ds.delete(`/api/buses/${busId}`);
      const response = await ds.get('/api/buses');
      buses.value = response.data.data;
  
      console.log(`Le bus avec l'ID ${busId} a été supprimé avec succès.`);
      toast.success(`Le bus avec l'ID ${busId} a été supprimé avec succès!`, {
        icon: true,
        theme: 'bubble',
        timeout: 5000
      });
    } catch (error) {
      console.error('Erreur lors de la suppression du bus :', error);
      toast.error('Erreur lors de la suppression du bus', {
        icon: true,
        theme: 'bubble',
        timeout: 5000
      });
    }
  };
  
  const fetchBuses = async () => {
      try {
        const response = await ds.get('/api/buses/not-trashed');
        buses.value = response.data.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        toast.error('Erreur lors de la récupération des données', {
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
  </style> -->
  
  
  
  
  
  
  
  
  
  
  
  
  <script setup>
  import { RouterLink } from "vue-router";
  import AddBus from "./add-bus.vue";
  import DataTable from 'datatables.net-vue3';
  import DataTablesCore from 'datatables.net';
  import { ref } from "vue"
  DataTable.use(DataTablesCore);
  
  
  
  
  
  </script>
  
  <template>
      <main class="main-wrapper">
  
          <div class="container-fluid">
              <div class="inner-contents">
  
                  <div class="card border-0 p-5">
                      <div class="table-responsive">
  
                          <div class="hotel-list mt-5">
  
                              <div class="card border-0 p-5">
                                  <div class="card-header pb-5 border-0  d-flex align-items-center justify-content-between">
                                      <h4 class="ff-base mb-0">Liste des bus </h4>
                                      <AddBus />
                                  </div>
                                  <div class="card-body p-0">
                                      <div class="table-responsive">
                                          <DataTable id="table-2" class="display text-center w-100">
                                              <thead>
                                                  <!-- New Table Row Start -->
                                                  <tr>
                                                      <th>
                                                          <input type="checkbox" class="form-check-input" name="checkbox1"
                                                              value="">
                                                      </th>
                                                      <th>Nomination</th>
                                                      <th>Capacité</th>
                                                      <th>Chauffeurs</th>
                                                      <th>Status</th>
                                                      <th>Actions</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <!-- New Table Row Start -->
                                                  <tr>
                                                      <td>
                                                          <input type="checkbox" class="form-check-input" name="checkbox1"
                                                              value="">
                                                      </td>
                                                      <td>
                                                          <div class="employee d-flex align-items-center gap-2 flex-wrap">
                                                              <div class="profilepicture flex-shrink-0 d-none d-xl-block">
                                                                 
                                                                  <img :src="('@/assets/img/hotels/1.jpg')" alt="img" width="50" height="50">
                                                              </div>
                                                              <div class="description">
                                                                  <h6 class="fs-14 fw-semibold lh-18 mb-0">Grand Bus num1
                                                                  </h6>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="fs-20 fw-medium text-primary">30 places</div>
                                                      </td>
                                                      <td>Classic Room</td>
                                                      <td>
                                                          <div class="badge badge-soft-success fw-medium"><i
                                                                  class="bi bi-check-lg"></i> Disponible</div>
                                                      </td>
                                                      <td>
                                                          <div class="dropdown">
                                                              <div class="btn-group gap-1">
                                                                  <button
                                                                      class="bg-soft-primary border-0 p-1 px-2 fs-20 lh-30 rounded-1"
                                                                      type="button" data-bs-toggle="tooltip"
                                                                      data-bs-placement="top" data-bs-title="Details"
                                                                      data-bs-custom-class="tooltip-primary">
                                                                      <i class="bi bi-eye-fill"></i>
                                                                  </button>
                                                                  <button
                                                                      class="bg-soft-danger border-0 p-1 px-2 fs-20 lh-30 rounded-1"
                                                                      type="button" data-bs-toggle="tooltip"
                                                                      data-bs-placement="top" data-bs-title="Remove"
                                                                      data-bs-custom-class="tooltip-primary">
                                                                      <i class="bi bi-trash-fill"></i>
                                                                  </button>
                                                              </div>
                                                          </div>
                                                      </td>
                                                  </tr>
                                                  <!-- New Table Row Start -->
                                                  <tr>
                                                      <td>
                                                          <input type="checkbox" class="form-check-input" name="checkbox1"
                                                              value="">
                                                      </td>
                                                      <td>
                                                          <div class="employee d-flex align-items-center gap-2 flex-wrap">
                                                              <div class="profilepicture flex-shrink-0 d-none d-xl-block">
                                                                  <img :src=" ('@/assets/img/hotels/2.jpg')"  alt="img" width="50"
                                                                      height="50">
                                                                     
                                                              </div>
                                                              <div class="description">
                                                                  <h6 class="fs-14 fw-semibold lh-18 mb-0">Grand Bus num2</h6>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="fs-20 fw-medium text-primary">55 places</div>
                                                      </td>
                                                      <td>Deluxe Room</td>
                                                      <td>
                                                          <div class="badge badge-soft-success fw-medium"><i
                                                                  class="bi bi-check-lg"></i> Disponible</div>
                                                      </td>
  
                                                      <td>
                                                          <div class="dropdown">
                                                              <div class="btn-group gap-1">
                                                                  <button
                                                                      class="bg-soft-primary border-0 p-1 px-2 fs-20 lh-30 rounded-1"
                                                                      type="button" data-bs-toggle="tooltip"
                                                                      data-bs-placement="top" data-bs-title="Details"
                                                                      data-bs-custom-class="tooltip-primary">
                                                                      <i class="bi bi-eye-fill"></i>
                                                                  </button>
                                                                  <button
                                                                      class="bg-soft-danger border-0 p-1 px-2 fs-20 lh-30 rounded-1"
                                                                      type="button" data-bs-toggle="tooltip"
                                                                      data-bs-placement="top" data-bs-title="Remove"
                                                                      data-bs-custom-class="tooltip-primary">
                                                                      <i class="bi bi-trash-fill"></i>
                                                                  </button>
                                                              </div>
                                                          </div>
                                                      </td>
                                                  </tr>
  
                                                  <!-- New Table Row Start -->
                                                  <tr>
                                                      <td>
                                                          <input type="checkbox" class="form-check-input" name="checkbox1"
                                                              value="">
                                                      </td>
                                                      <td>
                                                          <div class="employee d-flex align-items-center gap-2 flex-wrap">
                                                              <div class="profilepicture flex-shrink-0 d-none d-xl-block">
                                                                  <img :src="('@/assets/img/hotels/3.jpg')" alt="img" width="50"
                                                                      height="50">
                                                              </div>
                                                              <div class="description">
                                                                  <h6 class="fs-14 fw-semibold lh-18 mb-0">Grand Bus num3
                                                                  </h6>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="fs-20 fw-medium text-primary">45 places</div>
                                                      </td>
                                                      <td>Junior Suite</td>
                                                      <td>
                                                          <div class="badge badge-soft-warning fw-medium"><i
                                                                  class="bi bi-clock-fill"></i>Indisponible</div>
                                                      </td>
                                                      <td>
                                                          <div class="dropdown">
                                                              <div class="btn-group gap-1">
                                                                  <button
                                                                      class="bg-soft-primary border-0 p-1 px-2 fs-20 lh-30 rounded-1"
                                                                      type="button" data-bs-toggle="tooltip"
                                                                      data-bs-placement="top" data-bs-title="Details"
                                                                      data-bs-custom-class="tooltip-primary">
                                                                      <i class="bi bi-eye-fill"></i>
                                                                  </button>
                                                                  <button
                                                                      class="bg-soft-danger border-0 p-1 px-2 fs-20 lh-30 rounded-1"
                                                                      type="button" data-bs-toggle="tooltip"
                                                                      data-bs-placement="top" data-bs-title="Remove"
                                                                      data-bs-custom-class="tooltip-primary">
                                                                      <i class="bi bi-trash-fill"></i>
                                                                  </button>
                                                              </div>
                                                          </div>
                                                      </td>
                                                  </tr>
  
                                                  <!-- New Table Row Start -->
                                                  <tr>
                                                      <td>
                                                          <input type="checkbox" class="form-check-input" name="checkbox1"
                                                              value="">
                                                      </td>
                                                      <td>
                                                          <div class="employee d-flex align-items-center gap-2 flex-wrap">
                                                              <div class="profilepicture flex-shrink-0 d-none d-xl-block">
                                                                  <img :src="('@/assets/img/hotels/4.jpg')" alt="img" width="50"
                                                                      height="50">
                                                              </div>
                                                              <div class="description">
                                                                  <h6 class="fs-14 fw-semibold lh-18 mb-0">Grand Bus num4
                                                                  </h6>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="fs-20 fw-medium text-primary">45 places</div>
                                                      </td>
                                                      <td>Executive Suite</td>
                                                      <td>
                                                          <div class="badge badge-soft-success fw-medium"><i
                                                                  class="bi bi-check-lg"></i>Disponible</div>
                                                      </td>
                                                      <td>
                                                          <div class="btn-group gap-1">
                                                              <button
                                                                  class="bg-soft-primary border-0 p-1 px-2 fs-20 lh-30 rounded-1"
                                                                  type="button" data-bs-toggle="tooltip"
                                                                  data-bs-placement="top" data-bs-title="Details"
                                                                  data-bs-custom-class="tooltip-primary">
                                                                  <i class="bi bi-eye-fill"></i>
                                                              </button>
                                                              <button
                                                                  class="bg-soft-danger border-0 p-1 px-2 fs-20 lh-30 rounded-1"
                                                                  type="button" data-bs-toggle="tooltip"
                                                                  data-bs-placement="top" data-bs-title="Remove"
                                                                  data-bs-custom-class="tooltip-primary">
                                                                  <i class="bi bi-trash-fill"></i>
                                                              </button>
                                                          </div>
                                                      </td>
                                                  </tr>
  
                                                  <!-- New Table Row Start -->
                                                  <tr>
                                                      <td>
                                                          <input type="checkbox" class="form-check-input" name="checkbox1"
                                                              value="">
                                                      </td>
                                                      <td>
                                                          <div class="employee d-flex align-items-center gap-2 flex-wrap">
                                                              <div class="profilepicture flex-shrink-0 d-none d-xl-block">
                                                                  <img :src="('@/assets/img/hotels/5.jpg')" alt="img" width="50"
                                                                      height="50">
                                                              </div>
                                                              <div class="description">
                                                                  <h6 class="fs-14 fw-semibold lh-18 mb-0">Grand Bus num5
                                                                  </h6>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div class="fs-20 fw-medium text-primary">78 places</div>
                                                      </td>
                                                      <td>Classic Room</td>
                                                      <td>
                                                          <div class="badge badge-soft-warning fw-medium"><i
                                                                  class="bi bi-clock-fill"></i>Indisponible</div>
                                                      </td>
  
                                                      <td>
                                                          <div class="dropdown">
                                                              <div class="btn-group gap-1">
                                                                  <button
                                                                      class="bg-soft-primary border-0 p-1 px-2 fs-20 lh-30 rounded-1"
                                                                      type="button" data-bs-toggle="tooltip"
                                                                      data-bs-placement="top" data-bs-title="Details"
                                                                      data-bs-custom-class="tooltip-primary">
                                                                      <i class="bi bi-eye-fill"></i>
                                                                  </button>
                                                                  <button
                                                                      class="bg-soft-danger border-0 p-1 px-2 fs-20 lh-30 rounded-1"
                                                                      type="button" data-bs-toggle="tooltip"
                                                                      data-bs-placement="top" data-bs-title="Remove"
                                                                      data-bs-custom-class="tooltip-primary">
                                                                      <i class="bi bi-trash-fill"></i>
                                                                  </button>
                                                              </div>
                                                          </div>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </DataTable>
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