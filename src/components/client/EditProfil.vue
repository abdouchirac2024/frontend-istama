<script setup>

</script>

<template>
    <main class="main-wrapper">
        <div class="container-fluid">
            <div class="inner-contents">

                <!-- Personal Information -->
                <div class="card">
                    <div class="card-header p-5 py-4">
                        <h4 class="mb-0 ff-base fw-semibold">Personal Information</h4>
                    </div>

                    <div class="card-body">
                        <form action="#" method="post">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Full Name</label>
                                        <input type="text" class="form-control" name="full_name" value="Erica Stocklin"
                                            placeholder="Full Name" required>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Email</label>
                                        <input type="email" class="form-control" name="email" value="ericastocklin@mail.com"
                                            placeholder="Email ID" required>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Phone</label>
                                        <input type="email" class="form-control" name="number" value="023456876"
                                            placeholder="Phone Number" required>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Nationality</label>
                                        <select class="form-control" name="nationality">
                                            <option value="0">Bangladeshi</option>
                                            <option value="1">Indian</option>
                                            <option value="2">France</option>
                                            <option value="3">USA</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Date of Birth</label>
                                        <input type="text" class="form-control flatpickr bg-white" name="dob" value=""
                                            required>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label class="form-label">Gender</label>
                                        <div class="d-flex align-items-center gap-5">
                                            <div class="form-check">
                                                <input type="radio" class="form-check-input" id="radio1" name="radio"
                                                    value="">
                                                <label class="form-label mb-0" for="radio1">Male</label>
                                            </div>
                                            <div class="form-check">
                                                <input type="radio" class="form-check-input" id="radio2" name="radio"
                                                    value="">
                                                <label class="form-label mb-0" for="radio2">Female</label>
                                            </div>
                                            <div class="form-check">
                                                <input type="radio" class="form-check-input" id="radio3" name="radio"
                                                    value="">
                                                <label class="form-label mb-0" for="radio3">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-label">Address</label>
                                        <textarea rows="5" id="address" class="form-control" name="address"
                                            placeholder="Details Information"></textarea>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label"> Photo </label>
                                        <div class="d-flex align-items-center gap-3">
                                            <div>
                                                <img class="img-thumbnail rounded-1" :src="('@/assetsassets/img/admin.jpg')" alt=""
                                                    width="80">
                                                    
                                               
                                            </div>
                                            <div class="input-group">
                                                <input type="file" class="form-control w-auto" id="" required>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group mb-0">
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <!-- Email Update -->
                <div class="card">
                    <div class="card-header p-5 py-4">
                        <h4 class="mb-0 ff-base fw-semibold">Email Update</h4>
                    </div>

                    <div class="card-body">
                        <form action="#" method="post">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-label">Type New Email</label>
                                        <input type="email" class="form-control" name="n_email" value=""
                                            placeholder="Type New Email ID" required>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-label">Password</label>
                                        <input type="password" class="form-control" name="password" value=""
                                            placeholder="Password" required>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group mb-0">
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <!-- Password Update -->
                <div class="card">
                    <div class="card-header p-5 py-4">
                        <h4 class="mb-0 ff-base fw-semibold">Password Update</h4>
                    </div>

                    <div class="card-body">
                        <form action="#" method="post">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-label">Current Password</label>
                                        <input type="password" class="form-control" name="password" value=""
                                            placeholder="Type Current Password" required>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-label">New Password</label>
                                        <input type="password" class="form-control" name="n_password" value=""
                                            placeholder="Type New Password" required>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-label">Confirm New Password</label>
                                        <input type="password" class="form-control" name="cn_password"
                                            placeholder="Confirm New Password" value="" required>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group mb-0">
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>