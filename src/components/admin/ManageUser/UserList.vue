<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue'
import ds from '../../../Services/DataService'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
DataTable.use(DataTablesCore);
import AddUser from "./FormAdd.vue"

const users = ref([]);
const pageSize = 5; // Nombre d'utilisateurs par page
let currentPage = ref(1);

onMounted(async () => {
    try {
        const response = await ds.get('/api/agents');
        console.log(response.data);
        users.value = response.data;

    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }
});

const deleteUser = (index) => {
    const userId = users.value[index].id;
    console.log(userId);
    ds.delete(`/api/agents/${userId}`).then(() => {
        users.value.splice(index, 1);
    }).catch((error) => {
        console.error('Erreur lors de la suppression de l\'utilisateur :', error);
    });
};


const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    const end = start + pageSize;
    return users.value.slice(start, end);
});


// Calculer le nombre total de pages
const totalPages = computed(() => Math.ceil(users.value.length / pageSize));

// Aller à la page suivante
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

// Aller à la page précédente
const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

// Aller à une page spécifique
const gotoPage = (page) => {
    currentPage.value = page;
};
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
                                    <div
                                        class="card-header pb-5 border-0  d-flex align-items-center justify-content-between">
                                        <h4 class="ff-base mb-0">Liste des Utilisateurs </h4>
                                        <AddUser />
                                    </div>
                                    <div class="table-responsive">
                                        <div class="">
                                            <table class="table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nom</th>
                                                        <th>Email</th>
                                                        <th>Role</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="user in users" :key="user.id">
                                                        <td>3</td>
                                                        <td><a href="#"><img :src="user.image" class="avatar" alt="Avatar">
                                                                {{ user.first_name }}</a></td>
                                                        <td>{{ user.email }}</td>
                                                        <td v-if="user.type_id === 1">Admin</td>
                                                        <tdv v-else>chauffeur</tdv>
                                                        <td v-if="user.active === 1"><span
                                                                class="status text-success">&bull;</span> Actif
                                                        </td>
                                                        <td v-else><span class="status text-danger">&bull;</span> Inactif
                                                        </td>
                                                        <td>
                                                            <a href="#" @click="editUser()" class="settings"
                                                                title="Settings" data-toggle="tooltip"><i
                                                                    class="material-icons">&#xE8B8;</i></a>
                                                            <a href="#" @click="deleteUser(user.id)" class="delete"
                                                                data-toggle="tooltip"><i
                                                                    class="material-icons">&#xE5C9;</i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="clearfix">
                                                <div class="hint-text">Showing <b>{{ paginatedUsers.length }}</b> out of
                                                    <b>{{ users.length }}</b> entries
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
                                                        <li class="page-item"
                                                            :class="{ 'disabled': currentPage === totalPages }">
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