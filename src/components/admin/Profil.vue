<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from "../../stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = async () => {
  await authStore.logout();
  
  return await router.push("/login");
};

const User = authStore.user;
</script>

<template>
  <li class="nav-item nav-author">
    <a
      href="#"
      class="nav-toggler"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img :src="User.data.image" alt="img" width="60" class="rounded-2" />
      <div class="nav-toggler-content">
        <h5 class="ff-base fw-medium mb-0">
          {{ User.data.last_name }} {{ User.data.first_name }}
        </h5>
        <div class="ff-base fs-14 fw-normal text-gray">
          {{ User.data.email }}
        </div>
      </div>
    </a>
    <div class="dropdown-widget dropdown-menu p-0 admin-card">
      <div class="dropdown-wrapper">
        <div class="card mb-0">
          <div class="card-header p-3 text-center">
            <img
              :src="User.data.image"
              alt="img"
              width="80"
              class="rounded-circle avatar"
            />
            <div class="mt-2">
              <h6 class="ff-base fw-medium mb-0">
                {{ User.data.last_name }} {{ User.data.first_name }}
              </h6>
              <div class="ff-base fs-14 fw-normal text-gray">
                {{ User.data.email }}
              </div>
            </div>
          </div>
          <div class="card-body p-3">
            <ul class="list-unstyled p-0 m-0">
              <li>
                <a
                  href="profile.html"
                  class="fs-14 fw-normal text-dark d-block p-1"
                  ><i class="bi bi-person me-2"></i> Profile</a
                >
              </li>
              <li>
                <a
                  href="email.html"
                  class="fs-14 fw-normal text-dark d-block p-1"
                  ><i class="bi bi-envelope me-2"></i> Inbox</a
                >
              </li>
              <li>
                <a href="#" class="fs-14 fw-normal text-dark d-block p-1"
                  ><i class="bi bi-gear me-2"></i> Setting & Privacy</a
                >
              </li>
            </ul>
          </div>
          <div class="card-footer p-3">
            <a
              href="#"
              v-on:click.prevent="handleLogout"
              class="btn btn-outline-gray bg-transparent w-100 py-2 rounded-1 text-dark fs-14 fw-medium"
              ><i class="bi bi-box-arrow-right"></i> Logout</a
            >
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
