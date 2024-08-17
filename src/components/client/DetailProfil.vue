<script setup></script>

<template>
    <main class="main-wrapper">
        <div class="container-fluid">
            <div class="inner-contents">

                <div class="card border-0 candidate-profile overflow-visible">
                    <div class="cover-photo bg-size-cover bg-position-center"
                        style="background-image: url('../../../assets/img/cover-photo.jpg');"></div>
                    <div class="card-body pt-0">
                        <div class="d-flex align-items-center justify-content-between gap-4 mb-5 flex-wrap">
                            <div class="d-flex align-items-center gap-4 flex-shrink-0">
                                <img :src="('@/assets/img/admin.jpg')" alt="img" width="160" height="160"
                                    class="profile-photo rounded-2">
                                <div class="mt-5">
                                    <h2>Erica Stocklin</h2>
                                    <p class="fw-semibold text-gray mb-0">Paris, France</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-3">
                                <div>
                                    <a href="#" data-bs-toggle="dropdown" class="fs-24 text-gray">
                                        <i class="bi bi-three-dots-vertical"></i>
                                    </a>
                                    <div class="dropdown-menu p-0">
                                        <a class="dropdown-item" href="profile.html">Profile</a>
                                        <a class="dropdown-item" href="#">Settings</a>
                                        <a class="dropdown-item text-danger" href="#">Logout</a>
                                    </div>
                                </div>
                                <a href="#" class="btn btn-outline-primary ff-heading fs-14 fw-bold">Follow</a>
                                <a href="#" class="btn btn-primary ff-heading fs-14 fw-bold">Connect</a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xxl-8 col-lg-8 mb-5 mb-lg-0">
                                <h4>About Me</h4>
                                <p class="fs-14 text-gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                                <p class="fs-14 text-gray">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <a href="#" class="text-primary ff-heading fs-14 fw-bold">Read More</a>

                                <!-- Booking Summary -->
                                <div class="card mt-6">
                                    <div class="card-header p-5 py-4">
                                        <h4 class="mb-0 ff-base fw-semibold">My Booking</h4>
                                    </div>
                                    <div class="card-body">
                                        <table class="booking-table w-100">
                                            <thead class="bg-soft-info">
                                                <tr>
                                                    <th class="p-2">Check-In</th>
                                                    <th class="p-2">Check-Out</th>
                                                    <th class="p-2">Rooms</th>
                                                    <th class="p-2">Guests</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="p-2">
                                                        <div class="fw-semibold">14 Jan, 2024</div>
                                                        <p class="mb-0">01:00 PM</p>
                                                    </td>
                                                    <td class="p-2">
                                                        <div class="fw-semibold">18 Jan, 2024</div>
                                                        <p class="mb-0">09:00 AM</p>
                                                    </td>
                                                    <td class="p-2">
                                                        <div class="fw-semibold">2 Rooms</div>
                                                    </td>
                                                    <td class="p-2">
                                                        <div class="fw-semibold">4 Guests</div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="p-2">
                                                        <div class="fw-semibold">22 Sep, 2024</div>
                                                        <p class="mb-0">01:00 PM</p>
                                                    </td>
                                                    <td class="p-2">
                                                        <div class="fw-semibold">27 Sep, 2024</div>
                                                        <p class="mb-0">09:00 AM</p>
                                                    </td>
                                                    <td class="p-2">
                                                        <div class="fw-semibold">2 Rooms</div>
                                                    </td>
                                                    <td class="p-2">
                                                        <div class="fw-semibold">4 Guests</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-lg-4">
                                <div class="keep-sticky">
                                    <h4>Contact</h4>
                                    <ul class="list-unstyled d-flex flex-wrap gap-4">
                                        <li>
                                            <label class="fs-14 text-gray mb-1">Phone</label>
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="candidate--contact-icon bg-soft-primary text-center">
                                                    <i class="bi bi-telephone-fill"></i>
                                                </div>
                                                <div class="fs-14 fw-semibold"><a href="tel:+12 345 6789 0"
                                                        class="text-dark">+12 345 6789 0</a></div>
                                            </div>
                                        </li>

                                        <li>
                                            <label class="fs-14 text-gray mb-1">Email</label>
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="candidate--contact-icon bg-soft-primary text-center">
                                                    <i class="bi bi-envelope-fill"></i>
                                                </div>
                                                <div class="fs-14 fw-semibold"><a href="mailto:ericastocklin@gmail.com"
                                                        class="text-dark">ericastocklin@gmail.com</a></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>