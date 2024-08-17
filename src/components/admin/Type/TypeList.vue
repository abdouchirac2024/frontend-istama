

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import ds from "../../../Services/DataService";
import addType from './add-type.vue';
import moment from 'moment';
import 'moment-timezone';
import { useToast } from 'vue-toastification';

const toast = useToast();
const pageSize = 5;
const currentPage = ref(1);
const types = ref([]);

const formatDateTime = (dateTime) => {
  return moment.utc(dateTime).tz('Africa/Douala').format('DD/MM/YYYY HH:mm:ss');
};

const refreshList = ref(false);

onMounted(async () => {
  await fetchData();
});

const fetchData = async () => {
  try {
    const response = await ds.get('/api/types');
    types.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    toast.error('Erreur lors de la récupération des données', {
      icon: true,
      theme: 'bubble',
      timeout: 5000
    });
  }
};

const paginatedTypes = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return types.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(types.value.length / pageSize));

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

const editType = async (typeId) => {
  try {
    const response = await ds.get(`/api/types/${typeId}`);
    const editedType = response.data.data;

    console.log('Éditer le type :', editedType);
    // Add your logic to handle the edit operation, e.g., open a modal with the form for editing
  } catch (error) {
    console.error('Erreur lors de la récupération des données du type à éditer :', error);
    toast.error('Erreur lors de la récupération des données du type à éditer', {
      icon: true,
      theme: 'bubble',
      timeout: 5000
    });
  }
};

const deleteType = async (typeId, typeName) => {
  try {
    await ds.delete(`/api/types/${typeId}`);
    const response = await ds.get('/api/types');
    types.value = response.data.data;
    console.log(response.data.data.name);
    console.log(`Le type ${typeName} a été supprimé avec succès.`);
    toast.success(`Le type ${typeName} a été supprimé avec succès!`, {
      icon: true,
      theme: 'bubble',
      timeout: 5000
    });

    // Trigger the refreshList event to update the data in the typelist component
    refreshList.value = true;
  } catch (error) {
    console.error('Erreur lors de la suppression du type :', error);
    toast.error('Erreur lors de la suppression du type', {
      icon: true,
      theme: 'bubble',
      timeout: 5000
    });
  }
};

// Watch for changes in refreshList and trigger fetchData
watch(() => {
  if (refreshList.value) {
    fetchData();
    refreshList.value = false;
  }
});
</script>


<template>
  <Suspense>
    <main class="main-wrapper">
      <div class="container-fluid">
        <div class="inner-contents">
          <div class="card border-0 p-5">
            <div class="table-responsive">
              <div class="hotel-list mt-5">
                <div class="card border-0 p-5">
                  <div class="card-header pb-5 border-0 d-flex align-items-center justify-content-between">
                    <h4 class="ff-base mb-0">Liste des Types </h4>
                    <addType />

                  </div>
                  <div class="card-body p-0">
                    <div class="table-responsive">
                      <table class="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nom du Type</th>
                            <th>Date de Création</th>
                            <th>Date de Mise à Jour</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="type in paginatedTypes" :key="type.id">
                            <td>{{ type.id }}</td>
                            <td>{{ type.name }}</td>


                            <td>{{ formatDateTime(type.created_at) }}</td>
                            <td>{{ formatDateTime(type.updated_at) }}</td>
                            <td>
                              <a href="" class="settings" title="Settings" data-toggle="tooltip">
                                <i class="material-icons">&#xE8B8;</i>
                              </a>
                              <a href="#" @click="deleteType(type.id, type.name)" class="delete" data-toggle="tooltip">
                                <i class="material-icons">&#xE5C9;</i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="clearfix">
                        <div class="hint-text">
                          Affichage de <b>{{ paginatedTypes.length }}</b> sur
                          <b>{{ types.length }}</b> types
                        </div>
                        <nav aria-label="Page navigation example">
                          <ul class="pagination">
                            <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                              <a class="page-link" @click="prevPage" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            <li class="page-item" v-for="page in totalPages" :key="page"
                              :class="{ 'active': page === currentPage }">
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