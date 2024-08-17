<script setup>
import Preloader from '../Preloader.vue';

</script>

<template>
    <Preloader /> 
    
    <main class="main-wrapper">
        <div class="container-fluid">
            <div class="inner-contents">

                <div class="bg-primary px-3 px-xxl-6 py-3 py-xxl-4 rounded-2">
                    <div class="row align-items-center">
                        <div class="col-xxl-3 col-9">
                            <div class="px-3 text-white">
                                <h1 class="text-white lh-50 mb-4">Vue d'ensemble</h1>
                                <p class="mb-0 fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>

                        <div class="col-xxl-8 col-12 order-2 order-xxl-0 mt-4 mt-xxl-0 px-xxl-0">
                            <div class="row align-items-center flex-wrap">
                                <div class="col-xxl-3 col-md-6">
                                    <div class="card border-0 card-graph mb-3 mb-xxl-0">
                                        <div class="card-body px-4 pe-0">
                                            <div class="card-img d-flex align-items-center gap-3 flex-wrap">
                                                <span class="d-inline-block bg-primary text-white flex-shrink-0"><i
                                                        class="bi bi-building"></i></span>
                                                <h6 class="mb-0 ff-base fs-20 fw-medium">Total de Bus</h6>
                                            </div>
                                            <div class="card-content mt-4">
                                                <h3 class="mb-0">256</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xxl-3 col-md-6">
                                    <div class="card border-0 card-graph mb-3 mb-xxl-0">
                                        <div class="card-body px-4 pe-0">
                                            <div class="card-img d-flex align-items-center gap-3 flex-wrap">
                                                <span class="d-inline-block bg-info text-white flex-shrink-0"><i
                                                        class="bi bi-coin"></i></span>
                                                <h6 class="mb-0 ff-base fs-20 fw-medium">Total Income</h6>
                                            </div>
                                            <div class="card-content mt-4">
                                                <h3 class="mb-0">$836,789</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xxl-3 col-md-6">
                                    <div class="card border-0 card-graph mb-3 mb-xxl-0">
                                        <div class="card-body px-4 pe-0">
                                            <div class="card-img d-flex align-items-center gap-3 flex-wrap">
                                                <span class="d-inline-block bg-primary text-white flex-shrink-0"><i
                                                        class="bi bi-hospital"></i></span>
                                                <h6 class="mb-0 ff-base fs-20 fw-medium">Total Rooms</h6>
                                            </div>
                                            <div class="card-content mt-4">
                                                <h3 class="mb-0">245</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xxl-3 col-md-6">
                                    <div class="card border-0 card-graph mb-3 mb-xxl-0">
                                        <div class="card-body px-4 pe-0">
                                            <div class="card-img d-flex align-items-center gap-3 flex-wrap">
                                                <span class="d-inline-block bg-info text-white flex-shrink-0"><i
                                                        class="bi bi-file-earmark-person-fill"></i></span>
                                                <h6 class="mb-0 ff-base fs-20 fw-medium">Total users</h6>
                                            </div>
                                            <div class="card-content mt-4">
                                                <h3 class="mb-0">347</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-1 col-3 ps-xxl-0">
                            <div class="dropdown text-end">
                                <a href="#" data-bs-toggle="dropdown" class="fs-24 text-white">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </a>
                                <div class="dropdown-menu p-0">
                                    <a class="dropdown-item" href="#">View</a>
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <a class="dropdown-item text-danger" href="#">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
